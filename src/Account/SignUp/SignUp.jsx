import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modals from "../Payment/Payment";
import "./SignUp.css";
import Comments from "../Comments/Comments";
import { UserContext } from "../../General_Components/Other/Context";

function SignUp() {
  const { setUser, setUserInfo, setAllEvents, setChanged } =
    useContext(UserContext);
  const [email, setEmail] = useState("");
  const [choosedPlan, setChoosedPlan] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [birth, setBirth] = useState("");
  const navigate = useNavigate();
  const [creditCardExists, setCreditCardExists] = useState(false);

  useEffect(() => {
    if (choosedPlan) {
      setCreditCardExists(true);
    }
  }, [choosedPlan]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!creditCardExists) {
      alert("Please provide credit card information first.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();

      console.log("Fetched users:", users); // Debugging step

      if (!Array.isArray(users)) {
        throw new Error("Invalid user data format. Expected an array.");
      }

      // Check if username is already taken
      const existingUser = users.find((user) => user.id === username);
      if (existingUser) {
        alert("Username already exists. Please choose another.");
        return;
      }

      // Create new user object
      const newUser = {
        id: username, // Unique identifier
        username: username,
        password: password,
        email: email,
        birthday: birth,
        tasks: [],
      };

      // Save new user to JSON server
      const addUserResponse = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!addUserResponse.ok) {
        throw new Error("Failed to create user.");
      }

      setUser(username);
      setUserInfo(newUser);
      setAllEvents([]);
      setChanged(true);
      localStorage.setItem("username", JSON.stringify(username));

      navigate("/userpage");
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  return (
    <div id="signup-container">
      <form onSubmit={handleSignUp}>
        <div id="signup">
          <h2 id="signup-header">Sign Up</h2>
          <span className="patter-input">
            Password and Username must include a number and a letter
          </span>
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
          <button type="submit" id="signup-button">
            Submit
          </button>
          <p id="have-account">
            I have an account! <Link to="/">Log In</Link>
          </p>
        </div>
      </form>
      {!choosedPlan && <Modals setChoosedPlan={setChoosedPlan} />}
      <Comments />
    </div>
  );
}

export default SignUp;
