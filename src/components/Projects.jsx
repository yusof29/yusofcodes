import React from "react";

import { IoIosArrowForward } from "react-icons/io";

import data from "../data";

const Projects = () => {
  return (
    <section name="projects" className="w-full min-h-screen flex items-center">
      <div className="container mx-auto py-6 px-5 lg:px-10">
        <div className="sm:w-3/5">
          <h2 className="text-2xl lg:text-4xl font-bold text-sky-400 tracking-wider">
            Projects
          </h2>
          <p className="text-lightsecondary dark:text-darksecondary my-12">
            Check out some of the personal projects I have been working on
            lately. For a complete list, visit my
            <a
              className="text-lightprimary dark:text-darkprimary ml-2 py-1 font-bold tracking-wider border-transparent border-b-2 hover:border-lightprimary dark:hover:border-darksecondary transition ease-in duration-300"
              href="https://github.com/yusof29"
              target="_blank"
              rel="noreferrer noopener"
              title="Github Repository"
            >
              Github profile.
            </a>
          </p>
        </div>

        {/* grid container */}
        <div className="grid md:grid-cols-2 gap-x-32 gap-y-12">
          {/* card one */}

          {data.map((project) => {
            return (
              <div key={project.id} className="group">
                <img
                  className="rounded-md mb-7 h-[300px] w-full object-cover transform group-hover:scale-105 transition ease-out duration-300 drop-shadow-2xl"
                  src={project.img}
                  alt="/"
                />
                <h3 className="text-xl lg:text-2xl tracking-wider font-semibold py-2 text-lightprimary dark:text-darkprimary">
                  {project.title} |
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Live Site"
                    className="ml-2 font-normal text-lg text-sky-400 hover:text-sky-500 transition ease-in duration-300"
                  >
                    Live Site
                  </a>
                </h3>
                <div className="py-2 flex flex-wrap">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="m-1 border rounded-full py-2 px-3 text-sm border-lightprimary text-lightprimary hover:text-bglight hover:bg-lightprimary dark:border-darkprimary dark:text-darkprimary dark:hover:text-bgdark dark:hover:bg-darkprimary transition ease-in duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-lightsecondary dark:text-darksecondary py-4 max-w-[380px]">
                  {project.description}
                </p>
                <div className="flex items-center text-lightprimary dark:text-darkprimary">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Github Repository"
                    className="text-[15px] tracking-wider uppercase text-md font-medium border-transparent border-b-2 group-hover:border-lightprimary dark:group-hover:border-darkprimary transition ease-in duration-300 w-max"
                  >
                    View Repository
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
