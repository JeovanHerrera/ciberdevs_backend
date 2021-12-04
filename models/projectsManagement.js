const mongoose = require("mongoose");

const projectModel = mongoose.Schema({
  Nombre: { type: String, required: true },
  Objetivos_Generales: { type: String, required: true },
  Objetivos_Especificos: { type: String, required: true },
  Presupuesto: { type: Number },
  Inicio: { type: Date },
  Terminacion: { type: Date },

  Lider: {
    cedula: { type: Number },
    nombre: { type: String },
  },
  Estado: { type: Boolean },
  Fase: { type: String },
});

module.exports = mongoose.model("Projects", projectModel);
