const { Console } = require("console");
const { AutoEncryptionLoggerLevel } = require("mongodb");
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

// Los esquemas se escriben en minúscula por convención
const usersSchema = mongoose.Schema(
  {
    user_name: String,
    cc: Number,
    age: String,
    profession: String,
    email: String,
    password: String,
    rol: String,
    active: Boolean,
    validation: Boolean,
  },
  { versionKey: false }
);

// Los modelos se escriben en minúscula por convención
const UsersModel = mongoose.model("users", usersSchema);

// Mostrar -- Definir nuestra función de mostrar los registros
const mostrar = async () => {
  const users = await UsersModel.find();
  console.log(users);
};

//mostrar()

// Crear
const crear = async () => {
  const users = new UsersModel({
    user_name: "Cosme Fulanita",
    cc: "0111111111",
    age: 210,
    gender: "female",
    profession: "teacher",
    email: "teacher_test@gmail.com",
    password: "super_Clav9",
    rol: "Adminsitrador",
    active: true,
    validation: true,
  });

  const resultado = await users.save();
  console.log(resultado);
};

//Crear Proyecto
const addProjects = () => {
  const projectsAdd = new projectsManagement({
    Nombre: "La Tierra Plana",
    Objetivos_Generales: "Probar que la tierra es plana",
    Objetivos_Especificos: "Tomar fotografías del limite de la tierra",
    Presupuesto: 3000000,

    Lider: {
      cedula: 1065601585,
      nombre: "Jeovan Herrera",
    },
    Estado: true,
    Fase: "iniciado",
  });

  projectsAdd.save().then((createdSale) => {
    console.log("Created succesfully");
  });
};

//Editar Proyecto
const editProjectsID = (id) => {
  const projectUpd = new projectsManagement(
    {
      _id: id,
      Estado: true,
    },
    {
      collection: "Projects",
    }
  );
  projectsManagement
    .findByIdAndUpdate(id, projectUpd)
    .then((productoResult) => {
      console.log("El Proyecto se actualizó satisfactoriamente");
    });
};

//Eliminar Proyectos
const deleteProjectsID = (id) => {
  const project = projectsManagement
    .deleteOne({ _id: id })
    .then((productoResult) => {
      console.log("El Proyecto se eliminó satisfactoriamente");
    });
};

//Listar Proyectos
const getProjects = () => {
  projectsManagement.find().then((saleResult) => {
    console.log(saleResult);
  });
};

// llamamos los procedimientos

//crear();
//addProjects();
//editProjectsID('619edefd3607f1736d8b2c59');
getProjects();
//deleteProjectsID('61a567d4b111cc2bca16dfb2');

//Editar

const actualizar = async (id) => {
  const persona = await UsersModel.updateOne(
    { _id: id },
    {
      $set: {
        user_name: "Perengano perencejo",
        cc: "1000000000",
        age: 99,
        gender: "female",
        profession: "scientist",
        email: "prueba@gmail.com",
        password: "super_Clav0",
        rol: "Adminsitrador",
        active: false,
        validation: true,
      },
    }
  );
};

//actualizar('619d8470e8c349d1d7c8a79a')

//Borrar

const eliminar = async (id) => {
  const users = await UsersModel.deleteOne({ _id: id });
  console.log(users);
};

//eliminar('619c0da0c5ed72389a0d2c0a')
