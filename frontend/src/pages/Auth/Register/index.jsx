import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { makeRequest } from "../../../core/utils/request";
import AuthCard from "../Card";
import "./style.css";

function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    makeRequest({ url: 'http://localhost:8080/register', method: 'POST', data: data})
    .then(
      console.log("Deu certo")
      // LEMBRAR DE COLOCAR TOAST AQUI
    )
  };

  return (
      <AuthCard  title="FAÇA SEU CADASTRO!">
          <form onSubmit={handleSubmit(onSubmit)} className="form">
                <label className="label-registrar">
                  <AiOutlineMail className="icon-registrar-input" />
                  <input
                    className="input-registrar"
                    type="text"
                    placeholder="Email"
                    name="email"
                    ref={register({
                      required: true,
                    })}
                  />
                </label>
                <label className="label-registrar">
                  <RiLockPasswordLine className="icon-registrar-input" />
                  <input
                    className="input-registrar"
                    type="password"
                    placeholder="Senha"
                    name="password"
                    ref={register({
                      required: true,
                    })}
                  />
                </label>

                <Link to="/login" className="link">Já possui um login?</Link>

                <input
                  type="submit"
                  className="submit-registrar btn btn-second"
                  value="Enviar"
                />
          </form>
      </AuthCard>
  );
}



export default Register;
