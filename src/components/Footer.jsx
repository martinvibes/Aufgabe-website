import logo from "../images/logo.svg";
import textLogo from "../images/aufgabe-logo-text-footer.svg";
import linkedIn from "../images/linkedin.svg";
import facebook from "../images/facebook.svg";
import x from "../images/twitter.svg";

function Footer() {
  return (
    <footer className="bg-footerColor">
      <div className="grid grid-cols-1 border-b-2 bg-footerColor px-[4.5rem] py-12 text-white sm:text-center md:grid-cols-2 lg:grid-cols-5">
        <div className="sm:mx-auto">
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
          <h1 className="font-semi-bold text-font24">COMPANY</h1>
          <p className="my-3 text-font20">Home</p>
          <p className="my-3 cursor-pointer text-font20">About Us</p>
        </div>
        <div>
          <h1 className="font-semi-bold text-font24">SOLUTIONS</h1>
          <p className="my-3 text-font20">Cloud Services</p>
          <p className="text-font20">CyberSeurity</p>
          <p className="my-3 text-font20">IT Support</p>
        </div>
        <div>
          <h1 className="font-semi-bold text-font24">RESOURCES</h1>
          <p className="my-3 cursor-pointer text-font20">Case Studies</p>
          <p className="text-font20">Blog</p>
        </div>
        <div>
          <h1 className="font-semi-bold text-font24">CONTACT US</h1>
          <p className="my-3 text-font20">aufgabeservices@gmail.com</p>
          <p className="my-3 text-font20">+234 000 000 000</p>
        </div>
      </div>
      <p className="ml-[4.5rem] pb-10 pt-4 text-white">
        &copy; 2024 Aufgabe. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
