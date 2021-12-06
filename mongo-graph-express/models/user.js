// Traemos el objeto mongoose desde la dependencia
const mongoose = require("mongoose")

// Creamos una constante llamada Schema con un objeto de mongoose
const Schema = mongoose.Schema

// Instanciamos el objeto Schema enviando como propiedad la estructura 
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    id_user: {
      type: Number,
      required: true,
    },
    email: {
        type: String,
        required: true,
      },
    password: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
)

// Exportamos el modelo del esquema
module.exports = mongoose.model("User", userSchema)