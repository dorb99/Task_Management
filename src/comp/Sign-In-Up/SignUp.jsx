import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modals from "./Paymant"; 

function SignUp({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = () => {
    // Implement user registration logic here
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required={username.length >= 8}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
        <Modals />
      <button onClick={handleSignUp}>
        <Link to="/login">Sign Up</Link>
      </button>
      <p>
        I have an account! <Link to="/login">Log In</Link>
      </p>
    </div>
  );
}

export default SignUp;
