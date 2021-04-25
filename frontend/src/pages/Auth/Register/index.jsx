import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import { makeRequest } from "../../../core/utils/request";
import AuthCard from "../Card";
import history from '../../../core/utils/history'
import "./style.css";
import { useRef } from "react";

function Register() {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    makeRequest({ url: 'http://localhost:8080/register', method: 'POST', data: data })
      .then(() => {
        history.push('/login')
        toast.success('Cadastro realizado com sucesso!')
      })
      .catch(() => {
        toast.error('Falha ao realizar cadastro!')
      })
  };

  return (
    <AuthCard title="FAÇA SEU CADASTRO" subtitle="e venha se juntar a nós">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label className="label-registrar">
          <AiOutlineMail className="icon-registrar-input" />
          <input
            className="input-registrar"
            type="email"
            placeholder="Email"
            name="email"
            ref={register({
              required: "Você deve especificar um e-mail!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Insira um e-mail válido!"
              }
            })}
          />
        </label>
        {errors.email && (
          <small>
            {errors.email.message}
          </small>
        )}

        <label className="label-registrar">
          <RiLockPasswordLine className="icon-registrar-input" />
          <input
            className="input-registrar"
            type="password"
            placeholder="Digite sua senha (min. 6 caracteres)"
            name="password"
            ref={register({
              required: "Você deve especificar uma senha!",
              minLength: {
                value: 6,
                message: "A senha deve ter ao menos 6 caracteres!"
              }
            })}
          />
        </label>
        {errors.password && (
          <small>
            {errors.password.message}
          </small>
        )}

        <label className="label-registrar">
          <RiLockPasswordLine className="icon-registrar-input" />
          <input
            className="input-registrar"
            type="password"
            placeholder="Repita a sua senha"
            name="password_repeat"
            ref={register({
              required: "Campo obrigatório!",
              validate: value => value === password.current || "As senhas não coincidem!"
            })}
          />
        </label>
        {errors.password_repeat && (
          <small>
            {errors.password_repeat.message}
          </small>
        )}

        <Link to="/login" className="link">Já possui um login?</Link>

        <input
          type="submit"
          className="submit-registrar btn btn-second"
          value="CADASTRAR"
        />
      </form>
    </AuthCard>
  );
}



export default Register;
