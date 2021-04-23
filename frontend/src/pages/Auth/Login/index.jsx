import { useForm } from "react-hook-form";
import { makeLogin } from "../../../core/utils/request";
import AuthCard from "../Card";
import history from '../../../core/utils/history'
import "./style.css";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";


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
      <div className = "container">
        <div className="first-content">
          <div className="second-column">
            <h2 className="title title-second">FAÇA LOGIN</h2>
            <p className="description description-second">usando seu email da conta e senha criada:</p>

            <form onSubmit={handleSubmit(onSubmit)}>

            <label class="label-input">
            <AiOutlineMail className="icon-to-inputs"/>
            <input
              className="input-login"
              type="text"
              placeholder="Email"
              name="username"
              ref={register({
                required: true, 
              })}
            />
            </label>

            <label class="label-input">
            <RiLockPasswordLine className="icon-to-inputs"/>
            <input
              className="input-login"
              type="password"
              placeholder="Senha"
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
  );
}

export default Login;
