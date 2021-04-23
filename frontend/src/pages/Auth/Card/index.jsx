import './style.css';

function AuthCard (props) {
    return(
        <div className="container">
        <div className="content-registrar">
          <div className="content-above">
            <h1 className="content-title-registrar">{props.title}</h1>
            <h3 className="content-subtitle-registrar">{props.subtitle}</h3>
          </div>
          {props.children}
        </div>
      </div>
    );
}

export default AuthCard;