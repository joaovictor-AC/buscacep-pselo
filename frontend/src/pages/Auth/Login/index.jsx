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

      <div className = "container">
        <div className="content first-content">
          <div className="first-column">
            <h2 className="title-primary">Seja bem-vindo!</h2>
            <p className="description-primary">Entre com suas informações pessoais</p>
            <p className="description-primary">e comece a sua jornada conosco.</p> 
            <button id="signup" class="btn btn-primary">sign up</button>        
          </div>
          <div className="second-column">
            <h2 className="title title-second">Faça  login</h2>
            <p className="description description-second">usando seu email da conta e senha criada:</p>

            <form onSubmit={handleSubmit(onSubmit)}>

            <label class="label-input">
            <input
              className="input-login"
              type="text"
              placeholder="                          ✉ Email"
              name="username"
              ref={register({
                required: true, 
              })}
            />
            </label>

            <label class="label-input">
            <input
              className="input-login"
              type="text"
              placeholder="                            Senha"
              name="password"
              ref={register({
                required: true,
              })}
            />
            </label>

            <input type="submit" className="submit-login submit-login-primary" />
          </form>

          </div>
        </div>


      </div>
    </AuthCard>
  );
}

export default Login;
