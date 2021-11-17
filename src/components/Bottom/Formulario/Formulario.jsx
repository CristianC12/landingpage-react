import React from "react";
import "./style.css";


function Formulario() {

  return (
    <>
      <section id="formSection">
      <a id="contato"/>
        <h1 className="titulo tituloContato">
          Contato 
        </h1>
        <div className="formulario">
          <form action="https://api.staticforms.xyz/submit" method="POST" className="venda">
          <div className="formDiv">
            <input type="hidden" name="accessKey" value="40ee2968-e7ee-4e82-902f-ca715bbcdc90"/>
            <input type="hidden" name="redirectTo" value="https://cristianc12.github.io/landingpage-react/"/>
            <label2 className="labelFormulario" for="nomesobrenome">
              Nome e sobrenome
              <input
                name="name"
                type="text"
                id="nomesobrenome"
                className="input-padrao"
                required
              />
            </label2>

            <label2 className="labelFormulario" for="email">
              Email
              <input
                name="email"
                type="email"
                id="email"
                className="input-padrao"
                required
                placeholder="seuemail@dominio.com"
              />
            </label2>

            <label2 className="labelFormulario" for="telefone">
              Telefone
              <input
                name="phone"
                type="tel"
                id="telefone"
                className="input-padrao"
                required
                placeholder="(XX) XXXXX-XXXX"
              />
            </label2>
            </div>
            <div className="formDiv">
            <label2 className="labelFormulario">
              Mensagem
              <textarea
                name="message"
                cols="70"
                rows="6"
                className="input-padrao"
                id="mensagem "
                required
              />
            </label2>
            </div>
            <input type="submit" event="preventDefault" value="Enviar" className="enviar" />
          </form>
        </div>
      </section>
    </>
  );
}

export default Formulario;