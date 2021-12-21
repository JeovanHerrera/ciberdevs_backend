// Traemos las dependencias necesarias
const express = require("express")
const { graphqlHTTP } = require('express-graphql');
const mongoose = require("mongoose")
const graphqlSchema = require("./graphql/schema")
const graphqlResolvers = require("./graphql/resolvers")
const cors = require("cors")
// Instanciamos Express, necesario en toda aplicación Express
const app = express()
app.use(cors());
// Declaramos el endpoint y comos egundo parámetro el esquema y resolver de graphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
)
// Este es el uri para la conexion a MongoDB se trae desde Mongo Atlas
// Usamos process.env para obtener los valores desde Nodemon
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.pypi6.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
//const uri = `mongodb+srv://ciberdevsc4:ciberdevsc4@cluster0.pypi6.mongodb.net/ciberdevsc4?retryWrites=true&w=majority`
// Declaramos las opciones para mongoose
const options = { useNewUrlParser: true, useUnifiedTopology: true }

// Usamos mongose para conectarnos al uri con las opciones y entonces escucharlas en el puerto 3000 usando app
mongoose
  .connect(uri, options)
  .then(() => app.listen(process.env.PORT || 4000, console.log("Server is running")))
  .catch(error => {
    throw error
  })