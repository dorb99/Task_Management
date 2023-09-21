import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./Account/LogIn/LogIn";
import SignUp from "./Account/SignUp/SignUp";
import UserPage from "./User_Info/UserPage"; // Import UserPage component
import MyProfile from "./General_Components/MyProfile/MyProfile"; // Import
import ContactUs from "./General_Components/ContactUs/ContactUs"; // Import
import { UserContext } from "./General_Components/Other/Context";
import NavBar from "./General_Components/NavBar/NavBar"; // Import
import users from "./UserInfo.json";
import Forgot from "./Account/ForgotPassword/Forgot";
import Footer from "./General_Components/Footer/Footer";
import QAPage from "./General_Components/QAPage";
import Fetcher from "./Fetcher";
import ErrorPage from "./General_Components/Other/ErrorPage";

function App() {
  const [cardInfo, setCardInfo] = useState({
    CVV: "",
    cardNumber: "",
    expirationDate: "",
  });
  const [user, setUser] = useState();
  const [userInfo, setUserInfo] = useState();
  const [allEvent, setallEvent] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        allEvent,
        setallEvent,
        newEvent,
        setNewEvent,
        setCardInfo,
        cardInfo,
        userInfo,
        setUserInfo,
      }}
    >
      <div className="App">
        <NavBar />
        <Fetcher />
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
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/QAPage" element={<QAPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}
export default App;
