import { Router } from "express";
import Criatura from "../models/criaturas.model.js";

const router = Router();

// Obtener todas las criaturas
router.get("/", async (req, res) => {
    try {
        const criaturas = await Criatura.find();
        res.json(criaturas);
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener criaturas"
        });
    }
});

// Obtener una criatura por nombre
router.get("/:nombre", async (req, res) => {
    try {
        const criatura = await Criatura.findOne({
            nombre: req.params.nombre
        });
        if (!criatura) {
            return res.status(404).json({
                error: "Criatura no encontrada"
            });
        }
        res.json(criatura);
    } catch (error) {
        res.status(500).json({
            error: "Error al buscar criatura"
        });
    }
});

// Añadir criatura
router.post("/", async (req, res) => {
    try {
        const nueva = new Criatura(req.body);
        await nueva.save();
        res.status(201).json({
            msg: "Criatura añadida",
            criatura: nueva
        });
    } catch (error) {
        res.status(500).json({
            error: "Error al crear criatura"
        });
    }
});

// Actualizar criatura
router.put("/:id", async (req, res) => {
    try {
        const actualizada = await Criatura.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(actualizada);
    } catch (error) {
        res.status(500).json({
            error: "Error al actualizar criatura"
        });
    }
});

// Eliminar criatura
router.delete("/:id", async (req, res) => {
    try {
        await Criatura.findByIdAndDelete(req.params.id);
        res.json({
            msg: "Criatura eliminada"
        });
    } catch (error) {
        res.status(500).json({
            error: "Error al eliminar criatura"
        });
    }
});

export default router;