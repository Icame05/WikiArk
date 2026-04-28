import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/criaturas.css";

import { getObjetos } from "../services/objetosApi";

export default function Objetos() {
    const [objetos, setObjetos] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [tipo, setTipo] = useState("all");
    const [mapa, setMapa] = useState("all");

    useEffect(() => {
        getObjetos().then(data => {
            setObjetos(data);
            setFiltered(data);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        let result = objetos;

        if (search) {
            result = result.filter(o =>
                o.nombre.toLowerCase().includes(search.toLowerCase()) ||
                o.descripcion.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (tipo !== "all") {
            result = result.filter(o => o.tipo === tipo);
        }

        if (mapa !== "all") {
            result = result.filter(o => o.mapa.includes(mapa));
        }

        setFiltered(result);

    }, [search, tipo, mapa, objetos]);

    return (
        <>
            <main>
                <div className="principal">
                    <h1>
                        <span className="wiki">Objetos de </span>
                        <span className="ark">Ark</span>
                    </h1>

                    <h3>
                        Explora todos los objetos del juego, sus usos y cómo obtenerlos.
                    </h3>

                    {/* SEARCH */}
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Busca objetos o descripción..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <button className="search-btn">🔍</button>
                    </div>

                    {/* FILTROS */}
                    <div className="filters">
                        <div className="filter-box">
                            <select onChange={e => setTipo(e.target.value)}>
                                <option value="all">Todos los tipos</option>
                                <option value="Material">Material</option>
                                <option value="Herramienta">Herramientas</option>
                                <option value="Arma">Armas</option>
                                <option value="Armadura">Armaduras</option>
                                <option value="Consumible">Consumibles</option>
                            </select>
                        </div>
                        <div className="filter-box">
                            <select onChange={(e) => setMapa(e.target.value)}>
                                <option value="all">Todos los mapas</option>
                                <option value="the_island">The Island</option>
                                <option value="the_center">The Center</option>
                                <option value="scorched_earth">Scorched Earth</option>
                                <option value="ragnarok">Ragnarok</option>
                                <option value="aberration">Aberration</option>
                                <option value="extinction">Extinction</option>
                                <option value="valguero">Valguero</option>
                                <option value="genesis_1">Genesis Part 1</option>
                                <option value="crystal_isles">Crystal Isles</option>
                                <option value="genesis_2">Genesis Part 2</option>
                                <option value="lost_island">Lost Island</option>
                                <option value="fjordur">Fjordur</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* GRID */}
                <section className="criaturas">

                    {/* CONTADOR */}
                    <div className="criature-counter">
                        Mostrando <span className="resaltar">{filtered.length}</span> de{" "}
                        {objetos.length} objetos
                    </div>

                    {/* CARTAS */}
                    {loading ? (
                        <p>Cargando objetos...</p>
                    ) : (
                        <div className="creatures-grid">
                            {filtered.map((o) => (
                                <Link
                                    key={o._id || o.nombre}
                                    to={`/Objetos/${o.nombre}`}
                                    className="creature-card"
                                >
                                    <div className="creature-image">
                                        <img src={`/img/${o.imagen}`} alt={o.nombre} />
                                    </div>
                                    <div className="creature-info">
                                        <div className="name-type">
                                            <span className="name">{o.nombre}</span>
                                            <span className={`type ${o.tipo}`}>{o.tipo}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}