import { useForm } from "react-hook-form";
import { AiOutlineMail } from 'react-icons/ai'
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
            <h2 className="title title-second">Criar conta</h2>
            <p className="description description-second">
            
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <AiOutlineMail/>
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

              <input
                type="submit"
                className="submit-registrar btn btn-second"
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
