import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import users from "../../UserInfo.json";
import { UserContext } from "../../General_Components/Other/Context";
import "./LogIn.css";
import Comments from "../Comments/Comments";

function LogIn() {
  const { user, setUser, setallEvent } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedUsername = JSON.parse(localStorage.getItem("username"));
    if (savedUsername && user!==savedUsername) {
      setUser(savedUsername); 
      navigate("/"); 
    }
  },[user]); 

  const handleSignIn = () => {
    if (users.hasOwnProperty(username)) {
      if (users[username].password === password) {
        setUser(username);
        localStorage.setItem("username", JSON.stringify(username));
        navigate("/");
      } else {
        alert("Please check your password");
      }
    } else {
      alert("Username not found. Please sign up.");
    }
  };

  return (
    <div id="login-container">
      <div id="login">
        <h2 id="login-header">Log In</h2>
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          minLength="8"
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="login-button" onClick={handleSignIn}>
          Log In
        </button>
        <p id="no-account">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        <p id="forgot-pass">
          Forgot your password? <Link to="/forgot">Here</Link>
        </p>
      </div>
      <Comments />
    </div>
  );
}

export default LogIn;
