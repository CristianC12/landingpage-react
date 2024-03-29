import React from 'react';
import "./style.css"

let membroFoto = [
    "https://i.imgur.com/k90PtL5.png",  //gab
    "https://i.imgur.com/fKZy3ay.png", //cris
    "https://i.imgur.com/RoNcZnR.png", //andrei
    "https://i.imgur.com/nEmdYia.png" //leo
]

function Equipe() {
    return( 
      <>
        <section className="time" id="equipe">
        
        <h1 className="titulo" id="titulo-nome">Equipe</h1>
        <h2 id="sub-nome">Squad 8 - #TeuFuturo</h2>
        
        <a href="https://www.linkedin.com/in/gabriel-de-moura-jank-209b18218/" target="_blank">
          <img src={membroFoto[0]} className="membro" alt="foto de Gabriel Jank"/>
        </a>
        <a href="https://www.linkedin.com/in/cristian-martini-78bb92210/" target="_blank">
          <img src={membroFoto[1]} className="membro" alt="foto de Cristian Martini"/>
        </a>
        <div className="time-nome">
          <a href="https://github.com/GabJank" target="_blank">
            <h2 className="membro-nome" >Gabriel Jank</h2>
          </a>
          <a href="https://github.com/CristianC12" target="_blank">
            <h2 className="membro-nome" >Cristian Martini</h2>
          </a>
          </div>
        <a href="https://www.linkedin.com/in/andrei-bacin-70762b220/" target="_blank">
          <img src={membroFoto[2]} className="membro" alt="foto de Andrei Bacin"/>
        </a>
        <a href="https://www.linkedin.com/in/leonardo-de-oliveira-telles-921393214/" target="_blank">
          <img src={membroFoto[3]} className="membro" alt="foto de Leonardo teles"/>
        </a>
        <div className="time-nome">

        <a href="https://github.com/dreyb" target="_blank">
          <h2 className="membro-nome">Andrei Bacin</h2>
        </a>
        <a href="https://github.com/LeonardoTelles1204" target="_blank">
          <h2 className="membro-nome">Leonardo Telles</h2>
        </a>
        </div>
      </section>
            <div className="video2">
              <h1 className="titulo tituloVideo">Explicação</h1>
              <p>Como montamos a LP?</p>
              <iframe height="315" src="https://www.youtube.com/embed/_SjFh-lr268" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div> 
        </>
    );
}

export default Equipe;