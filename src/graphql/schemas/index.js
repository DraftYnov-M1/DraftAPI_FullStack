const typeDefs = `
        type Article {
            id : ID!
            title: String
            description: String
            date: String
            categories: Category
        }
        type Category {
            id : ID!
            name: String
            articles: [Article]
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
            category: ID
        }
        input FiltersInput {
            limit: Int
        }
        type Query {
            getArticles(filters: FiltersInput): [Article]!
            getArticle(id: ID!): Article
            getCategory(id: ID!): Category
            getCategories: [Category]!
        }
        type Mutation {
            createArticle(article:ArticleInput!): Article
            createCategory(name: String!, articles:[ID]): Category
            updateArticle(id: ID!, article: ArticleInput): Article!
            deleteArticle(id: ID!): Response!
            loginUser(mail: String!, password: String!): JWT!
            registerUser(user:UserInput!): JWT!
            getMe:User!
        }
    `;

module.exports = typeDefs;