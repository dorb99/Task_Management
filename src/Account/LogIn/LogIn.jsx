import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../General_Components/Other/Context';
import './LogIn.css';
import Comments from '../Comments/Comments';

function LogIn() {
  const { setUser, setUserInfo, setAllEvents } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
  
      console.log("Fetched users:", users); // Debugging step
  
      if (!Array.isArray(users)) {
        throw new Error("Invalid user data format. Expected an array.");
      }

      // Find the user in the users array
      const user = users.find((u) => u.id === username);

      if (user) {
        if (user.password === password) {
          setUser(username);
          setUserInfo(user);
          setAllEvents(user.tasks || []);

          localStorage.setItem("username", JSON.stringify(username));
          navigate("/userpage");
        } else {
          alert("Incorrect password. Please try again.");
        }
      } else {
        alert("Username not found. Please sign up.");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
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
          minLength="4"
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
