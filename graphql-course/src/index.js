//const express = require('express');
//import express from "express";
//import graphqlHTTP from "express-graphql";
//import schema from "./schema";

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
import schema from "./schema";
import { connect } from "./database";

const app = express();
connect();
//const schema = {};

app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    })
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context:{
        messageId:'test'
    }
}));

app.listen(3000, () => console.log('Server on port 3000'));