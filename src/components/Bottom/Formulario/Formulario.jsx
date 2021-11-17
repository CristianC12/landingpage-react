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
          <form className="venda">
          <div className="formDiv">
            <label2 className="labelFormulario" for="nomesobrenome">
              Nome e sobrenome
              <input
                type="text"
                id="nomesobrenome"
                className="input-padrao"
                required
              />
            </label2>

            <label2 className="labelFormulario" for="email">
              Email
              <input
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
