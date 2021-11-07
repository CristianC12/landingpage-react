import React from 'react';
import './style.css';

function ArtistasConfirmados() {
  return (
    <>
              <h1 class="titulo" id="artistas">Artistas Confirmados!</h1>
      <div class="imagens">
        <a href="https://www.instagram.com/gildovigor/" target="_blank">
          <img
            src="assets/img/gil_vigor.png"
            alt="Gil do Vigor"
            width="95%"
            id="gil-vigor"
          />
        </a>
        <a href="https://www.instagram.com/pefabiodemelo/" target="_blank">
          <img
            src="assets/img/fabio_mello.png"
            alt="Pe Fábio de Mello"
            width="95%"
            id="fabio-melo"
          />
        </a>
        <a href="https://www.instagram.com/therock/?hl=pt-br" target="_blank">
          <img
            src="assets/img/dwayne_rock.png"
            alt="Dwayne The Rock Johnson"
            width="95%"
            id="the-rock"
          />
        </a>
        <a href="https://www.instagram.com/ivetesangalo/" target="_blank">
          <img
            src="assets/img/ivete.png"
            alt="Ivete Sangalo"
            width="95%"
            id="ivete-sangalo"
          />
        </a>
      </div>
    </>
  );
}

export default ArtistasConfirmados;