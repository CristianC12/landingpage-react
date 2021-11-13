import React from 'react';
import "./style.css"

function Formulario() {
    return(
        <>
            <section id="formSection">
                <h1 className="titulo" id="contato">Formulário</h1>
                <h2 className="subtitulo">Adquira já o seu bilhete</h2>
                <div className="formulario">
                    <form2
                    method="post"
                    className="venda"
                    >
                        <label2 for="nomesobrenome">Nome e sobrenome
                            <input type="text" id="nomesobrenome" className="input-padrao" required/>
                        </label2>

                        <label2 for="email">Email
                            <input type="email" id="email" className="input-padrao" required placeholder="seuemail@dominio.com"/>
                        </label2>

                        <label2 for="telefone">Telefone
                        <input type="tel" id="telefone" className="input-padrao" required placeholder="(XX) XXXXX-XXXX"/>
                        </label2>

                        <label2 for="mensagem">Mensagem
                            <textarea cols="70" rows="10" id="mensagem" className="input-padrao" required />
                        </label2>
                        <input type="submit" value="Enviar" className="enviar"/>
                    </form2>
                </div>
            </section>
        </>
    );
}

export default Formulario
