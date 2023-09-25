import React, { useState } from "react";
import usersData from "../../UserInfo.json";
import "./Forgot.css";
import Comments from "../Comments/Comments";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = () => {
    for (const localuserkey in localStorage) {
      const user = JSON.parse(localStorage.getItem(localuserkey));
      if (user?.email === email) {
        setPassword(user.password);
        setTimeout(() => {
          navigate('/');
        }, 3000);
        setMessage(`Your password is: ${user.password}`);
        return;
      }
    }
    for (const userKey in usersData) {
      const user = usersData[userKey];
      if (user.email === email) {
        setTimeout(() => {
          navigate("/")
        }, 3000);
        setPassword(user.password);
        setMessage(`Your password is: ${user.password}`);
        return;
      }
    }
    setMessage("Email not found.");
  };

  return (
    <div className="whole-page">
      <div id="forgot-container">
        <h2 id="forgot-title">Forgot Password</h2>
        <div>
          <label id="forgot-email-title" htmlFor="email">
            Email:
            <input
              placeholder="Insert your email address..."
              type="email"
              id="forgot-email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        </div>
        <div>
          <button id="forgot-button" onClick={handleResetPassword}>
            Get Password
          </button>
        </div>
        <div>
          <p id="forgot-message">{message}</p>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Forgot;
