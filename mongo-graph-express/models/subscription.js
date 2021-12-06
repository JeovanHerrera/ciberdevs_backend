// Traemos el objeto mongoose desde la dependencia
const mongoose = require("mongoose")

// Creamos una constante llamada Schema con un objeto de mongoose
const Schema = mongoose.Schema

// Instanciamos el objeto Schema enviando como propiedad la estructura 
const subscriptionSchema = new Schema(
  {
    id_subscription: {
      type: Number,
      required: true,
    },

    id_project: {
      type: Number,
      required: true,
    },
    id_user: {
        type: Number,
        required: true,
      },
    status_subscription: {
        type: String,
        required: true,
    },
    date_in_subs: {
        type: String,
        required: true,
    },
    date_out_subs: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
)

// Exportamos el modelo del esquema
module.exports = mongoose.model("Subscription", subscriptionSchema)