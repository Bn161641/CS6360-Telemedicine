import "./Login.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const navigate = useNavigate();

  function usernameChangeHandler(event) {
    setUsername(event.target.value);
  }

  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }

  function formLogin(event) {
    let userID;
    let user = "";

    event.preventDefault();

    //put logic to validate user here

    //after validation put the logic here to switch to either the system user, doctor, or patient
    //for now I am hard coding doctor and id of 1
    //if the credential is invalid set user to be to be error (user = "error");
    userID = 1;
    user = "doctor";

    switch (user) {
      case "doctor":
        setInvalid(false);
        navigate("/doctor/" + userID + "/profile");
        break;
      case "patient":
        setInvalid(false);
        //put navigation for patient here
        break;
      case "system-user":
        setInvalid(false);
        //put navigation for system user here
        break;
      default:
        setInvalid(true);
    }
  }

  return (
    <div className="loginPage">
      <div className="loginIntroBackground"></div>
      <div className="loginFormContainer">
        <form className="loginForm" onSubmit={formLogin}>
          <img src={require("../asset/telemedice-logo-crop.png")} />
          <h1>Welcome!</h1>
          <div className="loginInputContainer">
            <AccountCircleIcon />
            <input
              className="loginInput"
              placeholder="username"
              type="text"
              value={username}
              onChange={usernameChangeHandler}
            />
          </div>
          <div className="loginInputContainer">
            <LockIcon />
            <input
              className="loginInput"
              placeholder="password"
              type="password"
              value={password}
              onChange={passwordChangeHandler}
            />
          </div>
          <div className="loginControl">
            <div className="rememberMe">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <a href="">Forgot Password</a>
          </div>
          <button type="submit" className="loginButton">
            Login
          </button>
          {invalid ? <p className="wrongCred">Incorrect username or password</p> : <p className="wrongCred">&nbsp;</p>}
        </form>
      </div>
    </div>
  );
}
