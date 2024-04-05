import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { BsDownload } from "react-icons/bs";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main name="hero" className="flex min-h-screen w-full items-center">
      <div className="container mx-auto mt-28 grid grid-cols-1 gap-7 px-5 py-6 md:mt-32 lg:px-10 xl:grid-cols-5 2xl:grid-cols-2">
        {/* left */}
        <div className="relative xl:col-span-3 2xl:col-span-1">
          {/* className="max-w-[1240px] m-auto px-5 py-6 relative mt-24 md:mt-32" */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.5 }}
          >
            <ImQuotesLeft className="absolute left-[20px] top-[-30px] h-24 w-24 text-gray-400 dark:text-gray-800 md:left-[20px] md:top-[-60px] md:h-36 md:w-36" />
          </motion.div>

          {/* name div */}
          <div className="text-lightprimary dark:text-darkprimary md:mb-10 md:ml-10">
            <motion.h1
              className="py-2 text-3xl font-semibold tracking-wider md:text-6xl"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 1.5 }}
            >
              Hi there, I'm Yusof.
            </motion.h1>

            <motion.h1
              className="py-2 text-3xl font-semibold tracking-wider md:text-6xl"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5 }}
            >
              {/* Software <span className="text-sky-400">Engineer</span> */}
            </motion.h1>
          </div>

          {/* socials div */}
          <motion.div
            className="mt-2 flex w-full items-center gap-8 text-2xl text-lightsecondary dark:text-darksecondary"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="hidden w-1/3 border-b-2 border-lightsecondary dark:border-darksecondary sm:block sm:w-1/6"></div>
            <a
              className="transform transition duration-300 ease-in hover:scale-105 hover:text-[#0072b1] hover:drop-shadow-2xl"
              href="https://www.linkedin.com/in/yusofpaciente"
              target="_blank"
              rel="noreferrer noopener"
              title="Linkedin Account"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              className="transform transition duration-300 ease-in hover:scale-105 hover:text-[#171515] hover:drop-shadow-2xl dark:hover:text-gray-500"
              href="https://github.com/yusof29"
              target="_blank"
              rel="noreferrer noopener"
              title="Github Repository"
            >
              <FaGithub size={28} />
            </a>
            <a
              className="transform transition duration-300 ease-in hover:scale-105 hover:text-[#4267B2] hover:drop-shadow-2xl"
              href="https://www.facebook.com/noeyeat"
              target="_blank"
              rel="noreferrer noopener"
              title="Facebook - Yusof Paciente"
            >
              <FaFacebook size={28} />
            </a>
            {/* <a
            className="flex items-center justify-center gap-2 rounded-full bg-lightsecondary px-4 py-2 text-base text-bglight transition duration-300 ease-in hover:bg-sky-400 dark:bg-bglight dark:text-bgdark dark:hover:bg-sky-400"
            href="https://drive.google.com/file/d/1xWdhwsbL6-WXtxEcG_N5oiR9dGO6ysZB/view?usp=share_link"
            target="_blank"
            rel="noreferrer noopener"
            title="Download Resume - Yusof Paciente"
          >
            Resume
            <BsDownload size={17} />
          </a> */}
          </motion.div>
        </div>

        {/* right */}
        <div className="xl:col-span-2 2xl:col-span-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1.5 }}
            className="flex h-full w-full flex-col items-center justify-center gap-6"
          >
            {/* <p className="text-lightsecondary dark:text-darksecondary">
                A dedicated and hard-working person seeking to obtain a career
                in front-end web development. Through my studies, I've gained a
                solid understanding of web development concepts and have
                dedicated a lot of my free time to apply these concepts to
                real-world scenarios and applications.
              </p>

              <p className="text-lightsecondary dark:text-darksecondary">
                I'm more front end focused and love building stuff on the web. I
                am currently improving my skills and passionate about clean,
                minimal design that is easy to access and use. I use React to
                build the web application interfaces and the functionalities.
              </p>

              <p className="text-lightsecondary dark:text-darksecondary">
                I am excited at the prospect of working alongside other
                excellent developers in a respected company that offers
                opportunities for career growth and taking my knowledge and
                skills to the next level. I guarantee enthusiasm in work and
                fulfilling my projects with inexpressible efforts.
              </p> */}

            <p className="text-lightsecondary dark:text-darksecondary">
              I'm more front end focused and love building stuff on the web. I
              am currently improving my skills and passionate about clean,
              minimal design that is easy to access and use. I use React to
              build the web application interfaces and the functionalities.
            </p>

            <p className="text-lightsecondary dark:text-darksecondary">
              I am currently employed as a web developer in a company where I
              collaborate extensively across multiple departments, including
              Business Development, Operations, Marketing, and our esteemed Tech
              Team. My role involves actively contributing to the design and
              implementation of innovative ideas, brainstorming creative
              solutions, and translating them into functional, user-friendly
              websites.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
