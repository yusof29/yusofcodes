import { useState } from "react";
import { Link } from "react-scroll";
import darkLogo from "../assets/darkLogo.png";
import lightLogo from "../assets/lightLogo.png";

import { FaBars, FaFolder } from "react-icons/fa";
import { IoPerson, IoMoon, IoSunny } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { HiCode } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

const Navbar = ({ colorTheme, setTheme }) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <header className="fixed z-10 w-full bg-bglight transition duration-300 dark:bg-bgdark">
      <nav className="container mx-auto px-5 py-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* 1. Logo */}
          <div className="cursor-pointer">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              title="Home - Yusof Paciente"
            >
              {colorTheme === "light" ? (
                <img src={darkLogo} alt="/" className="h-10 w-10" />
              ) : (
                <img src={lightLogo} alt="/" className="h-10 w-10" />
              )}
            </Link>
          </div>

          {/* 2. Links */}
          <div className="flex items-center space-x-8">
            <div
              className="hidden md:flex"
              onClick={() => setTheme(colorTheme)}
            >
              {colorTheme === "light" ? (
                <IoSunny className="h-7 w-7 cursor-pointer rounded-full bg-darkprimary fill-bgdark p-1" />
              ) : (
                <IoMoon className="h-7 w-7 cursor-pointer rounded-full bg-lightprimary fill-bglight p-1" />
              )}
            </div>

            <ul className="hidden space-x-8 py-1.5 text-lightprimary dark:text-darkprimary md:flex">
              <li className="cursor-pointer">
                <Link
                  className="border-b-4 border-transparent pb-1 transition duration-300 ease-in hover:border-sky-300"
                  to="hero"
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  className="border-b-4 border-transparent pb-1 transition duration-300 ease-in hover:border-sky-300"
                  to="skills"
                  smooth={true}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  className="border-b-4 border-transparent pb-1 transition duration-300 ease-in hover:border-sky-300"
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  Projects
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  className="border-b-4 border-transparent pb-1 transition duration-300 ease-in hover:border-sky-300"
                  to="contact"
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hamburger */}
          {/* the default state is false, if clicked it will set the state from false to true */}
          {/* !nav (true) means opposite of nav (false) */}
          <div className="flex items-center space-x-4 text-lightprimary dark:text-darkprimary md:hidden">
            <div className="md:hidden" onClick={() => setTheme(colorTheme)}>
              {colorTheme === "light" ? (
                <IoSunny className="h-7 w-7 cursor-pointer rounded-full bg-darkprimary fill-bgdark p-1" />
              ) : (
                <IoMoon className="h-7 w-7 cursor-pointer rounded-full bg-lightprimary fill-bglight p-1" />
              )}
            </div>
            <FaBars onClick={handleClick} size={26} />
          </div>

          {/* Mobile links */}
          {/* overlay */}
          {/* is nav true? .. the state is false, so overlay will not show */}
          {nav ? (
            <div
              className="fixed left-0 top-0 z-10 h-screen w-full bg-black/10 dark:bg-black/50"
              onClick={handleClick}
            ></div>
          ) : null}

          {/* side drawer menu */}
          <div
            className={
              nav
                ? "fixed right-0 top-0 z-10 h-screen w-[250px] bg-bglight/70 backdrop-blur-sm duration-300 dark:bg-bgdark/40"
                : "fixed right-[-100%] top-0 z-10 h-screen w-[250px] bg-bglight/70 backdrop-blur-sm duration-300 dark:bg-bgdark/40"
            }
          >
            <div className="p-4 text-lightprimary dark:text-darkprimary">
              <IoMdClose size={32} onClick={handleClick} />
            </div>

            <nav className="flex flex-col items-center">
              <ul className="p-5 text-lightprimary dark:text-darkprimary">
                <li className="flex items-center py-4 text-xl">
                  <Link
                    className="flex flex-row items-center"
                    onClick={handleClick}
                    to="hero"
                    smooth={true}
                    duration={500}
                  >
                    <IoPerson className="mr-4" size={25} />
                    About
                  </Link>
                </li>

                <li className="flex items-center py-4 text-xl">
                  <Link
                    className="flex flex-row items-center"
                    onClick={handleClick}
                    to="skills"
                    smooth={true}
                    duration={500}
                    offset={-60}
                  >
                    <HiCode className="mr-4" size={25} />
                    Skills
                  </Link>
                </li>

                <li className="flex items-center py-4 text-xl">
                  <Link
                    className="flex flex-row items-center"
                    onClick={handleClick}
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-90}
                  >
                    <FaFolder className="mr-4" size={25} />
                    Projects
                  </Link>
                </li>

                <li className="flex items-center py-4 text-xl">
                  <Link
                    className="flex flex-row items-center"
                    onClick={handleClick}
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-50}
                  >
                    <MdEmail className="mr-4" size={25} />
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
