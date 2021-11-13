import React from "react";
import "./style.css";


 let fotosArtistas = [
   "https://i.imgur.com/xV3sXjj.png",
   "https://i.imgur.com/nVljN1Q.png",
   "https://i.imgur.com/CzNp87S.png",
   "https://i.imgur.com/5Jb3T2m.png"
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
