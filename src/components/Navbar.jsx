import React from "react";
import { Link } from "react-scroll";

import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-bgcolor h-[64px] w-full z-10 fixed">
      <nav className="container mx-auto h-full px-5 lg:px-10 flex justify-between items-center">
        {/* 1. Logo */}
        <div className="cursor-pointer">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            title="Home - Yusof Paciente"
          >
            <h1 className="font-black text-sm font-arvo text-primary">YU</h1>
            <h1 className="font-black text-sm font-arvo text-primary">SOF.</h1>
          </Link>
        </div>

        {/* 2. Links */}
        <div>
          <ul className="hidden md:flex space-x-8">
            <li className="py-4 cursor-pointer">
              <Link
                className="py-1 border-transparent border-b-4 hover:border-sky-300 transition ease-in duration-300"
                to="hero"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="py-4 cursor-pointer">
              <Link
                className="py-1 border-transparent border-b-4 hover:border-sky-300 transition ease-in duration-300"
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="py-4 cursor-pointer">
              <Link
                className="py-1 border-transparent border-b-4 hover:border-sky-300 transition ease-in duration-300"
                to="projects"
                smooth={true}
                duration={500}
                offset={-100}
              >
                Projects
              </Link>
            </li>
            <li className="py-4 cursor-pointer">
              <Link
                className="py-1 border-transparent border-b-4 hover:border-sky-300 transition ease-in duration-300"
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <FaBars size={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
