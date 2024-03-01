const db = require("../../models");
const cryptPassword = require("../../helpers/cryptPassword");
const generateToken = require("../../helpers/generateToken");

const resolvers = {
    Query: {
        getArticles: async (parent, args, context, info) => {
            console.log(context);
            const articles = await db.Article.findAll();
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
            const { title, description, date } = args.article;
            const article = await db.Article.create({ title, description, date });
            return article;
        },
        updateArticle: async (parent, args, context, info) => {
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
        // getMe : async (parent, args, context, info) => {
            // Récupérer le token décodé depuis le context
            // Vérifier la validité du token // à faire avec la librairie jsonwebtoken (.verify) + dans une fonction réutilisable
            // Récupérer l'id de l'utilisateur depuis le token
            // Récupérer l'utilisateur depuis l'id
            // Retourner l'utilisateur
        // }
    }


}

module.exports = resolvers;