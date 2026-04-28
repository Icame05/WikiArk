import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCriaturaByName } from "../services/criaturasApi";
import "../styles/detalle.css";

function CreatureDetail() {

    const { name } = useParams();

    const [creature, setCreature] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setLoading(true);

        getCriaturaByName(name)
            .then(data => {
                setCreature(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setCreature(null);
                setLoading(false);
            });

    }, [name]);

    if (loading) {
        return (
            <>
                <main>
                    <h2>Cargando criatura...</h2>
                </main>
            </>
        );
    }

    if (!creature) {
        return (
            <>
                <main>
                    <h2>Criatura no encontrada</h2>
                    <Link to="/criaturas">Volver al bestiario</Link>
                </main>
            </>
        );
    }

    return (
        <>
            <main>
                <div className="creature-slide">
                    <div className="creature-detail">

                        {/* IMAGEN */}
                        <div className="creature-image">
                            <img
                                src={`/img/${creature.imagen}`}
                                alt={creature.nombre}
                            />
                        </div>

                        {/* INFO */}
                        <div className="creature-info">

                            <h2>{creature.nombre}</h2>

                            <div>
                                <span className={`type ${creature.tipo}`}>
                                    {creature.tipo}
                                </span>

                                <span className={`category ${creature.rareza}`}>
                                    {creature.rareza}
                                </span>
                            </div>

                            <div className="creature-description">
                                {creature.descripcion}
                            </div>

                            {/* STATS */}
                            <div className="creature-stats">

                                <div className="stat">
                                    <h4>HP</h4>
                                    <p>{creature.hp}</p>
                                </div>

                                <div className="stat">
                                    <h4>Daño</h4>
                                    <p>{creature.dano}</p>
                                </div>

                                <div className="stat">
                                    <h4>Velocidad</h4>
                                    <p>{creature.velocidad}</p>
                                </div>

                                <div className="stat">
                                    <h4>Resistencia</h4>
                                    <p>{creature.resistencia}</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default CreatureDetail;