import React from "react";

import { AiOutlineArrowDown } from "react-icons/ai";

const Contact = () => {
  return (
    <section name="contact" className="w-full min-h-screen flex items-center">
      <div className="container mx-auto py-6 px-5 lg:px-10 my-10 lg:my-32">
        <div className="sm:w-3/5">
          <h2 className="text-2xl lg:text-4xl font-bold text-sky-400 tracking-wider">
            Let's Build Something Together
          </h2>
          <p className="text-lightsecondary dark:text-darksecondary my-12 flex">
            Currently, I am looking for an entry level position as a Front-End
            Web Developer. Feel free to reach me out.
            <AiOutlineArrowDown className="ml-3 w-6 h-6 text-bglight bg-lightsecondary dark:bg-darksecondary dark:text-bgdark rounded-full animate-bounce hidden 2xl:block" />
          </p>
        </div>

        <div className="flex justify-center">
          <form
            method="POST"
            action="https://getform.io/f/c7cf47dc-ae70-4826-b242-8fc767dd6944"
            className="flex flex-col max-w-[600px] w-full"
          >
            <div className="text-center py-6 space-y-2">
              <p className="text-lightsecondary dark:text-darksecondary">
                Submit the form below or email me at
                <a
                  className="text-lightprimary dark:text-darkprimary ml-2 py-1 font-bold tracking-wider border-transparent border-b-2 hover:border-lightprimary dark:hover:border-darksecondary transition ease-in duration-300"
                  href="mailto:yusofpaciente29@gmail.com"
                  title="Gmail Account"
                >
                  yusofpaciente29@gmail.com
                </a>
              </p>
              <p className="text-lightsecondary dark:text-darksecondary">
                I'll get back to you as soon as possible
              </p>
            </div>

            <input
              className="bg-[#ccd6f6] p-3 px-5 rounded-md focus:outline-none focus:ring focus:border-sky-300"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="bg-[#ccd6f6] p-3 my-4 px-5 rounded-md focus:outline-none focus:ring focus:border-sky-300"
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="bg-[#ccd6f6] p-3 px-5 rounded-md focus:outline-none focus:ring focus:border-sky-300"
              rows="10"
              placeholder="Message"
              name="message"
            ></textarea>
            <button className="bg-sky-400 text-white rounded-lg border-2 px-4 py-3 my-4 mx-auto hover:bg-sky-500 hover:border-sky-400 transition ease-in duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
