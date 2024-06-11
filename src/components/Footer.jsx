import logo from "../images/logo.svg";
import textLogo from "../images/aufgabe-logo-text-footer.svg";
import linkedIn from "../images/linkedin.svg";
import facebook from "../images/facebook.svg";
import x from "../images/twitter.svg";

function Footer() {
  return (
    <footer className="bg-footerColor">
      <div className="grid grid-cols-1 border-b-2 bg-footerColor px-[4.5rem] py-12 text-white sm:text-center md:grid-cols-2 md:text-left lg:grid-cols-5">
        <div className="pr-36 sm:mx-auto">
          <div className="flex">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
            <a href="/">
              <img src={textLogo} alt="text logo" />
            </a>
          </div>
          <div className="mt-5 flex">
            <a href="/">
              <img src={linkedIn} alt="instagram logo" />
            </a>
            <a href="/">
              <img className="mx-6" src={facebook} alt="instagram logo" />
            </a>
            <a href="/">
              <img src={x} alt="instagram logo" />
            </a>
          </div>
        </div>
        <div>
          <h1 className="font-semi-bold text-font24">COMPANY</h1>
          <p className="my-3 text-font20">
            <a href="/">Home</a>
          </p>
          <p className="my-3 cursor-pointer text-font20">About Us</p>
        </div>
        <div>
          <h1 className="font-semi-bold text-font24">SOLUTIONS</h1>
          <p className="my-3 text-font20">Cloud Services</p>
          <p className="text-font20">
            <a href="/cyber-solution">CyberSeurity</a>{" "}
          </p>
          <p className="my-3 text-font20">
            <a href="/it-support">IT Support</a>
          </p>
        </div>
        <div>
          <h1 className="font-semi-bold text-font24">RESOURCES</h1>
          <p className="my-3 cursor-pointer text-font20">
            <a href="/caseStudies">Case Studies</a>
          </p>
          <p className="text-font20">Blog</p>
        </div>
        <div>
          <h1 className="font-semi-bold text-font24">CONTACT US</h1>
          <p className="my-3 text-font20">aufgabeservices@gmail.com</p>
          <p className="my-3 text-font20">+234 000 000 000</p>
        </div>
      </div>
      <p className="pb-10 pt-4 text-center text-white md:ml-[4.5rem] md:text-left">
        &copy; 2024 Aufgabe. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
