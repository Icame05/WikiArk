import Guia from "../models/guias.model.js";

// Obtener todas las guías
export const getGuias = async (req, res) => {
    const guias = await Guia.find();
    res.json(guias);
};

// Obtener una guía por su id
export const getGuiaById = async (req, res) => {
    try {
        const guia = await Guia.findById(req.params._id);

        if (!guia) {
            return res.status(404).json({
                error: "Guía no encontrada"
            });
        }

        res.json(guia);
    } catch (error) {
        res.status(500).json({
            error: "Error al buscar guía"
        });
    }
};