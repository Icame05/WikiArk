import mongoose from "mongoose";

const guiaSchema = new mongoose.Schema({
    titulo: { 
        type: String,
        required: true,
        unique: true
    },
    categoria: { 
        type: String,
        enum: ['Leveleo', 'Domesticación', 'Bosses', 'Construcción'],
        required: true
    },
    descripcionCorta: { 
        type: String
    },
    contenido: {
        type: String, 
        required: true 
    },
    autor: {
        type: String, 
        default: "Admin" 
    },
    imagenPortada: {
        type: String
    }
}, { timestamps: true });

export default mongoose.model("Guia", guiaSchema);