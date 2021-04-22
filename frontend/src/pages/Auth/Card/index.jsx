import './style.css';

function AuthCard (props) {
    return(
        <div className="auth-card">
            <h1 className="auth-card-title">{props.title}</h1>
            {props.children}
        </div>
    );
}

export default AuthCard;