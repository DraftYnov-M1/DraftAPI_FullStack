const typeDefs = `
        type Article {
            id : ID!
            title: String
            description: String
            date: String
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