import "./Login.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from '@mui/icons-material/Lock';

export default function Login() {
  return (
    <div className="loginPage">
      
      <div className="loginIntroBackground"></div>
      <div className="loginFormContainer">
        <form className="loginForm">
          <img src={require("../asset/telemedice-logo-crop.png")} />
          <h1>Welcome!</h1>
          <div className="loginInputContainer">
            <AccountCircleIcon />
            <input className="loginInput" placeholder="username" type="text" />
          </div>
          <div className="loginInputContainer">
            <LockIcon />
            <input
              className="loginInput"
              placeholder="password"
              type="password"
            />
          </div>
          <div className="loginControl">
            <div className="rememberMe">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <a href="">Forgot Password</a>
          </div>
          <button type="submit" className="loginButton">Login</button>
        </form>
      </div>
    </div>
  );
}
