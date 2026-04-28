import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Criaturas from "./pages/Criaturas";
import CreatureDetail from "./pages/CreatureDetail";
import Objetos from "./pages/Objetos";
import ObjetoDetail from "./pages/ObjetoDetail";
import Guias from "./pages/Guias";
import GuiaDetail from "./pages/GuiaDetail";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Routes>
                {/* Redirección inicial */}
                <Route path="/" element={<Navigate to="/Inicio" />} />

                {/* Páginas */}
                <Route path="/Inicio" element={<Home />} />
                <Route path="/Criaturas" element={<Criaturas />} />
                <Route path="/Criaturas/:name" element={<CreatureDetail />} />
                <Route path="/Objetos" element={<Objetos />} />
                <Route path="/Objetos/:name" element={<ObjetoDetail />} />
                <Route path="/Guias" element={<Guias />} />
                <Route path="/Guias/:_id" element={<GuiaDetail />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;