const resolvers = {
    Query: {
        sendMessage: () => {
            return {
                // succes: true,
                message: "Hello world"
            }
        },
        getArticles: (parent, args, context, info) => {
            return [
                {
                    id: 1,
                    title: "Article 1",
                    description: "Description de l'article 1",
                    date: "2021-01-01"
                }
            ]
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