import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/criaturas.css";

import { getGuias } from "../services/guiasApi";

export default function Guias() {

    const [guias, setGuias] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [categoria, setCategoria] = useState("all");

    useEffect(() => {
        getGuias().then(data => {
            setGuias(data);
            setFiltered(data);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        let result = guias;

        // Busqueda
        if (search) {
            result = result.filter(g =>
                g.nombre.toLowerCase().includes(search.toLowerCase()) ||
                g.descripcion.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Categoria
        if (categoria !== "all") {
            result = result.filter(g =>
                g.categoria?.toLowerCase() === categoria.toLowerCase()
            );
        }

        setFiltered(result);

    }, [search, categoria, guias]);

    return (
        <main>
            <div className="principal">

                <h1>
                    <span className="wiki">Guías de </span>
                    <span className="ark">Ark</span>
                </h1>

                <h3>
                    Aprende estrategias, consejos y mecánicas del juego.
                </h3>

                {/* Buscador */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Busca guías..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button className="search-btn">🔍</button>
                </div>

                {/* Filtro categoría */}
                <div className="filters">
                    <div className="filter-box">
                        <select onChange={e => setCategoria(e.target.value)}>
                            <option value="all">Todas</option>
                            <option value="Domesticación">Domesticación</option>
                            <option value="Construcción">Construcción</option>
                            <option value="Bosses">Bosses</option>
                            <option value="Leveleo">Leveleo</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* GRID */}
            <section className="criaturas">

                {/* CONTADOR */}
                <div className="criature-counter">
                    Mostrando <span className="resaltar">{filtered.length}</span> de{" "} {guias.length} guias
                </div>

                {/* CARTAS */}
                {loading ? (
                    <p>Cargando guías...</p>
                ) : (
                    <div className="creatures-grid">
                        {filtered.map((g) => (
                            <Link
                                key={g._id || g.titulo}
                                to={`/Guias/${g._id}`}
                                className="creature-card"
                            >
                                <div className="creature-image">
                                    <img src={`/img/${g.imagenPortada}`} alt={g.imagenPortada} />
                                </div>
                                <div className="creature-info">
                                    <div className="name-type">
                                        <span className="name">{g.titulo}</span>
                                    </div>
                                    <span className={`category ${g.categoria}`}>{g.categoria}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}