import React from "react";

import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main name="hero" className="w-full min-h-screen flex items-center">
      <div className="container mx-auto px-5 py-6 lg:px-10 relative mt-24 md:mt-32">
        {/* className="max-w-[1240px] m-auto px-5 py-6 relative mt-24 md:mt-32" */}
        <motion.areadiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.5 }}
        >
          <ImQuotesLeft
            className="text-gray-100 absolute
        left-[20px] top-[-30px] w-24 h-24
        md:left-[20px] md:top-[-60px] md:w-36 md:h-36"
          />
        </motion.areadiv>

        {/* name div */}
        <div className="text-primary md:ml-10 md:mb-10">
          <motion.h1
            className="text-3xl md:text-7xl font-semibold py-2"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 1.5 }}
          >
            Hi there, I'm Yusof.
          </motion.h1>

          <motion.h1
            className="text-3xl md:text-7xl font-semibold py-2"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Front End <span className="text-sky-300">Developer</span>
          </motion.h1>
        </div>

        {/* socials div */}
        <motion.div
          className="text-secondary text-2xl flex items-center space-x-8 mt-2 w-full"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="border-b-2 border-secondary w-1/3 sm:w-1/6"></div>
          <a
            className="hover:text-[#0072b1] hover:drop-shadow-2xl transition ease-in duration-300 transform hover:scale-105"
            href="https://www.linkedin.com/in/yusofpaciente"
            title="Linkedin Account"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            className="hover:text-[#171515] hover:drop-shadow-2xl transition ease-in duration-300 transform hover:scale-105"
            href="https://github.com/yusof29"
            title="Github Repository"
          >
            <FaGithub size={28} />
          </a>
          <a
            className="hover:text-[#4267B2] hover:drop-shadow-2xl transition ease-in duration-300 transform hover:scale-105"
            href="https://www.facebook.com/noeyeat"
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
          className="grid md:grid-cols-2 gap-x-36 gap-y-6 md:gap-y-12 mt-6"
        >
          <p className="text-secondary font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic iste
            placeat incidunt praesentium, sapiente eius perferendis saepe ipsum
            illo vel.
          </p>

          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic iste
            placeat incidunt praesentium, sapiente eius perferendis saepe ipsum
            illo vel.
          </p>

          <p className="text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic iste
            placeat incidunt praesentium, sapiente eius perferendis saepe ipsum
            illo vel.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
