import React from "react";

import { BsCircle } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="w-full min-h-screen flex items-center">
      <div className="max-w-[1240px] m-auto px-5 py-6">
        <div className="sm:w-3/5">
          <h2 className="text-4xl font-bold text-primary">My Skills</h2>
          <p className="text-secondary my-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur dicta ex voluptas praesentium, voluptatibus ut ea
            dolorum maiores vitae ipsa distinctio exercitationem nulla, dolorem
            vero pariatur optio nihil laboriosam sint.
          </p>
        </div>

        <div className="text-primary font-semibold">
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            <li className="flex items-center py-2 tracking-wide">
              <BsCircle className="mr-2 w-3 text-sky-300" />
              Javascript ES6
            </li>
            <li className="flex items-center py-2 tracking-wide">
              <BsCircle className="mr-2 w-3 text-sky-300" />
              REACT
            </li>
            <li className="flex items-center py-2 tracking-wide">
              <BsCircle className="mr-2 w-3 text-sky-300" />
              HTML & CSS
            </li>
            <li className="flex items-center py-2 tracking-wide">
              <BsCircle className="mr-2 w-3 text-sky-300" />
              Tailwind CSS
            </li>
            <li className="flex items-center py-2 tracking-wide">
              <BsCircle className="mr-2 w-3 text-sky-300" />
              Git
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
