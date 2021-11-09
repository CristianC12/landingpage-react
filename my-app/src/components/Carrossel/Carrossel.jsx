import React from "react";
import './style.css';
import fotosCarrossel from "./carrosselFoto";



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
              srcset={fotosCarrossel[1]}
            />
            <img
              src={fotosCarrossel[0]}
              alt="canecas de chopp brindando"
            />
          </picture>
          <picture>
            <source
              media="(max-width: 999px)"
              srcset={fotosCarrossel[3]}
            />
            <img
              src={fotosCarrossel[2]}
              alt="comidas tradicionais alemãs"
            />
          </picture>
          <picture>
            <source
              media="(max-width: 999px)"
              srcset={fotosCarrossel[5]}
            />
            <img
              src={fotosCarrossel[4]}
              alt="dança tradicional alemã"
            />
          </picture>
        </div>
      </div>
    
    </section>

    


  );
}

export default Carrossel;
