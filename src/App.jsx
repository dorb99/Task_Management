import React, { useEffect, useState } from "react";
import { UserContext } from "./General_Components/Other/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./Account/LogIn/LogIn";
import SignUp from "./Account/SignUp/SignUp";
import UserPage from "./User_Info/UserPage"; 
import MyProfile from "./General_Components/MyProfile/MyProfile";
import ContactUs from "./General_Components/ContactUs/ContactUs"; 
import NavBar from "./General_Components/NavBar/NavBar";
import Forgot from "./Account/ForgotPassword/Forgot";
import Footer from "./General_Components/Footer/Footer";
import QAPage from "./General_Components/QA/QAPage";
import ErrorPage from "./General_Components/Other/ErrorPage";
import Fetcher from "./Fetcher";
import "./App.css";

function App() {
  const [cardInfo, setCardInfo] = useState({
    CVV: "",
    cardNumber: "",
    expirationDate: "",
  });
  const [user, setUser] = useState(); 
  const [userInfo, setUserInfo] = useState();
  const [allEvents, setallEvents] = useState([]);
  const [changed, setChanged] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });

  useEffect(() => {
    const haveUser = JSON.parse(localStorage.getItem("username"));
    if (haveUser !== null) setUser(haveUser);
  }, []);
  
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        allEvents,
        setallEvents,
        newEvent,
        setNewEvent,
        setCardInfo,
        cardInfo,
        userInfo,
        setUserInfo,
        changed,
        setChanged,
        // taskAdder,
        // setTaskAdder,
      }}
    >
      <div className="App">
        <NavBar />
        <Fetcher user={user} allEvents={allEvents}/>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userpage" element={<UserPage />} />
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
