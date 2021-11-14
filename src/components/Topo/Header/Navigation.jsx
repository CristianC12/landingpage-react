import React from "react";
import "./style.css";
import "./navbar.js";

function Navigation() {
  return (
    <section>
        <nav>
            <a href="#" className="logoMenu" ><img src="https://i.imgur.com/XkcZ0LJ.png" width="240px"/></a>
            <div className="mobile-menu2">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className="nav-list">
                <li><a id="item-nav" href="#artistas">Home</a></li>
                <li><a id="item-nav" href="#sobre">Sobre</a></li>
                <li><a id="item-nav" href="#galeria">Galeria</a></li>
                <li><a id="item-nav" href="#local">Local</a></li>
                <li><a id="item-nav" href="#contato">Contato</a></li>
                <li><a id="item-nav" href="#equipe">Equipe</a></li>
            </ul>
        </nav>
    </section>
  );
}

export default Navigation;
