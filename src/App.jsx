import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./comp/Sign-In-Up/LogIn";
import SignUp from "./comp/Sign-In-Up/SignUp";
import users from "./UserInfo.json";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              user ? <UserPage user={user} /> : <LogIn setUser={setUser} />
            }
          />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
