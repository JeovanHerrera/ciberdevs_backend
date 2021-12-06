// Traemos el objeto mongoose desde la dependencia
const mongoose = require("mongoose")

// Creamos una constante llamada Schema con un objeto de mongoose
const Schema = mongoose.Schema

// Instanciamos el objeto Schema enviando como propiedad la estructura 
const developSchema = new Schema(
  {
    id_develop: {
      type: Number,
      required: true,
    },
    id_project: {
        type: Number,
        required: true,
      },
    date_develop: {
        type: String,
        required: true,
    },
    description_develop: {
        type: String,
        required: true,
    },
    comment_boss: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
)

// Exportamos el modelo del esquema
module.exports = mongoose.model("Develop", developSchema)