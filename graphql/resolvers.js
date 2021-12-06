const projectsManagement = require('../models/projectsManagement');
const { gql } = require("apollo-server");

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
      },
  
      editProject: async (parent, args) =>{
          const projectUpdated = new projectsManagement(
              {
                _id: args._id,
                Nombre: args.Nombre,
                Objetivos_Generales: args.Objetivos_Generales,
                Objetivos_Especificos: args.Objetivos_Especificos,
              },
              {
                collection: "Projects",
              }
            );
          const projUpdated = await projectsManagement.findByIdAndUpdate(args._id, projectUpdated);
          return projUpdated;    
      }
  
    },
  };

  module.exports = resolvers;