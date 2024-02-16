const resolvers = {
    Query: {
        getArticles: async (parent, args, context, info) => {
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
        }
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
        }
    }


}

module.exports = resolvers;