const { ApolloServer, gql } = require("apollo-server");
const { ApolloServerPluginCacheControl } = require("apollo-server-core");
const mongoose = require("mongoose");
const projectsManagement = require("./models/projectsManagement");
require("dotenv").config();

const url = process.env.mongo_uri;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONECTADO A MONGO"))
  .catch((e) => console.log("El error de conexión es: " + e));

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data
 const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.

  type projectModel {
    _id: ID
    Nombre: String
    Objetivos_Generales: String
    Objetivos_Especificos: String
    Presupuesto: Int
    Inicio: String
    Terminacion: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    projectModels: [projectModel]
  }

  type Mutation {
      crearProject(
        Nombre: String
        Objetivos_Generales: String
        Objetivos_Especificos: String
      ): projectModel

      deleteProject(
        _id: String!
      ): projectModel
  }
`; 

const resolvers = {
  Query: {
    projectModels: async () => {
      const proyecto = await projectsManagement.find();
      return proyecto;
    },
  },
  Mutation: {
    crearProject: async (parent, args) =>{
        const projectsAdd = new projectsManagement({
            Nombre: args.Nombre,
            Objetivos_Generales: args.Objetivos_Generales,
            Objetivos_Especificos: args.Objetivos_Especificos,
            });
        
        const projectCreated = await projectsAdd.save();
        return projectCreated;  
    },
    deleteProject: async (parent, args) =>{
        const projectDeleted = await projectsManagement.findOneAndDelete({ _id: args._id });
        return projectDeleted;  
    }

  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
