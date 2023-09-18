import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

function SignUp({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleSignUp = () => {};
  return (
    <div>
      <h2>Sign Up</h2>
      <select
        value={selectedPlan}
        onChange={(e) => setSelectedPlan(e.target.value)}
      >
        <option value="plan1">Plan 1 ($10)</option>
        <option value="plan2">Plan 2 ($20)</option>
        <option value="plan3">Plan 3 ($30)</option>
      </select>
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
      <button onClick={handleSignUp}>
        <Link to="/login">Sign Up</Link>
      </button>
    </div>
  );
}

export default SignUp;
