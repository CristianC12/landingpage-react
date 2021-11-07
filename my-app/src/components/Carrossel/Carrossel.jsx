import React from "react";
import './style.css';
import imagem01 from './img/imagem01.png';
import imagem01resp from './img/imagem01_responsiva.png';
import imagem02 from './img/imagem02_responsiva.png';
import imagem02resp from './img/imagem02_responsiva.png';
import imagem03 from './img/imagem03_responsiva.png';
import imagem03resp from './img/imagem03_responsiva.png';

    
function Carrossel() {
  return (
    <section>
      <h1 className="titulo" id="galeria">
        A maior festa popular do Brasil!
      </h1>
      <h2 className="subtitulo">
        Desde 1988, espalhar a alegria é a nossa tradição!
      </h2>
      <div className="carrossel">
        <div className="container_Carrossel" id="img">
          <picture>
            <source
              media="(max-width: 999px)"
              srcset='img/imagem02.png'
            />
            <img
              src='img/imagem02.png'
              alt="canecas de chopp brindando"
            />
          </picture>
          <picture>
            <source
              media="(max-width: 999px)"
              srcset='img/imagem02.png'
            />
            <img
              src='img/imagem02.png'
              alt="comidas tradicionais alemãs"
            />
          </picture>
          <picture>
            <source
              media="(max-width: 999px)"
              srcset='img/imagem02.png'
            />
            <img
              src='img/imagem02.png'
              alt="dança tradicional alemã"
            />
          </picture>
        </div>
      </div>
          <script src="carousel.js"></script>
    
    </section>
  );
}

export default Carrossel;
