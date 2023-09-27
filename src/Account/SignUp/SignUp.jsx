import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modals from "../Payment/Payment";
import "./SignUp.css";
import Comments from "../Comments/Comments";
import { UserContext } from "../../General_Components/Other/Context";

function SignUp() {
  const { setUser, setUserInfo, setallEvents, setChanged } =
    useContext(UserContext);
  const [email, setEmail] = useState("");
  const [choosedPlan, setChoosedPlan] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [birth, setBirth] = useState("");
  const navigate = useNavigate();
  const [creditCardExists, setCreditCardExists] = useState(false);

  useEffect(() => {
    const creditCardData = localStorage.getItem("creditCardData");
    if (creditCardData) {
      setCreditCardExists(true);
    }
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!creditCardExists) {
      alert("Please provide credit card information first.");
      return;
    }

    setUser(username);
    const newUser = {
      username: username,
      password: password,
      email: email,
      birthday: birth,
      tasks: [{}],
    };
    setallEvents(newUser.tasks);
    setUserInfo(newUser);
    navigate("/userpage");
    setChanged(true);
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
      </form>{" "}
      {choosedPlan ? null : <Modals setChoosedPlan={setChoosedPlan} />}
      <Comments />
    </div>
  );
}

export default SignUp;
