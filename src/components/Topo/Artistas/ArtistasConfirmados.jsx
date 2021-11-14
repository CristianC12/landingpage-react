import React from "react";
import "./style.css";


 let fotosArtistas = [
   "https://i.imgur.com/Bz10xJH.png", //gil do vigor
   "https://i.imgur.com/AMyTFcB.png", //Pe fabio de melo
   "https://i.imgur.com/sjpVpC9.png", //The rock
   "https://i.imgur.com/MWod138.png"  //Ivete sangalo
 ];

function ArtistasConfirmados() {
  return (
    <section>
      <h1 className="titulo" id="artistas">
        Artistas Confirmados!
      </h1>
      <div className="ArtistasConfirmados_imagens">
        <a href="https://www.instagram.com/gildovigor/" target="_blank">
          <img
            src={fotosArtistas[0]}
            alt="Gil do Vigor"
            width="95%"
            id="gil-vigor"
          />
        </a>
        <a href="https://www.instagram.com/pefabiodemelo/" target="_blank">
          <img
            src={fotosArtistas[1]}
            alt="Padre Fábio de Mello"
            width="95%"
            id="fabio-melo"
          />
        </a>
        <a href="https://www.instagram.com/therock/?hl=pt-br" target="_blank">
          <img
            src={fotosArtistas[2]}
            alt="Dwayne The Rock Johnson"
            width="95%"
            id="the-rock"
          />
        </a>
        <a href="https://www.instagram.com/ivetesangalo/" target="_blank">
          <img
            src={fotosArtistas[3]}
            alt="Ivete Sangalo"
            width="95%"
            id="ivete-sangalo"
          />
        </a>
      </div>
    </section>
  );
}

export default ArtistasConfirmados;
