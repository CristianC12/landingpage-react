import emailjs from 'emailjs-com'
import './style.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

 const validationPost = yup.object().shape({
    name:  yup.string().required("O nome é obrigatório").max(40, "O nome precisa ter menos de 40 caracteres") ,
    user_email:  yup.string().required("O email é obrigatório").max(50, "O email precisa ter menos de 50 caracteres") ,
    phone:  yup.string().required("O telefone é obrigatório").max(15, "O telefone precisa ter menos de 15 caracteres"),
    content: yup.string().required("A mensagem é obrigatória").max(250, "A mensagem precisa ter menos de 250 caracteres")
}) 


function Mailer(){



    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(validationPost)
    })

    const onSubmit = data => console.log(data);
 
/*      function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_ef5h6ml', 'template_dio2uoc', e.target, 'user_X0v58AzfU1xoo3U4U14Zu').then(res=>{console.log(res);}).catch(err=> console.log(err));
    }   */
    return (
        <>
            <section id="formSection">
                <a id="contato" />
                <h1 className="titulo tituloContato">
                    Contato
                </h1>
                <div className="formulario">
                    <form onSubmit={handleSubmit(onSubmit)} method="POST" className="venda">
                        <div className="formDiv">
                            <label2 className="labelFormulario" for="nomesobrenome">
                                Nome e sobrenome
                            </label2>
                            <input
                                name="name"
                                type="text"
                                id="nomesobrenome"
                                className="input-padrao"
                                maxLength="45"
                                {...register("name")}
                            />
                            <p className="error-message">{errors.name?.message}</p>

                            <label2 className="labelFormulario" for="email">
                                Email
                            </label2>
                                <input
                                    name="user_email"
                                    type="email"
                                    id="email"
                                    className="input-padrao"
                                    placeholder="seuemail@dominio.com"
                                    maxLength="60"
                                    minLength="2"
                                    {...register("user_email")}
                                />
                                <p className="error-message">{errors.user_email?.message}</p>

                            <label2 className="labelFormulario" for="telefone">
                                Telefone
                                </label2>
                                <input
                                    name="phone"
                                    type="tel"
                                    id="telefone"
                                    className="input-padrao"
                                    placeholder="(XX) XXXXX-XXXX"
                                    maxLength="16"
                                    {...register("phone")}
                                />
                                <p className="error-message">{errors.phone?.message}</p>
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
                                    maxLength="251"
                                    {...register("content")}
                                />
                            <p className="error-message">{errors.content?.message}</p>
                        </div>
                        <input type="submit" value="Enviar" className="enviar" />
                    </form>
                </div>
            </section>
        </>
    );
}

export default Mailer;