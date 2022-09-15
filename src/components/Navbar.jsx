import React, { useState } from "react";
import { Link } from "react-scroll";
import { useDarkMode } from "../hook/useDarkMode";

import { FaBars, FaFolder } from "react-icons/fa";
import { IoPerson, IoMoon, IoSunny } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { HiCode } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const [colorTheme, setTheme] = useDarkMode();

  return (
    <header className="bg-bglight dark:bg-bgdark w-full z-10 fixed transition duration-300">
      <nav className="container mx-auto py-6 px-5 lg:px-10">
        <div className="flex justify-between items-center">
          {/* 1. Logo */}
          <div className="cursor-pointer text-lightprimary dark:text-darkprimary">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              title="Home - Yusof Paciente"
            >
              <h1 className="font-black text-sm font-arvo">YU</h1>
              <h1 className="font-black text-sm font-arvo">SOF.</h1>
            </Link>
          </div>

          {/* 2. Links */}
          <div className="flex items-center space-x-8">
            <div
              className="hidden md:flex"
              onClick={() => setTheme(colorTheme)}
            >
              {colorTheme === "light" ? (
                <IoSunny className="fill-bgdark bg-darkprimary rounded-full p-1 h-7 w-7 cursor-pointer" />
              ) : (
                <IoMoon className="fill-bglight bg-lightprimary rounded-full p-1 h-7 w-7 cursor-pointer" />
              )}
            </div>

            <ul className="hidden md:flex space-x-8 py-1.5 text-lightprimary dark:text-darkprimary">
              <li className="cursor-pointer">
                <Link
                  className="pb-1 border-transparent border-b-4 hover:border-sky-300 transition ease-in duration-300"
                  to="hero"
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  className="pb-1 border-transparent border-b-4 hover:border-sky-300 transition ease-in duration-300"
                  to="skills"
                  smooth={true}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  className="pb-1 border-transparent border-b-4 hover:border-sky-300 transition ease-in duration-300"
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
                  className="pb-1 border-transparent border-b-4 hover:border-sky-300 transition ease-in duration-300"
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
          <div className="md:hidden text-lightprimary dark:text-darkprimary flex items-center space-x-4">
            <div className="md:hidden" onClick={() => setTheme(colorTheme)}>
              {colorTheme === "light" ? (
                <IoSunny className="fill-bgdark bg-darkprimary rounded-full p-1 h-7 w-7 cursor-pointer" />
              ) : (
                <IoMoon className="fill-bglight bg-lightprimary rounded-full p-1 h-7 w-7 cursor-pointer" />
              )}
            </div>
            <FaBars onClick={handleClick} size={26} />
          </div>

          {/* Mobile links */}
          {/* overlay */}
          {/* is nav true? .. the state is false, so overlay will not show */}
          {nav ? (
            <div
              className="bg-black/10 dark:bg-black/50 w-full h-screen z-10 fixed top-0 left-0"
              onClick={handleClick}
            ></div>
          ) : null}

          {/* side drawer menu */}
          <div
            className={
              nav
                ? "bg-bglight/70 dark:bg-bgdark/40 backdrop-blur-sm w-[250px] duration-300 h-screen z-10 fixed top-0 right-0"
                : "bg-bglight/70 dark:bg-bgdark/40 backdrop-blur-sm w-[250px] duration-300 h-screen z-10 fixed top-0 right-[-100%]"
            }
          >
            <div className="p-4 text-lightprimary dark:text-darkprimary">
              <IoMdClose size={32} onClick={handleClick} />
            </div>

            <nav className="flex flex-col items-center">
              <ul className="p-5 text-lightprimary dark:text-darkprimary">
                <li className="text-xl flex items-center py-4">
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

                <li className="text-xl flex items-center py-4">
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

                <li className="text-xl flex items-center py-4">
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

                <li className="text-xl flex items-center py-4">
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
