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
      <div className="container">
        <div className="content first-content">
          <div className="first-column">
            <h2 className="title title-primary">welcome back!</h2>
            <p className="description description-primary">
              To keep connected with us
            </p>
            <p className="description description-primary">
              please login with your personal info
            </p>
            <button id="signin" className="btn btn-primary">
              sign in
            </button>
          </div>
          <div className="second-column">
            <h2 className="title title-second">create account</h2>
            <p className="description description-second">
              or use your email for registration:
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
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
          </div>
        </div>
      </div>
    </AuthCard>
  );
}

export default Register;
