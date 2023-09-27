import React, { useState } from "react";
import "./AboutUs.css";
import Logo from "../img/OurLogo.png";
import { Link } from "react-router-dom";
function AboutUs() {
  const [selectedProblem, setSelectedProblem] = useState("Problem-1");
  return (
    <div id="about-father">
      <div id="about-container">
        <h3 className="project-name">Project:Mangy</h3>
        <img id="ourlogo" src={Logo} alt="" />
        <p className="para">
          Welcome to our first group project. this project is about displaying
          all of our front-end skills using react.js and everything we learnt
          this month and a half since we have started our Full-Stack course
        </p>
        <h3 className="small_header">About Us</h3>
        <div id="main-para">
          <strong>Mission Statement:</strong>
          <p>
            At TASK MANGY, our mission is to simplify your life by providing an
            intuitive and efficient platform for managing your tasks, events,
            and schedules. We believe that everyone deserves a tool that
            empowers them to stay organized and make the most of their time.
            Founded in 1984, TASK MANGY was created by a team of passionate
            individuals who shared a common goal: to develop a user-friendly
            application that enhances productivity and time management.
          </p>

          <strong>Our Team:</strong>
          <ul>
            <li>
              <strong>Founder and CEO:</strong> Elazar
            </li>
            <li>
              <strong>Chief Technology Officer (CTO):</strong> Yonatan Ben Ezra
            </li>
            <li>
              <strong>Chief Operations Officer (COO):</strong> Or reuven
            </li>
            <li>
              <strong>Lead Developers:</strong> Dor Bruker and Ori Barda
            </li>
            <li>
              <strong>User Experience (UX) Designer:</strong> ChatGPT and God
            </li>
            <li>
              <strong>Customer Support:</strong> We don't belive in one
            </li>
          </ul>
          <strong>User Base:</strong>
          <p>
            With over 1,000,000 users and counting, TASK MANGY has gained
            popularity among people from all walks of life. Our diverse user
            base includes students, freelancers, entrepreneurs, and corporations
            who trust us to keep them organized.
          </p>

          <strong>Features:</strong>
          <ul>
            <li>
              Task Management: Create, edit, and prioritize tasks effortlessly.
            </li>
            <li>Event Calendar: Keep track of important dates and events.</li>
            <li>
              Customization: Personalize your experience with customizable
              themes.
            </li>
            <li>
              Collaboration: Share tasks and events with colleagues and friends.
            </li>
            <li>
              Mobile Accessibility: Access TASK MANGY on the go with our mobile
              app.
            </li>
          </ul>

          <strong id="join-today"><Link to="/">Join TASK MANGY Today!</Link></strong>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
