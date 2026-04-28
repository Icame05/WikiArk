import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCriaturas } from "../services/criaturasApi";
import "../styles/home.css";

function Home() {
    const [criaturas, setCriaturas] = useState([]);
    const [destacadas, setDestacadas] = useState([]);

    useEffect(() => {
        const fetchCreatures = async () => {
            const data = await getCriaturas();
            setCriaturas(data);

            // Seleccionar 4 criaturas específicas
            const especificas = ["Shadowmane", "Bloodstalker", "Desmodus", "Ferox"];
            const filtered = data.filter(creature => especificas.includes(creature.nombre));
            setDestacadas(filtered);
        };

        fetchCreatures();
    }, []);

    return (
        <>
            <main>
                <div className="principal">
                    <h1>
                        <span className="wiki">Wiki</span>
                        <span className="ark">Ark</span>
                    </h1>

                    <h3>Tu enciclopedia interactiva para dominar Ark: Survival Evolved</h3>

                    <div className="search-container">
                        <input type="text" placeholder="Busca criaturas, objetos, guías..." />
                        <button className="search-btn">🔍</button>
                    </div>

                    <div className="tags">
                        <span id="label">Popular:</span>
                        <span className="tag">T-Rex</span>
                        <span className="tag">The Island</span>
                        <span className="tag">Crafteos</span>
                        <span className="tag">Narcóticos</span>
                    </div>
                </div>

                <section className="explora">
                    <h1>Explora el contenido</h1>
                    <h3>Accede a una base de datos completa con toda la información que necesitas.</h3>

                    <div className="cards">

                        <div className="card">
                            <div className="card-header">
                                <img src="/img/criaturas.jpg" alt="Criaturas" />
                                <span className="card-number">+400</span>
                            </div>
                            <h4>Criaturas</h4>
                            <p>Descubre todas las criaturas que puedes encontrar en Ark: Survival Evolved.</p>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <img src="/img/objetos.png" alt="Objetos" />
                                <span className="card-number">+400</span>
                            </div>
                            <h4>Objetos</h4>
                            <p>Consulta todos los objetos disponibles en el juego con sus detalles y usos.</p>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <img src="/img/guias.png" alt="Guías" />
                                <span className="card-number">+100</span>
                            </div>
                            <h4>Guías</h4>
                            <p>Encuentra guías paso a paso para sobrevivir y dominar Ark: Survival Evolved.</p>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <img src="/img/comunidad.png" alt="Comunidad" />
                                <span className="card-number">+100</span>
                            </div>
                            <h4>Comunidad</h4>
                            <p>Participa y conecta con la comunidad de jugadores, comparte experiencias y tips.</p>
                        </div>

                    </div>
                </section>

                <section className="destacadas">
                    <h1>Criaturas Destacadas</h1>
                    <h3>Descubre las criaturas más populares y aprende todo sobre ellas.</h3>

                    <div className="creatures">

                        {destacadas.map((creature, i) => (
                            <div className="creature-card" key={i}>
                                <div className="creature-image">
                                    <img src={`/img/${creature.imagen}`} alt={creature.nombre} />
                                </div>
                                <div className="creature-info">
                                    <div className="name-type">
                                        <span className="name">{creature.nombre}</span>
                                        <span className={`type ${creature.tipo}`}>{creature.tipo}</span>
                                    </div>
                                    <span className={`category ${creature.rareza}`}>{creature.rareza}</span>
                                </div>
                            </div>
                        ))}

                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;