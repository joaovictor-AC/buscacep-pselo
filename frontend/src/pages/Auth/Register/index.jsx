import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
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
            <h2 className="title title-primary">Criar conta</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <label className="label-registrar">
                <AiOutlineMail />
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
                <RiLockPasswordLine />
                <input
                  className="input-registrar"
                  type="text"
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
          </div>

          <div className="second-column">
            <h1>IMAGEM</h1>
          </div>
        </div>
      </div>
    </AuthCard>
  );
}

export default Register;
