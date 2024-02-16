const database  = require("../../models");

const resolvers = {
    Query: {
        // Article
        getArticles: async (root, args, { models }) => {
            return await database.Article.findAll();
        },
        getArticle: async (root, args, { models }) => {
            return await database.Article.findByPk(args.id);
        },
        
    },

    Mutation: {

        createArticle: async (root, args, { models }) => {
            return await database.Article.create({
                title: args.title,
                description: args.description,
                date: args.date
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

        deleteArticle: async (root, args, { models }) => {
            return await database.Article.destroy({
                where: {
                    id: args.id
                }
            });
        },

        
        // User
        registerUser: async (root, args, { models }) => {
            return await database.User.create(args);
        }
    }


}

module.exports = resolvers;