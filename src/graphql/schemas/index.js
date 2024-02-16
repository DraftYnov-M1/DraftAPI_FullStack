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
            succes : Boolean
            message: String!
        }

        type Query {
            getArticles: [Article]!
            getArticle(id: ID!): Article
        }

        type Mutation {
            createArticle(title: String!, description: String!, date: String!): Article!
            deleteArticle(id: ID!): Article
            updateArticle(id: ID!, title: String!, description: String!, date: String!): Article!   
            registerUser(firstname: String!, lastname: String!, mail: String!, password: String!, isadmin: Boolean, datebirth: String, city: String, address: String, zipcode: Int, phone: String): User
        }
    `;

module.exports = typeDefs;