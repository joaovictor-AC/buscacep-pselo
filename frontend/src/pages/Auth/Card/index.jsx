import './style.css';

function AuthCard (props) {
    return(
        <div className="container">
        <div className="content-registrar">
          <h1 className="content-title-registrar">{props.title}</h1>
          {props.children}
        </div>
      </div>
    );
}

export default AuthCard;