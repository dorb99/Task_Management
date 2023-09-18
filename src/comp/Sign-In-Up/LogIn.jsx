import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import users from "../../UserInfo.json";

function LogIn({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usersArray = Object.keys(users);
  const navigate = useNavigate();

  const handleSignIn = () => {
    for (let i = 0; i < usersArray.length; i++) {
      if (usersArray[i] === username) {
        if (users[username].password === password) { // Compare passwords correctly
          setUser(username);
          navigate("/UserPage");
        } else {
          alert("Please check your password");
        }
        return; // Exit the loop once a matching username is found
      }
    }
    alert("Username not found. Please sign up.");
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        minLength="8"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Log In</button>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default LogIn;
