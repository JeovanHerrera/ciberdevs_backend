const { gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.

  type projectModel {
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

    editProject(
      _id: String!
      Nombre: String!
      Objetivos_Generales: String!
      Objetivos_Especificos: String!
    ): projectModel

}
`;

module.exports= typeDefs;