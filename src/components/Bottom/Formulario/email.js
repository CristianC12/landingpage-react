import emailjs from 'emailjs-com'
import './style.css'


function Mailer(){
 
      function sendEmail(e) {
        e.preventDefault();
        alert("Formulário enviado com sucesso!");
        emailjs.sendForm('service_ef5h6ml', 'template_dio2uoc', e.target, 'user_X0v58AzfU1xoo3U4U14Zu').then(res=>{console.log(res);}).catch(err=> console.log(err));
    }   
    return (
        <>
            <section id="formSection">
                <a id="contato" />
                <h1 className="titulo tituloContato">
                    Contato
                </h1>
                <div className="formulario">
                    <form onSubmit={sendEmail} method="POST" className="venda">
                        <div className="formDiv">
                            <label2 className="labelFormulario" for="nomesobrenome">
                                Nome e sobrenome
                            </label2>
                            <input
                                name="name"
                                type="text"
                                id="nomesobrenome"
                                className="input-padrao"
                                required
                                maxLength="45"
                            />

                            <label2 className="labelFormulario" for="email">
                                Email
                            </label2>
                                <input
                                    name="user_email"
                                    type="email"
                                    id="email"
                                    className="input-padrao"
                                    placeholder="seuemail@dominio.com"
                                    required
                                    maxLength="50"
                                />

                            <label2 className="labelFormulario" for="telefone">
                                Telefone
                                </label2>
                                <input
                                    name="phone"
                                    type="tel"
                                    id="telefone"
                                    className="input-padrao"
                                    placeholder="(XX) XXXXX-XXXX"
                                    required
                                    maxLength="15"
                                />
                        </div>
                        <div className="formDiv">
                            <label2 className="labelFormulario">
                                Mensagem
                            </label2>
                                <textarea
                                    name="content"
                                    cols="70"
                                    rows="6"
                                    className="input-padrao"
                                    id="mensagem "
                                    required
                                    maxLength="250"
                                />
                        </div>
                        <input type="submit" value="Enviar" className="enviar" />
                    </form>
                </div>
            </section>
        </>
    );
}

export default Mailer;