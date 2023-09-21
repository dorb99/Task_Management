import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { UserContext } from "./Context";

function NavBar() {
  const { user } = useContext(UserContext);

  return (
    <header className="header">
      <Link to="/" className="logo">
        Logo
      </Link>

      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>

      <nav className="navbar">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/myprofile" className="nav-item">
        Profile
        </Link>
        <Link to="/contactus" className="nav-item">
          Contact
        </Link>
        <Link to="/QAPage" className="nav-item">
        QA
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
