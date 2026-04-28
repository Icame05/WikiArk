import Criatura from "../models/criaturas.model.js";

// Obtener todas las criaturas
export const getCriaturas = async (req, res) => {
    const criaturas = await Criatura.find();
    res.json(criaturas);
};

//Obtener una criatura por su nombre
export const getCriatura = async (req, res) => {
    const criatura = await Criatura.findOne({
        nombre: req.params.nombre
    });
    res.json(criatura);
};