import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import { makeRequest } from "../../../core/utils/request";
import AuthCard from "../Card";
import history from '../../../core/utils/history'
import "./style.css";

function Register() {
  const { register, handleSubmit } = useForm();

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
          value="CADASTRAR"
        />
      </form>
    </AuthCard>
  );
}



export default Register;
