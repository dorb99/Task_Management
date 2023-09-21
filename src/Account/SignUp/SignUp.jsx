import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modals from "../Paymant/Paymant";
import "./SignUp.css";
import Comments from "../Comments/Comments";
function SignUp({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [birth, setBirth] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div id="signup-container">
      <form onSubmit={handleSignUp}>
        <div id="signup">
          <h2 id="signup-header">Sign Up</h2>
          <span className="patter-input">Password and Username must include a number and a letter</span>
          <input
            type="text"
            className="signup-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            pattern="^(?=.*[0-9])(?=.*[a-zA-Z]).+$"
            required
          />
          <input
            type="email"
            className="signup-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
          <input
            type="password"
            className="signup-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern="^(?=.*[0-9])(?=.*[a-zA-Z]).+$"
            required
            />
          <input
            type="date"
            className="signup-input"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
          <Modals />
          <button type="submit" id="signup-button">
            Submit
          </button>
          <p id="have-account">
            I have an account! <Link to="/login">Log In</Link>
          </p>
        </div>
      </form>
      <Comments/>
    </div>
  );
}

export default SignUp;
