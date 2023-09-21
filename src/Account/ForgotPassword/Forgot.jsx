import React, { useState } from "react";
import usersData from "../../UserInfo.json";
import "./Forgot.css";
import Comments from "../Comments/Comments";
const Forgot = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = () => {
    for (const userKey in usersData) {
      const user = usersData[userKey];
      if (user.email === email) {
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
      <Comments/>
    </div>
  );
};

export default Forgot;
