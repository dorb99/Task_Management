import React, { useState } from "react";
import "./ContactUs.css";
import Custome from "./Custome";
import FB from "./img/FB.png";
import Ins from "./img/Ins.png";
import Tw from "./img/Tw.png";
import GH from "./img/GH.jpg";

function ContactUs() {
  const [selectedProblem, setSelectedProblem] = useState("Problem-1");
  return (
    <div id="about-father">
      <div className="container">
        <h1 className="title-line">About Us</h1>
        <h3 className="project-name">Dor's & Ori's Group Project:Mangy</h3>
        <p className="para">
          Welcome to our first group project. this project is about displaying
          all of our front-end skills using react.js and everything we learnt
          this month and a half since we have started our Full-Stack course
        </p>
      </div>
      <div className="contact-us">
        <p>Having Problems?</p>
        <div className="problems">
          <select
            value={selectedProblem}
            onChange={(e) => setSelectedProblem(e.target.value)}
          >
            <option value="Problem-1">Choose</option>
            <option value="Problem-2">Problem- 1 </option>
            <option value="Problem-3">Problem- 2 </option>
            <option value="Problem-4">Problem- 3 </option>
            <option value="Problem-5">Problem- 4 </option>
            <option value="Problem-6"><Custome/> </option>
          </select>
        </div>
      </div>
      <div className="follow-us">
        <h2>Follow Us</h2>
        <p className="link-container">
          <p>
            <img className="follow-picture" src={Ins} alt="" />
          </p>
          <p>
            <img className="follow-picture" src={Tw} alt="" />
          </p>
          <p>
            <img className="follow-picture" src={FB} alt="" />
          </p>
          <p>
            <img className="follow-picture" src={GH} alt="" />
          </p>
          <p>
            <img className="follow-picture" src={GH} alt="" />
          </p>
        </p>
      </div>
    </div>
  );
}
export default ContactUs;
