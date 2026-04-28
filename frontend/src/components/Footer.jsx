import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-columns">

                <div className="footer-column">
                    <div className="footer-logo">
                        <img src="/img/Logo.png" alt="Logo de WikiArk" />
                        <h3>
                            <span className="wiki">Wiki</span>
                            <span className="ark">Ark</span>
                        </h3>
                    </div>
                    <p>Tu enciclopedia definitiva para Ark: Survival Evolved, potenciada con IA.</p>
                </div>

                <div className="footer-column">
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/Criaturas">Criaturas</Link></li>
                        <li><Link to="/Objetos">Objetos</Link></li>
                        <li><Link to="/Guias">Guías</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Comunidad</h3>
                    <ul>
                        <li><a href="https://discord.gg/stwyB8hEZ9">Contribuir</a></li>
                        <li><a href="https://discord.gg/stwyB8hEZ9">Foro</a></li>
                        <li><a href="https://discord.gg/stwyB8hEZ9">Discord</a></li>
                        <li><a href="https://discord.gg/stwyB8hEZ9">Reportar Error</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Privacidad</a></li>
                        <li><a href="#">Términos</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=wikiark.contacto@gmail.com" target="_blank">Contacto</a></li>
                    </ul>
                </div>

            </div>

            <hr className="footer-separator" />

            <div className="footer-bottom">
                <p className="credits">
                    Hecho con <span className="heart">♥</span> por la comunidad de Ark
                </p>

                <div className="social-icons">
                    <a href="#"><img src="/img/github.png" alt="GitHub" /></a>
                    <a href="#"><img src="/img/twitter.png" alt="Twitter" /></a>
                    <a href="#"><img src="/img/youtube.png" alt="YouTube" /></a>
                </div>
            </div>

            <p className="footer-note">
                WikiArk no está afiliado con Studio Wildcard. Ark: Survival Evolved es marca registrada de Studio Wildcard.
            </p>
        </footer>
    );
}

export default Footer;