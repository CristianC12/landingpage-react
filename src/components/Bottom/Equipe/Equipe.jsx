import React from 'react';
import "./style.css"

let membroFoto = [
    "https://i.imgur.com/k90PtL5.png",  //gab
    "https://i.imgur.com/fKZy3ay.png", //cris
    "https://i.imgur.com/RoNcZnR.png", //andrei
    "https://i.imgur.com/DW1veZg.png" //leo
]

function Equipe() {
    return(
        <section className="time" id="equipe">
        
        <h1 className="titulo" id="titulo-nome">Equipe</h1>
        <h2 id="sub-nome">squad 8 - #TEUFUTURO</h2>
        
        <a href="https://www.linkedin.com/in/gabriel-de-moura-jank-209b18218/" target="_blank">
          <img src={membroFoto[0]} className="membro" alt="foto de Gabriel Jank"/>
        </a>
        <a href="https://www.linkedin.com/in/cristian-martini-78bb92210/" target="_blank">
          <img src={membroFoto[1]} className="membro" alt="foto de Cristian Martini"/>
        </a>
        <a href="https://www.linkedin.com/in/andrei-bacin-70762b220/" target="_blank">
          <img src={membroFoto[2]} className="membro" alt="foto de Andrei Bacin"/>
        </a>
        <a href="https://www.linkedin.com/in/leonardo-de-oliveira-telles-921393214/" target="_blank">
          <img src={membroFoto[3]} className="membro" alt="foto de Leonardo teles"/>
        </a>

        { /* nomes*/ }

        <div className="time-nome">
          <a href="https://github.com/GabJank" target="_blank">
            <h2 className="membro-nome" id="Gab-tag">Gabriel Jank</h2>
          </a>
          <a href="https://github.com/CristianC12" target="_blank">
            <h2 className="membro-nome" id='Cris-tag'>Cristian Martini</h2>
          </a>
          <a href="https://github.com/dreyb" target="_blank">
            <h2 className="membro-nome">Andrei Bacin</h2>
          </a>
          <a href="https://github.com/LeonardoTelles1204" target="_blank">
            <h2 className="membro-nome">Leonardo Telles</h2>
          </a>
        </div>

        <h1 className="titulo" id="titulo-video">Explicação</h1>
        <h2 className="subtitulo">Como montamos a LandingPage?</h2>
        <div className="video">
          <iframe height="315" src="https://www.youtube.com/embed/93d7H5XlwsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>
    );
}

export default Equipe;