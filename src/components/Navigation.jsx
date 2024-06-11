import { useState } from "react";
import "./navigation.css";
import logo from "../images/logo2.svg";
import textLogo from "../images/aufgabe-logo-text.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="fixed top-0 z-30 mb-3 w-full bg-slate-200 px-8 md:px-regular">
      <div className="flex h-20 items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex">
            <img src={logo} alt="main logo" />
            <img
              className="ml-1 translate-y-1 transform"
              src={textLogo}
              alt="text logo"
            />
          </a>
        </div>

        <div className="lg:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <ul
          className={`hidden items-center justify-center lg:flex lg:space-x-8 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="transition-all duration-200 hover:text-btnHover">
            <a href="/">Home</a>
          </li>
          <li className="group relative transition-all duration-200">
            <div className="flex cursor-pointer items-center group-hover:text-btnHover">
              <span>Solutions</span>
              {downArrow}
            </div>
            <ul className="absolute left-0 hidden w-40 rounded bg-slate-100 shadow-lg group-hover:block">
              <li className="whitespace-nowrap border-b px-4 py-2 hover:bg-gray-300">
                <a href="/cloud-services">Cloud Services</a>
              </li>
              <li className="border-b px-4 py-2 hover:bg-gray-300">
                <a href="/cyber-solution">Cybersecurity</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-300">
                <a href="/it-support">IT Support</a>
              </li>
            </ul>
          </li>
          <li className="group relative transition-all duration-200">
            <div className="flex cursor-pointer items-center group-hover:text-btnHover">
              <span>Resources</span>
              {downArrow}
            </div>
            <ul className="absolute left-0 hidden w-40 rounded bg-slate-100 shadow-lg group-hover:block">
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
            <button className="whitespace-nowrap rounded-lg bg-navBtn px-4 py-2 font-medium text-white transition-all duration-500 ease-in-out hover:bg-btnHover">
              <a href="/contact">Contact Us</a>
            </button>
          </li>
        </ul>
      </div>
      {isOpen && (
        <ul className="block lg:hidden">
          <li className="px-4 py-2 transition-all duration-200 hover:text-btnHover">
            <a href="/">Home</a>
          </li>
          <li className="group relative px-4 py-2 transition-all duration-200">
            <div className="flex cursor-pointer items-center group-hover:text-btnHover">
              <span>Solutions</span>
              {downArrow}
            </div>
            <ul className="mt-2 space-y-2 rounded bg-slate-100 shadow-lg">
              <li className="border-b px-4 py-2 hover:bg-gray-300">
                <a href="/cloud-services">Cloud Services</a>
              </li>
              <li className="border-b px-4 py-2 hover:bg-gray-300">
                <a href="/cyber-solution">Cybersecurity</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-300">
                <a href="/it-support">IT Support</a>
              </li>
            </ul>
          </li>
          <li className="group relative px-4 py-2 transition-all duration-200">
            <div className="flex cursor-pointer items-center group-hover:text-btnHover">
              <span>Resources</span>
              {downArrow}
            </div>
            <ul className="mt-2 space-y-2 rounded bg-slate-100 shadow-lg">
              <li className="border-b px-4 py-2 hover:bg-gray-300">
                <a href="/caseStudies">Case Studies</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-300">
                <a href="/">Blog</a>
              </li>
            </ul>
          </li>
          <li className="px-4 py-2 transition-all duration-200 hover:text-btnHover">
            <a href="/about">About Us</a>
          </li>
          <li className="px-4 pb-8 pt-5 transition-all duration-200 hover:text-btnHover">
            <a
              href="/contact"
              className="my-5 whitespace-nowrap rounded-lg bg-navBtn px-4 py-2 font-medium text-white transition-all duration-500 ease-in-out hover:bg-btnHover"
            >
              Contact Us
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
