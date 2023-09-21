import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./comp/Sign-In-Up/LogIn";
import SignUp from "./comp/Sign-In-Up/SignUp";
import UserPage from "./User_Info/UserPage";
import MyProfile from "./General_Components/MyProfile";
import ContactUs from "./General_Components/ContactUs";
import { UserContext } from "./General_Components/Context";
import NavBar from "./General_Components/NavBar";
import users from "./UserInfo.json";
import ErrorPage from "./General_Components/ErrorPage";
import QAPage from "./General_Components/QAPage";
import Fetcher from "./Fetcher";


function App() {
  const [userInfo, setUserInfo] = useState(); 
  const [user, setUser] = useState();
  const [allEvent, setallEvent] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  return (
    <UserContext.Provider
      value={{ user, setUser, allEvent, setallEvent, newEvent, setNewEvent , userInfo, setUserInfo}}
    >
      <div className="App">
        <NavBar />
        <Fetcher/>
        <Routes>
          <Route
            path="/"
            element={
              user !== "no-user" && user !== undefined ? (
                <UserPage />
              ) : (
                <LogIn />
              )
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/QAPage" element={<QAPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}
export default App;
