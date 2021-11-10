import React from "react";
import "./style.css";

let logoMenu = ["https://i.imgur.com/PDsywmP.png"]

function Navigation() {
  return (
    <section>
        <nav>
            <a href="#" className="logoMenu"><img src={logoMenu[0]} width="120px"/></a>
            <div className="mobile-menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className="nav-list">
                <li><a href="#artistas">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#galeria">Galeria</a></li>
                <li><a href="#local">Local</a></li>
                <li><a href="#contato">Contato</a></li>
                <li><a href="#equipe">Equipe</a></li>
            </ul>
        </nav>
    <script src="./navbar.js"></script>
    </section>
  );
}

export default Navigation;
