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
  const { register, handleSubmit, errors } = useForm();

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
              required: "Você deve especificar um e-mail!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Insira um e-mail válido!"
              }
            })}
          />
        </label>
        {errors.username && (
          <small>
            {errors.username.message}
          </small>
        )}

        <label class="label-registrar">
          <RiLockPasswordLine className="icon-registrar-input" />
          <input
            className="input-registrar"
            type="password"
            placeholder="Senha"
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

        <Link to="/register" className="link">Não possui cadastro? Faça agora!</Link>

        <input type="submit" className="submit-registrar btn btn-second" value="Logar"/>
      </form>
    </AuthCard>
  );
}

export default Login;
