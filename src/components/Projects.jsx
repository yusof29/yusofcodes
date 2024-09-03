import { IoIosArrowForward } from "react-icons/io";

import data from "../data";

const Projects = () => {
  return (
    <section name="projects" className="flex min-h-screen w-full items-center">
      <div className="container mx-auto px-5 py-6 lg:px-10">
        <div className="sm:w-3/5">
          <h2 className="text-2xl font-bold tracking-wider text-sky-400 lg:text-4xl">
            Projects
          </h2>
          <p className="my-12 text-lightsecondary dark:text-darksecondary">
            Check out some of the personal projects I have been working on
            lately. For a complete list, visit my
            <a
              className="ml-2 border-b-2 border-transparent py-1 font-bold tracking-wider text-lightprimary transition duration-300 ease-in hover:border-lightprimary dark:text-darkprimary dark:hover:border-darksecondary"
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
        <div className="grid gap-x-32 gap-y-12 md:grid-cols-2">
          {/* card one */}

          {data.map((project) => {
            return (
              <div key={project.id} className="group">
                <a
                  href={project.site}
                  target="_blank"
                  rel="noreferrer noopener"
                  title="Live Site"
                >
                  <img
                    className="mb-7 h-[300px] w-full transform rounded-md object-cover drop-shadow-2xl transition duration-300 ease-out group-hover:scale-105"
                    src={project.img}
                    alt="/"
                  />
                </a>

                <h3 className="py-2 text-xl font-semibold tracking-wider text-lightprimary dark:text-darkprimary lg:text-2xl">
                  {project.title} |
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noreferrer noopener"
                    title="Live Site"
                    className="ml-2 text-lg font-normal text-sky-400 transition duration-300 ease-in hover:text-sky-500"
                  >
                    visit website
                  </a>
                </h3>

                <div className="flex flex-wrap py-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="m-1 rounded-full border border-lightprimary px-3 py-2 text-sm text-lightprimary transition duration-300 ease-in hover:bg-lightprimary hover:text-bglight dark:border-darkprimary dark:text-darkprimary dark:hover:bg-darkprimary dark:hover:text-bgdark"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <p className="max-w-[380px] py-4 text-lightsecondary dark:text-darksecondary">
                  {project.description}
                </p>

                {project.repo && (
                  <div className="flex items-center text-lightprimary dark:text-darkprimary">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      title="Github Repository"
                      className="text-md w-max border-b-2 border-transparent text-[15px] font-medium uppercase tracking-wider transition duration-300 ease-in group-hover:border-lightprimary dark:group-hover:border-darkprimary"
                    >
                      View Repository
                    </a>
                    <IoIosArrowForward className="mb-0.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
