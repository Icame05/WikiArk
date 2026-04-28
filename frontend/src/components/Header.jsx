import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <div id="logo">
                    <img src="/img/Logo.png" alt="Logo de la Web" />
                    <h1>
                        <span className="wiki">Wiki</span>
                        <span className="ark">Ark</span>
                    </h1>
                </div>

                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Criaturas">Criaturas</Link></li>
                    <li><Link to="/Objetos">Objetos</Link></li>
                    <li><Link to="/Guias">Guías</Link></li>
                    <li><Link to="https://discord.gg/stwyB8hEZ9">Comunidad</Link></li>
                </ul>

                <div id="botonBusqueda">🔍</div>
            </nav>
        </header>
    );
}

export default Header;