import React from "react";
import darkLogo from "../assets/darkLogo.png";
import lightLogo from "../assets/lightLogo.png";

import { Link } from "react-scroll";

const Footer = ({ colorTheme }) => {
  return (
    <footer className="w-full">
      <div className="container mx-auto py-6 px-5 lg:px-10">
        <div className="flex items-center justify-center md:justify-between">
          {/* logo */}
          <div className="cursor-pointer hidden md:block">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              title="Home - Yusof Paciente"
            >
              {colorTheme === "light" ? (
                <img src={darkLogo} alt="/" className="w-10 h-10" />
              ) : (
                <img src={lightLogo} alt="/" className="w-10 h-10" />
              )}
            </Link>
          </div>

          {/* socials */}
          <div className="flex space-x-8 text-sm text-secondary text-lightprimary dark:text-darkprimary">
            <a
              className="hover:text-[#0072b1] hover:drop-shadow-xl"
              href="https://www.linkedin.com/in/yusofpaciente"
              target="_blank"
              rel="noreferrer noopener"
              title="Linkedin Account"
            >
              linkedin
            </a>
            <a
              className="hover:text-[#171515] dark:hover:text-gray-500 hover:drop-shadow-xl"
              href="https://github.com/yusof29"
              target="_blank"
              rel="noreferrer noopener"
              title="Github Repository"
            >
              github
            </a>
            <a
              className="hover:text-[#4267B2] hover:drop-shadow-xl"
              href="https://www.facebook.com/noeyeat"
              target="_blank"
              rel="noreferrer noopener"
              title="Facebook - Yusof Paciente"
            >
              facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
