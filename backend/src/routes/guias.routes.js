import { Router } from "express";
import Guia from "../models/guias.model.js";

const router = Router();

// Obtener todas las guias
router.get("/", async (req, res) => {
    try {
        const guias = await Guia.find();
        res.json(guias);
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener guias"
        });
    }
});

// Obtener una guía por su id
router.get("/:_id", async (req, res) => {
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
});

// Añadir guia
router.post("/", async (req, res) => {
    try {
        const nueva = new Guia(req.body);
        await nueva.save();
        res.status(201).json({
            msg: "Guía añadida",
            guia: nueva
        });
    } catch (error) {
        res.status(500).json({
            error: "Error al crear guía"
        });
    }
});

// Actualizar guia
router.put("/:_id", async (req, res) => {
    try {
        const actualizada = await Guia.findOneAndUpdate(
            { _id: req.params._id },
            req.body,
            { new: true }
        );
        res.json(actualizada);
    } catch (error) {
        res.status(500).json({
            error: "Error al actualizar guía"
        });
    }
});

// Eliminar guia
router.delete("/:_id", async (req, res) => {
    try {
        await Guia.findOneAndDelete({ _id: req.params._id });
        res.json({
            msg: "Guía eliminada"
        });
    } catch (error) {
        res.status(500).json({
            error: "Error al eliminar guía"
        });
    }
});

export default router;