const typeDefs = `
        type Article {
            id : ID!
            title: String
            description: String
            date: String
        }
        type Response {
            succes : Boolean
            message: String!
        }
        type Query {
            sendMessage : Response!
            getArticles: [Article]!
            getArticle(id: ID!): Article
            deleteArticle(id: ID!): Article
            updateArticle(id: ID!, title: String!, description: String!, date: String!): Article!   
            createArticle(title: String!, description: String!, date: String!): Article!
        }
    `;

module.exports = typeDefs;