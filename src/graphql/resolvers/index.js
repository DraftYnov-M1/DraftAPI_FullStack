const db = require("../../models");

const resolvers = {
    Query: {
        getArticles: async (parent, args, context, info) => {
            const articles = await db.Article.findAll();
            return articles;
        },
        getArticle: (parent, args, context, info) => {
            console.log(args);
            return {
                id: 1,
                title: "Article 1",
                description: "Description de l'article 1",
                date: "2021-01-01"
            };
        }
    }
}

module.exports = resolvers;