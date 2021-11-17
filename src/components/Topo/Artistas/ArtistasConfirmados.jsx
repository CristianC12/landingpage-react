import React from "react";
import "./style.css";


 let fotosArtistas = [
   "https://i.imgur.com/JucE9TI.png", //feer posser
   "https://i.imgur.com/yziSSF6.png", //Pe fabio de melo
   "https://i.imgur.com/uOXNHEo.png", //The rock
   "https://i.imgur.com/u5mbWFN.png"  //Dianho
 ];

function ArtistasConfirmados() {
  return (
    <section className="artistas">
      <h1 className="titulo tituloArtistas">
        Artistas Confirmados!
      </h1>
      <div className="ArtistasConfirmados_imagens">
        <a href="https://www.instagram.com/feerposser/" target="_blank">
          <img
            src={fotosArtistas[0]}
            alt="fernando posser"
            width="95%"
            id="fernando-posser"
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
        <a href="https://www.instagram.com/dianhooficial/" target="_blank">
          <img
            src={fotosArtistas[3]}
            alt="Dianho"
            width="95%"
            id="Dianho"
          />
        </a>
      </div>
    </section>
  );
}

export default ArtistasConfirmados;
