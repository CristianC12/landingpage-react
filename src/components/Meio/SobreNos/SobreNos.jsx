import React from "react";
import "./style.css";

function SobreNos() {
  return (
    <section className="sobreFundo">
      <h1 class="titulo sobreTitulo" id="sobre">
        Sobre nós:
      </h1>
      <div class="sobre">
        <ul>
          <p id="intro">
            A Oktoberfest de Igrejinha é um festival das tradições germânicas
            celebrada originalmente em Munique, no estado da Baviera, no sul da
            Alemanha, e disseminada por vários lugares do mundo.
          </p>
          <li>
            <p>Ótima infraestrutura;</p>
          </li>
          <li>
            <p>Comida e bebida tradicional;</p>
          </li>
          <li>
            <p>Boa programação de eventos;</p>
          </li>
          <li>
            <p>Boa localização;</p>
          </li>
        </ul>
        <img
          src="https://i.imgur.com/XzysiaX.png"
          alt="Logotipo"
        />
      </div>
    </section>
  );
}

export default SobreNos;
