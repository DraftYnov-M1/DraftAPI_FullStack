const database  = require("../../models");

const resolvers = {
    Query: {
        sendMessage: () => {
            return {
                succes: true,
                message: "Hello world"
            }
        },
        getArticles: async (root, args, { models }) => {
            return await database.Article.findAll();
        },

        getArticle: async (root, args, { models }) => {
            return await database.Article.findByPk(args.id);
        },

        deleteArticle: async (root, args, { models }) => {
            return await database.Article.destroy({
                where: {
                    id: args.id
                }
            });
        },

        updateArticle: async (root, args, { models }) => {
            return await database.Article.update({
                title: args.title,
                description: args.description,
                date: args.date
            }, {
                where: {
                    id: args.id
                }
            });
        },

        createArticle: async (root, args, { models }) => {
            return await database.Article.create({
                title: args.title,
                description: args.description,
                date: args.date
            });
        }
    }
}

module.exports = resolvers;