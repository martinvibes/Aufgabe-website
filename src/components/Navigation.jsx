import "./navigation.css";
import logo from "../images/logo.svg";
import textLogo from "../images/aufgabe-logo-text.svg";
import downArrow from "../images/down-arrow.png";

const Navigation = () => {
  return (
    <div>
      <div className="fixed top-0 z-20 flex h-20 w-full items-center justify-between bg-slate-200 px-regular">
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
              <button className="rounded-lg bg-navBtn px-p20 py-p12 font-medium text-white transition-all duration-500 ease-in-out hover:bg-btnHover">
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
