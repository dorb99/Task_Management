import React from "react";
import "./Footer.css"
import FB from "../img/FB.png";
import Ins from "../img/Ins.png";
import Tw from "../img/Tw.png";
import GH from "../img/GH.png";
export default function Footer() {
  return (
    <>
      <div id="footer">
        <h5 id="all-rights">&#169;All rights reserved to Task Mangy</h5>
        <div id="us">
        <h5>Follow Us</h5>
        <p id="go-here">
          <p>
            <img className="go-here-picture" src={Ins} alt="" />
          </p>
          <p>
            <img className="go-here-picture" src={Tw} alt="" />
          </p>
          <p>
            <img className="go-here-picture" src={FB} alt="" />
          </p>
          <p>
            <img className="go-here-picture" src={GH} alt="" />
          </p>
          <p>
            <img className="go-here-picture" src={GH} alt="" />
          </p>
        </p>
      </div>
      </div>
    </>
  );
};
