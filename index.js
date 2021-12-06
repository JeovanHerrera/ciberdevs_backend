const { ApolloServer, gql } = require("apollo-server");
const { ApolloServerPluginCacheControl } = require("apollo-server-core");
const mongoose = require("mongoose");
const typeDefs = require('./graphql/types');
const resolvers = require('./graphql/resolvers');
require("dotenv").config();

const url = process.env.mongo_uri;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONECTADO A MONGO"))
  .catch((e) => console.log("El error de conexión es: " + e));




// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
