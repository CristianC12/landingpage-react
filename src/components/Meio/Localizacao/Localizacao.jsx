import React from "react";
import "./style.css";

function Localizacao() {
  return (
    <section className="localizacao">
      <a id="local" />
      <img className="localImg" />
      <h1 class="titulo tituloLocal">
        Localização
      </h1>
      <h2 class="subtituloLocal">
        Venha para Igrejinha
        <br /> participar dessa festa conosco!
      </h2>
      <div class="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.2758089816125!2d-50.796221449750824!3d-29.566577381970617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951923afe5caddb5%3A0x7b47c05bc52db219!2sParque%20da%20Oktoberfest!5e0!3m2!1spt-BR!2sbr!4v1631051259539!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <a href="#contato">
        <button>Fale conosco</button>
      </a>
      <p>Arlindo Geis, 255 - Centro, Igrejinha - RS, CEP 95650-000, Brasil.</p>
    </section>
  );
}
export default Localizacao;
