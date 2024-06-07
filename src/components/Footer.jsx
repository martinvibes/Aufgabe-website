import logo from "../images/logo.svg";
import textLogo from "../images/aufgabe-logo-text-footer.svg";
import linkedIn from "../images/linkedin.svg";
import facebook from "../images/facebook.svg";
import x from "../images/twitter.svg";

function Footer() {
  return (
    <footer className="bg-footerColor">
      <div className="bg-footerColor grid grid-cols-1 border-b-2 px-[4.5rem] py-12 text-white md:grid-cols-2 lg:grid-cols-5">
        <div>
          <div className="flex">
            <img src={logo} alt="logo" />
            <img src={textLogo} alt="text logo" />
          </div>
          <div className="my-4 flex">
            <img src={linkedIn} alt="instagram logo" />
            <img className="mx-6" src={facebook} alt="instagram logo" />
            <img src={x} alt="instagram logo" />
          </div>
        </div>
        <div>
          <h1 className="text-font24 font-semi-bold">COMPANY</h1>
          <p className="text-font20 my-3">Home</p>
          <p className="text-font20 my-3 cursor-pointer">About Us</p>
        </div>
        <div>
          <h1 className="text-font24 font-semi-bold">SOLUTIONS</h1>
          <p className="text-font20 my-3">Cloud Services</p>
          <p className="text-font20">CyberSeurity</p>
          <p className="text-font20 my-3">IT Support</p>
        </div>
        <div>
          <h1 className="text-font24 font-semi-bold">RESOURCES</h1>
          <p className="text-font20 my-3 cursor-pointer">Case Studies</p>
          <p className="text-font20">Blog</p>
        </div>
        <div>
          <h1 className="text-font24 font-semi-bold">CONTACT US</h1>
          <p className="text-font20 my-3">aufgabeservices@gmail.com</p>
          <p className="text-font20 my-3">+234 000 000 000</p>
        </div>
      </div>
      <p className="ml-[4.5rem] pb-10 pt-4 text-white">
        &copy; 2024 Aufgabe. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
