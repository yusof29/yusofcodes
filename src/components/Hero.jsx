import React from "react";

import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main name="hero" className="w-full min-h-screen flex items-center">
      <div className="container mx-auto py-6 px-5 lg:px-10 relative mt-28 md:mt-32">
        {/* className="max-w-[1240px] m-auto px-5 py-6 relative mt-24 md:mt-32" */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.5 }}
        >
          <ImQuotesLeft
            className="text-gray-400 dark:text-gray-800 absolute
        left-[20px] top-[-30px] w-24 h-24
        md:left-[20px] md:top-[-60px] md:w-36 md:h-36"
          />
        </motion.div>

        {/* name div */}
        <div className="text-lightprimary dark:text-darkprimary md:ml-10 md:mb-10">
          <motion.h1
            className="text-3xl md:text-7xl font-semibold py-2 tracking-wider"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 1.5 }}
          >
            Hi there, I'm Yusof.
          </motion.h1>

          <motion.h1
            className="text-3xl md:text-7xl font-semibold py-2 tracking-wider"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Front End <span className="text-sky-400">Developer</span>
          </motion.h1>
        </div>

        {/* socials div */}
        <motion.div
          className="text-lightsecondary dark:text-darksecondary text-2xl flex items-center space-x-8 mt-2 w-full"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="border-b-2 border-lightsecondary dark:border-darksecondary w-1/3 sm:w-1/6"></div>
          <a
            className="hover:text-[#0072b1] hover:drop-shadow-2xl transition ease-in duration-300 transform hover:scale-105"
            href="https://www.linkedin.com/in/yusofpaciente"
            target="_blank"
            rel="noreferrer noopener"
            title="Linkedin Account"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            className="hover:text-[#171515] dark:hover:text-gray-500 hover:drop-shadow-2xl transition ease-in duration-300 transform hover:scale-105"
            href="https://github.com/yusof29"
            target="_blank"
            rel="noreferrer noopener"
            title="Github Repository"
          >
            <FaGithub size={28} />
          </a>
          <a
            className="hover:text-[#4267B2] hover:drop-shadow-2xl transition ease-in duration-300 transform hover:scale-105"
            href="https://www.facebook.com/noeyeat"
            target="_blank"
            rel="noreferrer noopener"
            title="Facebook - Yusof Paciente"
          >
            <FaFacebook size={28} />
          </a>
        </motion.div>

        {/* about div */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="grid md:grid-cols-2 gap-x-36 gap-y-6 md:gap-y-12 mt-8"
        >
          <p className="text-lightsecondary dark:text-darksecondary">
            A dedicated and hard-working person seeking to obtain a career in
            front-end web development. Through my studies, I've gained a solid
            understanding of web development concepts and have dedicated a lot
            of my free time to apply these concepts to real-world scenarios and
            applications.
          </p>

          <p className="text-lightsecondary dark:text-darksecondary">
            I'm more front end focused and love building stuff on the web. I am
            currently improving my skills and passionate about clean, minimal
            design that is easy to access and use. I use React to build the web
            application interfaces and the functionalities.
          </p>

          <p className="text-lightsecondary dark:text-darksecondary">
            I am excited at the prospect of working alongside other excellent
            developers in a respected company that offers opportunities for
            career growth and taking my knowledge and skills to the next level.
            I guarantee enthusiasm in work and fulfilling my projects with
            inexpressible efforts.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
