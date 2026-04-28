import mongoose from "mongoose";

const criaturaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    tipo: {
        type: String,
        required: true
    },
    rareza: {
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

export default mongoose.model("Criatura", criaturaSchema);