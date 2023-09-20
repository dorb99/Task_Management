import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./comp/Sign-In-Up/LogIn";
import SignUp from "./comp/Sign-In-Up/SignUp";
import UserPage from "./User_Info/UserPage"; // Import UserPage component
import MyProfile from "./General_Components/MyProfile"; // Import
import ContactUs from "./General_Components/ContactUs"; // Import
import { UserContext } from "./General_Components/Context";
import NavBar from "./General_Components/NavBar";
import users from "./UserInfo.json";

function App() {
  const [user, setUser] = useState();
  const [allEvent, setallEvent] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });

  useEffect(() => {
    if (user){
      setallEvent(users[user].tasks)
    }
  },[user])
  
  return (
    <UserContext.Provider
      value={{ user, setUser, allEvent, setallEvent, newEvent, setNewEvent }}
    >
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={user ? <UserPage /> : <LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}
export default App;
