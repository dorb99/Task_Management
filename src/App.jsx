import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./comp/Sign-In-Up/LogIn";
import SignUp from "./comp/Sign-In-Up/SignUp";
import UserPage from "./User_Info/UserPage"; // Import UserPage component
import MyProfile from "./General_Components/MyProfile"; // Import
import ContactUs from "./General_Components/ContactUs"; // Import
import { UserContext } from "./General_Components/Context";
import NavBar from "./General_Components/NavBar";

function App() {
  const [user, setUser] = useState(null);
  

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={user ? <UserPage /> : <LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
      
      </div>
    </UserContext.Provider>
  );
}
export default App;
