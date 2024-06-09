import "./navigation.css";
import logo from "../images/logo2.svg";
import textLogo from "../images/aufgabe-logo-text.svg";

const Navigation = () => {
  const downArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1 h-5 w-5 transition-all duration-200"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <nav className="fixed top-0 z-30 flex h-20 w-full items-center justify-between bg-slate-200 px-regular">
      <div className="flex items-center justify-center">
        <a href="/" className="flex">
          <img src={logo} alt="main logo" />
          <img
            className="ml-1 translate-y-1 transform"
            src={textLogo}
            alt="text logo"
          />
        </a>
      </div>

      <div>
        <ul className="flex items-center justify-center space-x-8">
          <li className="transition-all duration-200 hover:text-btnHover">
            <a href="/">Home</a>
          </li>
          <li className="group relative transition-all duration-200">
            <div className="flex cursor-pointer items-center justify-center group-hover:text-btnHover">
              <span>Solutions</span>
              {downArrow}
            </div>

            <ul className="absolute left-0 hidden w-40 rounded bg-slate-100 shadow-lg group-focus-within:block group-hover:block">
              <li className="whitespace-nowrap rounded border-b px-4 py-2 hover:bg-gray-300">
                <a href="/cloud-services">Cloud Services</a>
              </li>
              <li className="whitespace-nowrap rounded border-b px-4 py-2 hover:bg-gray-300">
                <a href="/cyber-solution">Cybersecurity</a>
              </li>
              <li className="whitespace-nowrap rounded px-4 py-2 hover:bg-gray-300">
                <a href="/it-support">IT Support</a>
              </li>
            </ul>
          </li>
          <li className="group relative transition-all duration-200">
            <div className="flex cursor-pointer items-center justify-center group-hover:text-btnHover">
              <span>Resources</span>
              {downArrow}
            </div>

            <ul className="absolute left-0 hidden w-40 rounded bg-slate-100 shadow-lg group-focus-within:block group-hover:block">
              <li className="border-b px-4 py-2 hover:bg-gray-300">
                <a href="/caseStudies">Case Studies</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-300">
                <a href="/">Blog</a>
              </li>
            </ul>
          </li>
          <li className="transition-all duration-200 hover:text-btnHover">
            <a href="/about">About Us</a>
          </li>
          <li className="transition-all duration-200 hover:text-btnHover">
            <button className="rounded-lg bg-navBtn px-p20 py-p12 font-medium text-white transition-all duration-500 ease-in-out hover:bg-btnHover">
              <a href="/contact">Contact Us</a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
