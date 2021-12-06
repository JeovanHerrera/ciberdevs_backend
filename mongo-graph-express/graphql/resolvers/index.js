// Comenzamos traendo el modelo de datos
const User = require("../../models/user")
const Project = require("../../models/project")
const Subscription = require("../../models/subscription")
const Develop = require("../../models/develop")

// Exportamos las funciones que resolverá las peticiones
module.exports = {

  // Para usuarios ------------------------------------------------------------------------------------------------
// Exportamos las funciones que resolverá las peticiones
// Esta función es para los querys
  users: async () => {
    try {
      // creamos una constante que mediante find me trae todo el arreglo de registros
      const usersFetched = await User.find()
      // Hacemos un map al arreglo y creamos otro arreglo pero con los datos que queremos mostrar
      return usersFetched.map(user => {
        return {
          ...user._doc,
          _id: user.id,
          createdAt: new Date(user._doc.createdAt).toISOString(),
        }
      })
    } catch (error) {
      throw error
    }
  },
  // Esta otra función es para el mutation
  createUser: async args => {
    try {
  // Creamos un objeto a partir de los args que son los que mandamos
      const { username, id_user, email, password, rol} = args.user
  // Creamos el objeto usuario con el objeto anterior
      const user = new User({
        username,
        id_user,
        email,
        password,
        rol,
      })
    // Hacemos un await guardando el usuario creado con save
      const newUser = await user.save()
    // Retornamos un objeto con el resultado del await y el id
      return { ...newUser._doc, _id: newUser.id }
    } catch (error) {
      throw error
    }
  },


  deleteUser: async function ({ _, _id }) {
    const user = await User.findById(_id);
    if (!user) {
      throw new Error('user Not found!');
    }
  await User.findByIdAndRemove(_id);
    return {
      ...user._doc,
      id: user._id.toString(),
    };
  },

  updateUser: async function ({ _id, user }) {
    const userx = await User.findById(_id);
    if (!userx) {
      throw new Error('User Not found!');
    }
    userx.username = user.username;
    userx.id_user = user.id_user;
    userx.email = user.email;
    userx.password = user.password;
    userx.rol = user.rol;
  const updatedUser = await userx.save();
    return {
      ...updatedUser._doc,
      _id: updatedUser._id.toString(),
    };
  },




  // Para Proyectos ------------------------------------------------------------------------------------------------
  projects: async () => {
    try {

      const projectsFetched = await Project.find()
      return projectsFetched.map(project => {
        return {
          ...project._doc,
          _id: project.id,
          createdAt: new Date(project._doc.createdAt).toISOString(),
        }
      })
    } catch (error) {
      throw error
    }
  },

  createProject: async args => {
    try {
      const { id_project, name_project,gen_target,spe_target,budget_project,date_startP,date_finishP,id_user,name_boss,status_project,phase_project} = args.project
      const project = new Project({
        id_project,    
        name_project,
        gen_target,
        spe_target,
        budget_project,
        date_startP,
        date_finishP,
        id_user,
        name_boss,
        status_project,
        phase_project,
      })
      const newProject = await project.save()
      return { ...newProject._doc, _id: newProject.id }
    } catch (error) {
      throw error
    }
  },

  deleteProject: async function ({ _, _id }) {
    const project = await Project.findById(_id);
    if (!project) {
      throw new Error('project Not found!');
    }
  await Project.findByIdAndRemove(_id);
    return {
      ...project._doc,
      id: project._id.toString(),
    };
  },


  updateProject: async function ({ _id, project }) {
    const projectx = await Project.findById(_id);
    if (!projectx) {
      throw new Error('Project Not found!');
    }

    projectx.id_project=project.id_project;    
    projectx.name_project=project.name_project;
    projectx.gen_target=project.gen_target;
    projectx.spe_target=project.spe_target;
    projectx.budget_project=project.budget_project;
    projectx.date_startP=project.date_startP;
    projectx.date_finishP=project.date_finishP;
    projectx.id_user=project.id_user;
    projectx.name_boss=project.name_boss;
    projectx.status_project=project.status_project;
    projectx.phase_project=project.phase_project;    
    
  const updatedProject= await projectx.save();
    return {
      ...updatedProject._doc,
      _id: updatedProject._id.toString(),
    };
  },


// Suscripciones al proyecto  ------------------------------------------------------------------------------------------------

  subscriptions: async () => {
    try {

      const subscriptionsFetched = await Subscription.find()
      return subscriptionsFetched.map(subscription => {
        return {
          ...subscription._doc,
          _id: subscription.id,
          createdAt: new Date(subscription._doc.createdAt).toISOString(),
        }
      })
    } catch (error) {
      throw error
    }
  },

  createSubscription: async args => {
    try {
      const { id_subscription,id_project,id_user,status_subscription,date_in_subs,date_out_subs} = args.subscription
      const subscription = new Subscription({
        id_subscription,    
        id_project,
        id_user,
        status_subscription,
        date_in_subs,
        date_out_subs,
      })
      const newSubscription = await subscription.save()
      return { ...newSubscription._doc, _id: newSubscription.id }
    } catch (error) {
      throw error
    }
  },

  deleteSubscription: async function ({ _, _id }) {
    const subscription = await Subscription.findById(_id);
    if (!subscription) {
      throw new Error('subscription Not found!');
    }
  await Subscription.findByIdAndRemove(_id);
    return {
      ...subscription._doc,
      id: subscription._id.toString(),
    };
  },

  updateSubscription: async function ({ _id, subscription }) {
    const subscriptionx = await Subscription.findById(_id);
    if (!subscriptionx) {
      throw new Error('Subscription Not found!');
    }

    subscriptionx.id_subscription=subscription.id_subscription;    
    subscriptionx.id_project=subscription.id_project;
    subscriptionx.id_user=subscription.id_user;
    subscriptionx.status_subscription=subscription.status_subscription;
    subscriptionx.date_in_subs=subscription.date_in_subs;
    subscriptionx.date_out_subs=subscription.date_out_subs;  
    
  const updatedSubscription= await subscriptionx.save();
    return {
      ...updatedSubscription._doc,
      _id: updatedSubscription._id.toString(),
    };
  },



  // Avances de proyectos  ------------------------------------------------------------------------------------------------

  develops: async () => {
    try {
      const developsFetched = await Develop.find()
      return developsFetched.map(develop => {
        return {
          ...develop._doc,
          _id: develop.id,
          createdAt: new Date(develop._doc.createdAt).toISOString(),
        }
      })
    } catch (error) {
      throw error
    }
  },

  createDevelop: async args => {
    try {
      const {id_develop,id_project,date_develop,description_develop,comment_boss} = args.develop
      const develop = new Develop({
        id_develop,
        id_project,
        date_develop,
        description_develop,
        comment_boss,
      })
      const newDevelop= await develop.save()
      return { ...newDevelop._doc, _id: newDevelop.id }
    } catch (error) {
      throw error
    }
  },

  deleteDevelop: async function ({ _, _id }) {
    const develop = await Develop.findById(_id);
    if (!develop) {
      throw new Error('Progress Not found!');
    }
  await Develop.findByIdAndRemove(_id);
    return {
      ...develop._doc,
      id: develop._id.toString(),
    };
  },

  updateDevelop: async function ({ _id, develop }) {
    const developx = await Develop.findById(_id);
    if (!developx) {
      throw new Error('Develop or Progress Not found!');
    }

    developx.id_develop=develop.id_develop;
    developx.id_project=develop.id_project;
    developx.date_develop=develop.date_develop;
    developx.description_develop=develop.description_develop;
    developx.comment_boss=develop.comment_boss;
    
  const updatedDevelop= await developx.save();
    return {
      ...updatedDevelop._doc,
      _id: updatedDevelop._id.toString(),
    };
  },


  

// fin
}