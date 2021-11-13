import React from "react";
import './style.css';

function Localizacao() {
  return (
    <section>
      <h1 class="titulo" id="local">
        localização
      </h1>
      <h2 class="subtitulo">Venha para Igrejinha participar dessa festa!</h2>
        <div class="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.2758089816125!2d-50.796221449750824!3d-29.566577381970617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951923afe5caddb5%3A0x7b47c05bc52db219!2sParque%20da%20Oktoberfest!5e0!3m2!1spt-BR!2sbr!4v1631051259539!5m2!1spt-BR!2sbr"
            style={{border: 0}}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
    </section>
  );
}
export default Localizacao;
