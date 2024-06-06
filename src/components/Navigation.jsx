import React from "react";
import "./navigation.css";
import logo from "../images/logo.svg";
import textLogo from "../images/aufgabe-logo-text.svg";
import downArrow from "../images/down-arrow.png";

const Navigation = () => {
  return (
    <div>
      <div className="px-regular fixed top-0 z-10 flex h-20 w-full items-center justify-between bg-slate-200">
        <div className="flex items-center justify-center">
          <img src={logo} alt="main logo" />
          <img src={textLogo} alt="text logo" />
        </div>
        <div>
          <ul className="flex items-center justify-center">
            <li>Home</li>
            <li>
              <div className="flex items-center justify-center">
                <span>Solutions</span>
                <img src={downArrow} alt="text logo" />
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center">
                <span>Resources</span>
                <img src={downArrow} alt="text logo" />
              </div>
            </li>
            <li>About Us</li>
            <li>
              <button className="bg-navBtn hover:bg-btnHover py-p12 px-p20 rounded-lg font-medium text-white transition-all duration-500 ease-in-out">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
