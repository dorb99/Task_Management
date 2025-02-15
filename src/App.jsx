import React, { useContext, useEffect, useState } from "react";
import { UserContext, UserProvider } from "./General_Components/Other/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./Account/LogIn/LogIn";
import SignUp from "./Account/SignUp/SignUp";
import UserPage from "./User_Info/UserPage";
import MyProfile from "./General_Components/MyProfile/MyProfile";
import AboutUs from "./General_Components/AboutUs/AboutUs";
import NavBar from "./General_Components/NavBar/NavBar";
import Forgot from "./Account/ForgotPassword/Forgot";
import Footer from "./General_Components/Footer/Footer";
import QAPage from "./General_Components/QA/QAPage";
import ErrorPage from "./General_Components/Other/ErrorPage";
import Fetcher from "./Fetcher";
import "./App.css";

function App() {
  const { user, setUser, allEvents } = useContext(UserContext);

  useEffect(() => {
    const haveUser = JSON.parse(localStorage.getItem("username"));
    if (haveUser !== null) setUser(haveUser);
  }, []);

  return (
    <UserProvider>
      <div className="App">
        <NavBar />
        <Fetcher user={user} allEvents={allEvents} />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/QAPage" element={<QAPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
      </UserProvider>
  );
}
export default App;
