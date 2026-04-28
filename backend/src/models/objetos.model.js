import mongoose from "mongoose";

const objetoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    tipo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        type: String
    },
    mapa: {
        type: [String],
        default: []
    }
});

export default mongoose.model("Objeto", objetoSchema);