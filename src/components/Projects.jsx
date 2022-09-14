import React from "react";

import { IoIosArrowForward } from "react-icons/io";

import data from "../data";

const Projects = () => {
  return (
    <div name="projects" className="w-full min-h-screen">
      <div className="container mx-auto px-5 py-6 lg:px-10">
        <div className="sm:w-3/5">
          <h2 className="text-2xl lg:text-4xl font-bold text-primary">
            What I've been working on
          </h2>
          <p className="text-secondary my-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur dicta ex voluptas praesentium, voluptatibus ut ea
            dolorum maiores vitae ipsa distinctio exercitationem nulla, dolorem
            vero pariatur optio nihil laboriosam sint.
          </p>
        </div>

        {/* grid container */}
        <div className="grid md:grid-cols-2 gap-x-32 gap-y-12">
          {/* card one */}

          {data.map((project, index) => {
            return (
              <div key={index} className="group">
                <img
                  className="rounded-md mb-7 h-[300px] w-full object-cover transform group-hover:scale-105 transition ease-out duration-300"
                  src={project.img}
                  alt="/"
                />
                <h3 className="text-xl lg:text-3xl tracking-wide font-semibold text-primary py-2">
                  {project.title}
                </h3>
                <p className="text-secondary py-4 max-w-[380px]">
                  {project.description}
                </p>
                <div className="flex flex-row items-center">
                  <a
                    className="text-[15px] tracking-wide uppercase text-md text-primary font-medium border-transparent border-b-2 group-hover:border-primary transition ease-in duration-300 w-max"
                    href="/"
                  >
                    View Project
                  </a>
                  <IoIosArrowForward />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
