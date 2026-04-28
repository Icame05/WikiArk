import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/criaturas.css";

import { getCriaturas } from "../services/criaturasApi";

export default function Criaturas() {
    const [criaturas, setCriaturas] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [tipo, setTipo] = useState("all");
    const [rareza, setRareza] = useState("all");
    const [mapa, setMapa] = useState("all");

    // 📡 carga API
    useEffect(() => {
        getCriaturas().then(data => {
            setCriaturas(data);
            setFiltered(data);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        let result = criaturas;

        if (search) {
            result = result.filter(c =>
                c.nombre.toLowerCase().includes(search.toLowerCase()) ||
                c.descripcion.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (tipo !== "all") {
            result = result.filter(c => c.tipo === tipo);
        }

        if (rareza !== "all") {
            result = result.filter(c => c.rareza === rareza);
        }

        if (mapa !== "all") {
            result = result.filter(c => c.mapa.includes(mapa));
        }

        setFiltered(result);

    }, [search, tipo, rareza, mapa, criaturas]);

    return (
        <>
            <main>
                <div className="principal">
                    <h1>
                        <span className="wiki">Bestiario de </span>
                        <span className="ark">Ark</span>
                    </h1>

                    <h3>
                        Explora todas las criaturas del juego. Estadísticas, ubicaciones y estrategias de domesticación.
                    </h3>

                    {/* SEARCH */}
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Busca por nombre o descripción..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="search-btn">🔍</button>
                    </div>

                    {/* FILTROS */}
                    <div className="filters">
                        <div className="filter-box">
                            <select onChange={(e) => setTipo(e.target.value)}>
                                <option value="all">Todos los tipos</option>
                                <option value="Carnivoro">Carnívoro</option>
                                <option value="Herbivoro">Herbívoro</option>
                                <option value="Piscivoro">Piscívoro</option>
                                <option value="Omnivoro">Omnívoro</option>
                            </select>
                        </div>
                        <div className="filter-box">
                            <select onChange={(e) => setRareza(e.target.value)}>
                                <option value="all">Todas las rarezas</option>
                                <option value="Comun">Común</option>
                                <option value="Raro">Raro</option>
                                <option value="Epico">Épico</option>
                                <option value="Legendario">Legendario</option>
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
                        Mostrando <span className="resaltar">{filtered.length}</span> de{" "} {criaturas.length} criaturas
                    </div>

                    {/* CARTAS */}
                    {loading ? (
                        <p>Cargando criaturas...</p>
                    ) : (
                        <div className="creatures-grid">
                            {filtered.map((c) => (
                                <Link
                                    key={c._id || c.nombre}
                                    to={`/Criaturas/${c.nombre}`}
                                    className="creature-card"
                                >
                                    <div className="creature-image">
                                        <img src={`/img/${c.imagen}`} alt={c.nombre} />
                                    </div>
                                    <div className="creature-info">
                                        <div className="name-type">
                                            <span className="name">{c.nombre}</span>
                                            <span className={`type ${c.tipo}`}>{c.tipo}</span>
                                        </div>
                                        <span className={`category ${c.rareza}`}>{c.rareza}</span>
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