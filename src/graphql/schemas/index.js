const typeDefs = `
        type Article {
            id : ID!
            title: String
            description: String
            date: String
        }

        input ArticleInput {
            title: String
            description: String
            date: String
        }

        type User {
            id: ID!
            firstname: String
            lastname: String
            mail: String
            password: String
            isadmin: Boolean
            datebirth: String
            city: String
            address: String
            zipcode: Int
            phone: String
        }

        input UserInput {
            firstname: String
            lastname: String
            mail: String
            password: String
            isadmin: Boolean
            datebirth: String
            city: String
            address: String
            zipcode: Int
            phone: String
        }

        type Response {
            success : Boolean!
            message: String!
        }
        input ArticleInput {
            title: String
            description: String
            date: String
        }
        type Query {
            getArticles: [Article]!
            getArticle(id: ID!): Article
        }
        type Mutation {
            createArticle(article:ArticleInput!): Article
            updateArticle(id: ID!, article: ArticleInput): Article!
            deleteArticle(id: ID!): Response!
        }
    `;

module.exports = typeDefs;