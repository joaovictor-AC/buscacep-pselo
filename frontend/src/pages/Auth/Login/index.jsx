import { useForm } from "react-hook-form";
import { makeLogin } from "../../../core/utils/request";
import AuthCard from "../Card";
import history from '../../../core/utils/history'
import "./style.css";

function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    makeLogin(data)
    .then(response => {
      if(response.data) {
        localStorage.setItem('app-token', JSON.stringify(response.data))
        history.push('/')
      }
    })
  };

  return (
    <AuthCard title="LOGIN">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-login"
          type="text"
          placeholder="Email"
          name="username"
          ref={register({
            required: true,
          })}
        />

        <input
          className="input-login"
          type="text"
          placeholder="Senha"
          name="password"
          ref={register({
            required: true,
          })}
        />

        <input type="submit" className="submit-login" />
      </form>
    </AuthCard>
  );
}

export default Login;
