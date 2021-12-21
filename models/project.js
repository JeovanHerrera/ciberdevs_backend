// Traemos el objeto mongoose desde la dependencia
const mongoose = require("mongoose")

// Creamos una constante llamada Schema con un objeto de mongoose
const Schema = mongoose.Schema

// Instanciamos el objeto Schema enviando como propiedad la estructura 
const projectSchema = new Schema(
  {
    id_project: {
      type: Number,
      required: true,
    },

    name_project: {
      type: String,
      required: true,
    },
    gen_target: {
        type: String,
        required: true,
      },
    spe_target: {
        type: String,
        required: true,
    },
    budget_project: {
        type: Number,
        required: true,
    },
    date_startP: {
        type: String,
        required: true,
    },
    date_finishP: {
        type: String,
        required: true,
    },
    id_user: {
        type: Number,
        required: true,
    },
    name_boss: {
        type: String,
        required: true,
    },
    status_project: {
        type: String,
        required: true,
    },
    phase_project: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
)

// Exportamos el modelo del esquema
module.exports = mongoose.model("Project", projectSchema)