import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import users from "../../UserInfo.json";
import { UserContext } from "../../General_Components/Context";
import "./LogIn.css";
import Footer from "../../General_Components/Footer";
function LogIn() {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (users.hasOwnProperty(username)) {
      if (users[username].password === password) {
        setUser(username);
        navigate("/");
      } else {
        alert("Please check your password");
      }
    } else {
      alert("Username not found. Please sign up.");
    }
  };
  return (
    <div id="container">
      <div id="login-container">
        <h2 id="login-header">Log In</h2>
        <input className="login-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          minLength="8"
        />
        <input className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="login-button" onClick={handleSignIn}>Log In</button>
        <p id="no-account">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default LogIn;
