import { useForm } from "react-hook-form";
import AuthCard from "../Card";
import "./style.css";

function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
