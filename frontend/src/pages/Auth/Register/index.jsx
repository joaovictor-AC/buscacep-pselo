import { useForm } from "react-hook-form";
import AuthCard from "../Card";
import "./style.css";

function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <AuthCard title="REGISTER">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-registrar"
          type="text"
          placeholder="Email"
          name="email"
          ref={register({
            required: true,
          })}
        />

        <input
          className="input-registrar"
          type="text"
          placeholder="Senha"
          name="password"
          ref={register({
            required: true,
          })}
        />

        <input type="submit" className="submit-registrar" />
      </form>
    </AuthCard>
  );
}

export default Register;
