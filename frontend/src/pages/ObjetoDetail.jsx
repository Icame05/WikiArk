import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getObjetoByName } from "../services/objetosApi";

export default function ObjetoDetail() {
    const { name } = useParams();

    const [objeto, setObjeto] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getObjetoByName(name).then(data => {
            setObjeto(data);
            setLoading(false);
        });
    }, [name]);

    if (loading) return <p>Cargando objeto...</p>;
    if (!objeto) return <p>Objeto no encontrado</p>;

    return (
        <>
            <main>
                <div className="creature-slide">
                    <div className="creature-detail">

                        {/* Imagen */}
                        <div className="creature-image">
                            <img
                                src={`/img/${objeto.imagen}`}
                                alt={objeto.nombre}
                            />
                        </div>

                        {/* Info */}
                        <div className="creature-info">
                            <h2>{objeto.nombre}</h2>

                            <div>
                                <span className={`type ${objeto.tipo}`}>
                                    {objeto.tipo}
                                </span>

                                <span className={`category ${objeto.rareza}`}>
                                    {objeto.rareza}
                                </span>
                            </div>

                            <div className="creature-description">
                                {objeto.descripcion}
                            </div>

                            {/* Stats / propiedades */}
                            <div className="creature-stats">

                                {objeto.peso && (
                                    <div className="stat">
                                        <h4>Peso</h4>
                                        <p>{objeto.peso}</p>
                                    </div>
                                )}

                                {objeto.valor && (
                                    <div className="stat">
                                        <h4>Valor</h4>
                                        <p>{objeto.valor}</p>
                                    </div>
                                )}

                                {objeto.durabilidad && (
                                    <div className="stat">
                                        <h4>Durabilidad</h4>
                                        <p>{objeto.durabilidad}</p>
                                    </div>
                                )}

                                {objeto.crafteo && (
                                    <div className="stat">
                                        <h4>Crafteo</h4>
                                        <p>{objeto.crafteo}</p>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}