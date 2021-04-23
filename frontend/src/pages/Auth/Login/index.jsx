import { useForm } from "react-hook-form";
import { makeLogin } from "../../../core/utils/request";
import AuthCard from "../Card";
import history from '../../../core/utils/history'
import "./style.css";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { toast } from "react-toastify";


function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    makeLogin(data)
      .then(response => {
        if (response.data) {
          localStorage.setItem('app-token', JSON.stringify(response.data))
          toast.success('Login realizado com sucesso!')
          history.push('/')
        }
      })
      .catch(() => {
        toast.error('Falha ao realizar login!');
      })
  };

  return (
    <AuthCard title="FAÇA SEU LOGIN!" subtitle="e faça suas buscas">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label class="label-registrar">
          <AiOutlineMail className="icon-registrar-input" />
          <input
            className="input-registrar"
            type="email"
            placeholder="Email"
            name="username"
            ref={register({
              required: true,
            })}
          />
        </label>

        <label class="label-registrar">
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

        <Link to="/register" className="link">Não possui cadastro? Faça agora!</Link>

        <input type="submit" className="submit-registrar btn btn-second" value="Logar"/>
      </form>
    </AuthCard>
  );
}

export default Login;
