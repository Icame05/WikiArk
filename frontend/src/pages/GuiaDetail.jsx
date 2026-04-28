import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGuiaById } from "../services/guiasApi.js";

export default function GuiaDetail() {
    const { _id } = useParams();

    const [guia, setGuia] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!_id) return;

        getGuiaById(_id).then(data => {
            setGuia(data);
            setLoading(false);
        });
    }, [_id]);

    if (loading) return <p>Cargando guía...</p>;
    if (!guia) return <p>Guía no encontrada</p>;

    return (
        <>
            <main>
                <div className="creature-slide">
                    <div id="guia-detail" className="creature-detail">
                        {/* Imagen */}
                        <div className="creature-image">
                            <img
                                src={`/img/${guia.imagenPortada}`}
                                alt={guia.titulo}
                            />
                        </div>
                        {/* Info */}
                        <div className="creature-info">
                            <h2>{guia.titulo}</h2>
                            <div>
                                <span className={`type ${guia.categoria.toLowerCase()}`}>
                                    {guia.categoria}
                                </span>
                            </div>
                            <div className="creature-description">
                                {guia.descripcionCorta}
                            </div>
                            {/* Contenido principal */}
                            <div className="guide-content">
                                <p style={{ whiteSpace: "pre-line" }}>
                                    {guia.contenido}
                                </p>
                            </div>
                            {/* Info extra */}
                            <div className="creature-stats">
                                {guia.autor && (
                                    <div>
                                        <p id="espaciado">
                                            <span>Autor</span>
                                            <span>{guia.autor}</span>
                                        </p>
                                    </div>
                                )}
                                {guia.createdAt && (
                                    <div>
                                        <p id="espaciado">
                                            <span>Creado</span>
                                            <span>{new Date(guia.createdAt).toLocaleDateString()}</span>
                                        </p>
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