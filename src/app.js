const express = require('express');
require('dotenv').config()
const app = express();
const cors = require('cors');
const Sequelize = require('sequelize');
const config = require('./config/config.js')[process.env.NODE_ENV || 'development'];
const router = require('./routes/index.js');
const { ApolloServer } = require('@apollo/server');

const initApplication = async() => {
    app.use(cors())
    app.options(process.env.FRONTEND_URL, cors());

    const sequelize = new Sequelize(config.database, config.username, config.password, {
        port: config.port,
        host: config.host,
        dialect: config.dialect,
        dialectOptions: {
            connectTimeout: 60000
        }
    });

    sequelize.sync()
        .then(() => {
            console.log('database synchronised');
        })
        .catch(err => {
            console.error('database synchronisation error :', err);
        });

    app.get("/", (req, res) => {
        res.send("Welcome to my API");
    })

    app.use("/api", router);

    const typeDefs = `
        type Article {
            id : ID!
            title : String
            description : String
            
        }
    `;

    const serverGraphQl = new ApolloServer({
        // a passer : les types (typages des entités etdes resolvers)
        // resolvers: fonctions du CRUD
            // Querry: GET/READ
            // Mutation: tout le reste: PUT, DELETE, POST, CREATE, UPDATE
    })

    await serverGraphQl.start();

    app.use(ExpressMiddleware(ServerGraphQL, {
        path:'/graphql'
    }));

    app.listen(process.env.PORT, () => {
        console.log(`server launch on port ${process.env.PORT}`);
    });
}