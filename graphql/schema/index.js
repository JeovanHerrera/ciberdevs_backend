// Nos traemos la funciónn que utilizaremos de la dependencia de graphql
const { buildSchema } = require("graphql")

// Utilizamos este método para crear nuestros esquemas de la siguiente forma
module.exports = buildSchema(`

  type User {
    _id: ID!
    username: String!
    id_user: Int!
    email: String!
    password: String!
    rol: String!
  }
  input UserInput {
    username: String!
    id_user: Int!
    email: String!
    password: String!
    rol: String!
  }

  type Project {
    _id: ID!
    id_project:Int!    
    name_project:String!
    gen_target:String!
    spe_target:String!
    budget_project:Int!
    date_startP:String!
    date_finishP:String!
    id_user:Int!
    name_boss:String!
    status_project:String!
    phase_project:String!
  }
  input ProjectInput {
    id_project: Int!    
    name_project: String!
    gen_target: String!
    spe_target: String!
    budget_project: Int!
    date_startP: String!
    date_finishP: String!
    id_user:Int!
    name_boss:String!
    status_project:String!
    phase_project:String!
  }


  type Subscription {
    _id: ID!
    id_subscription: Int!    
    id_project: Int!
    id_user: Int!
    status_subscription:String!
    date_in_subs:String!
    date_out_subs:String!
  }
  input SubscriptionInput {
    id_subscription: Int!    
    id_project: Int!
    id_user: Int!
    status_subscription:String!
    date_in_subs:String!
    date_out_subs:String!
  }

  type Develop {
    _id: ID!
    id_develop: Int!
    id_project: Int!
    date_develop: String!
    description_develop: String!
    comment_boss: String!
  }
  input DevelopInput {
    id_develop: Int!
    id_project: Int!
    date_develop: String!
    description_develop: String!
    comment_boss: String!
  }


  type Query {
    users:[User!]
    projects:[Project!]
    subscriptions:[Subscription!]
    develops:[Develop!]
  }

  type Mutation {
    createUser(user:UserInput): User
    createProject(project:ProjectInput): Project
    createSubscription(subscription:SubscriptionInput): Subscription
    createDevelop(develop:DevelopInput): Develop
    deleteUser(_id: ID): User
    deleteProject(_id: ID): Project
    deleteSubscription(_id: ID): Subscription
    deleteDevelop(_id: ID): Develop
    updateUser(_id: ID, user:UserInput): User
    updateProject(_id: ID, project:ProjectInput): Project
    updateSubscription(_id: ID, subscription:SubscriptionInput): Subscription
    updateDevelop(_id: ID, develop:DevelopInput): Develop
  }


  schema {
    query: Query
    mutation: Mutation
  }
`)