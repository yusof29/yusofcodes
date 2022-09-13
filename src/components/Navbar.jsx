import React from "react";

import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-[64px] w-full bg-bgcolor z-10 fixed">
      <div className="h-full max-w-[1240px] mx-auto px-5 flex justify-between items-center">
        <div>
          <a href="/" title="Home - Yusof Paciente">
            <h1 className="font-black text-sm font-arvo text-primary">YU</h1>
            <h1 className="font-black text-sm font-arvo text-primary">SOF.</h1>
          </a>
        </div>

        <div>
          <ul className="hidden md:flex space-x-8">
            <li className="py-4">About</li>
            <li className="py-4">Skills</li>
            <li className="py-4">Projects</li>
            <li className="py-4">Contact</li>
          </ul>
        </div>

        <div className="md:hidden">
          <FaBars size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
