const typeDefs = `
        type Article {
            id : ID!
            title: String
            description: String
            date: String
        }
        type User {
            id : ID!
            firstName: String
            lastName: String
            mail: String
            password: String
            isAdmin: Boolean
        }
        type Response {
            success : Boolean!
            message: String!
        }
        type JWT {
            token: String!
        }
        input UserInput {
            firstName: String!
            lastName: String!
            mail: String!
            password: String!
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
            registerUser(user:UserInput!): JWT!
        }
    `;

module.exports = typeDefs;