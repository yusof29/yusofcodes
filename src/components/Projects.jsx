import React from "react";

import { IoIosArrowForward } from "react-icons/io";

import data from "../data";

const Projects = () => {
  return (
    <section name="projects" className="w-full min-h-screen flex items-center">
      <div className="container mx-auto py-6 px-5 lg:px-10">
        <div className="sm:w-3/5">
          <h2 className="text-2xl lg:text-4xl font-bold text-lightprimary dark:text-darkprimary">
            What I've been working on
          </h2>
          <p className="text-lightsecondary dark:text-darksecondary my-12">
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
                <h3 className="text-xl lg:text-3xl tracking-wide font-semibold py-2 text-lightprimary dark:text-darkprimary">
                  {project.title}
                </h3>
                <p className="text-lightsecondary dark:text-darksecondary py-4 max-w-[380px]">
                  {project.description}
                </p>
                <div className="flex items-center text-lightprimary dark:text-darkprimary">
                  <a
                    className="text-[15px] tracking-wide uppercase text-md font-medium border-transparent border-b-2 group-hover:border-lightprimary dark:group-hover:border-darkprimary transition ease-in duration-300 w-max"
                    href="/"
                  >
                    View Project
                  </a>
                  <IoIosArrowForward className="mb-0.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
