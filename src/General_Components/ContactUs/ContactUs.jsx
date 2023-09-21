import React, { useState } from "react";
import "./ContactUs.css";
function ContactUs() {
  const [selectedProblem, setSelectedProblem] = useState("Problem-1");
  return (
    <div id="about-father">
      <div id="about-container">
        <h3 className="project-name">Project:Mangy</h3>
        <p className="para">
          Welcome to our first group project. this project is about displaying
          all of our front-end skills using react.js and everything we learnt
          this month and a half since we have started our Full-Stack course
        </p>
      </div>
      </div>
  );
}
export default ContactUs;
