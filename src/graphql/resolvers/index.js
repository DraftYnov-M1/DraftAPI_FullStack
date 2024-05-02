const db = require("../../models");
const cryptPassword = require("../../helpers/cryptPassword");
const generateToken = require("../../helpers/generateToken");
const ensureUserIsLogged = require("../validators");

const resolvers = {
    Query: {
        getCategories: async (parent, args, context, info) => { 
            const categories = await db.Category.findAll({
                include: [
                    {
                        model: db.Article,
                        as: "articles"
                    }
                ]
            });
            return categories;
        },
        getArticles: async (parent, args, context, info) => {
            const articles = await db.Article.findAll(
                {
                    limit: args.filters.limit || 6,
                    include: [
                        {
                            model: db.Category,
                            as: "categories",
                        }
                    ] 
                }
            );
            if (articles.length === 0) {
                const error = new Error("No articles found");
                error.extensions.code = "NOT_FOUND";
                return error;
            }
            return articles;
        },
        getArticle: (parent, args, context, info) => {
            const article = db.Article.findByPk(args.id);
            return article;
        },
    },
    Mutation: {
        createArticle: async (parent, args, context, info) => {
            ensureUserIsLogged(context);
            const { title, description, date } = args.article;
            const article = await db.Article.create({ title, description, date });
            return article;
        },
        createCategory: async (parent, args, context, info) => { 
            const { name, articles } = args;
            try {
                const category = await db.Category.create({ name });
                // Si des articles sont passés en paramètre, les ajouter à la catégorie
                for (const articleId of articles) {
                    const article = await db.Article.findByPk(articleId);
                    if(!article) {
                        return {
                            message: "Article not found",
                            success: false
                        }
                    }
                    // nouvelle méthode disponible sur l'instance de article
                    await article.addCategories(category);
                }
                return category;
            }
            catch (err) {
                console.log(err);
                return {
                    message: "Category not created",
                    success: false
                }
            }
        },
        updateArticle: async (parent, args, context, info) => {
            ensureUserIsLogged(context);
            const { title, description, date } = args.article;
            const article = await db.Article.findByPk(args.id);
            if (!article) {
                const error = new Error("Article not found");
                error.extensions.code = "NOT_FOUND";
                return error;
            }
            article.title = title;
            article.description = description;
            article.date = date;
            await article.save();
            return article;
        },
        deleteArticle: async (parent, args, content) => {
            ensureUserIsLogged(context);
            const { id } = args;
            const article = await db.Article.destroy({
                where: {
                    id: id
                }
            });
            if (!article) {
                return {
                    message: "Article not found",
                    success: false
                }
            }
            return {
                message: "Article deleted",
                success: true
            }
        },
        registerUser: async (parent, args, context, info) => {
            console.log(args, "ARGS");
            //aller chercher les inputs du resolver / les destructurer
            const { mail, password, firstName, lastName } = args.user;
            // Hasher le password récupéré de puis les inputs(bcrypt, argon2 etc...)
            const hashedPassword = await cryptPassword(password);
            // CRéer une instance de user avec les inputs et le password hashé
            // Sauvegarder l'instance de user en base de données
            if (hashedPassword) {
                const user = await db.User.create({
                    firstName: firstName,
                    lastName: lastName,
                    mail: mail,
                    password: hashedPassword
                });
                if (user) {
                    const token = generateToken({ id: user.id });
                    if (token) {
                        // Retourner le token
                        // Clean coding : séparer les fonctions de hashage et de génération de token
                        return {
                            token: token,
                            success: true
                        }
                    }
                }
            }
            // Si la sauvegarde est un succès, générer un token JWT (avec la librairy jsonwebtoken => .sign)
            
        },
        getMe: async (parent, args, context, info) => {
            ensureUserIsLogged(context);
            const user = await db.User.findByPk(context.user.id);
            return user;
        }
    }
}

module.exports = resolvers;