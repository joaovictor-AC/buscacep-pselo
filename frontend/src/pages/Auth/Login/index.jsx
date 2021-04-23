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
            <h2 className="title">Hello, Friend!</h2>
            <p className="description">Enter your personal details.</p>
            <p className="description">and start journey with us.</p>
            <button className="btn">Sign up</button>          
          </div>
          <div className="second-column">
            <h2 className="title">Sign in to developer</h2>
            <div className="social-media">
              <ul>
                <li><a href="#">facebook</a></li>
                <li><a href="#">google+</a></li>
                <li><a href="#">linkedin</a></li>
              </ul>
            </div>
            <p className="description">Or use your email account:</p>

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

          </div>
        </div>


      </div>
    </AuthCard>
  );
}

export default Login;
