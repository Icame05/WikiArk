import { Router } from "express";
import Objeto from "../models/objetos.model.js";

const router = Router();

// Obtener todos los objetos
router.get("/", async (req, res) => {
    try {
        const objetos = await Objeto.find();
        res.json(objetos);
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener objetos"
        });
    }
});

// Obtener un objeto por nombre
router.get("/:nombre", async (req, res) => {
    try {
        const objeto = await Objeto.findOne({
            nombre: req.params.nombre
        });
        if (!objeto) {
            return res.status(404).json({
                error: "Objeto no encontrado"
            });
        }
        res.json(objeto);
    } catch (error) {
        res.status(500).json({
            error: "Error al buscar objeto"
        });
    }
});

// Añadir objeto
router.post("/", async (req, res) => {
    try {
        const nuevo = new Objeto(req.body);
        await nuevo.save();
        res.status(201).json({
            msg: "Objeto añadido",
            objeto: nuevo
        });
    } catch (error) {
        res.status(500).json({
            error: "Error al crear objeto"
        });
    }
});

// Actualizar objeto por ID
router.put("/:id", async (req, res) => {
    try {
        const actualizado = await Objeto.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(actualizada);
    } catch (error) {
        res.status(500).json({
            error: "Error al actualizar objeto"
        });
    }
});

// Eliminar objeto por ID
router.delete("/:id", async (req, res) => {
    try {
        await Objeto.findByIdAndDelete(req.params.id);
        res.json({
            msg: "Objeto eliminado"
        });
    } catch (error) {
        res.status(500).json({
            error: "Error al eliminar objeto"
        });
    }
});

export default router;