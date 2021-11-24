import emailjs from 'emailjs-com'
import './style.css'


const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();
        alert("Formulário enviado!")
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
                                maxLength="30"
                            />

                            <label2 className="labelFormulario" for="email">
                                Email
                                <input
                                    name="user_email"
                                    type="email"
                                    id="email"
                                    className="input-padrao"
                                    required
                                    placeholder="seuemail@dominio.com"
                                    maxLength="50"
                                    minLength="2"
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
                                    maxLength="15"
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
                                    maxLength="250"
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

export default Mailer;