import React from "react";
import{FaFacebookF,FaTwitter, FaPinterest, FaInstagram} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer(){
return (
  <div className="footer">
    <div className="container">
      <div className="footerSection">
        <div className="row justifyConter">
          <div className="footer-content">
            <div className="footer-section-logo">
              <img src="./image/footer-logo.png" alt="" />
            </div>
            <ul className="footerCircles">
              <li>
                <a href="https://www.facebook.com/shriraj.chavan.56?mibextid=ZbWKwL">
                  <FaFacebookF className="FooterIcon" />
                </a>
              </li>
              <li>
                <FaTwitter className="" />
              </li>
              <li>
                <FaPinterest className="" />
              </li>
              <li>
                <a href="https://instagram.com/shrirajch?igshid=ZDdkNTZiNTM=">
                  <FaInstagram className="" />
                </a>
              </li>
            </ul>
            <div className="foot">
              <ul>
                <li>
                  <NavLink to="Shareinfo">Sharing of information</NavLink>
                </li>
                <li>
                  <NavLink to="Privacy">Privacy</NavLink>
                </li>
                <li>
                  <NavLink to="Cookie">Cookie</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Footer;