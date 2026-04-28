import mongoose from "mongoose";
// Importamos los datos de los nuevos archivos
import { criaturas } from "./criaturas.js";
import { objetos } from "./objetos.js";
import { guias } from "./guias.js";

// Importamos ambos modelos
import Criatura from "../models/criaturas.model.js";
import Objeto from "../models/objetos.model.js"; 
import Guia from "../models/guias.model.js";

const MONGO_URL = "mongodb://mongo:27017/wikiark";

const seedDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("🌱 Conectado a MongoDB para el proceso de seed...");

        // --- SECCIÓN DE CRIATURAS ---
        await Criatura.deleteMany();
        console.log("🗑️  Colección de Criaturas limpiada");
        await Criatura.insertMany(criaturas);
        console.log(`✅ ${criaturas.length} Criaturas insertadas`);

        // --- SECCIÓN DE OBJETOS ---
        await Objeto.deleteMany();
        console.log("🗑️  Colección de Objetos limpiada");
        await Objeto.insertMany(objetos);
        console.log(`✅ ${objetos.length} Objetos insertados`);

        // --- SECCIÓN DE GUIAS ---
        await Guia.deleteMany();
        console.log("🗑️  Colección de Guías limpiada");
        await Guia.insertMany(guias);
        console.log(`✅ ${guias.length} Guías insertadas`);

        console.log("🚀 Proceso de seed finalizado con éxito");
        await mongoose.disconnect();
        console.log("🔌 Desconectado de MongoDB");
        process.exit(0);
    } catch (error) {
        console.error("❌ Error durante el seed:", error);
        console.error("Error durante el seed:", error.message);
        await mongoose.disconnect();
        process.exit(1);
    }
};

seedDB();