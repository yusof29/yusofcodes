import React from "react";

import { AiOutlineArrowDown } from "react-icons/ai";

const Contact = () => {
  return (
    <section name="contact" className="flex min-h-screen w-full items-center">
      <div className="container mx-auto my-10 px-5 py-6 lg:my-32 lg:px-10">
        <div className="sm:w-3/5">
          <h2 className="text-2xl font-bold tracking-wider text-sky-400 lg:text-4xl">
            Let's Build Something Together
          </h2>
          <p className="my-12 flex text-lightsecondary dark:text-darksecondary">
            {/* Currently, I am looking for an entry level position as a Front-End
            Web Developer. Feel free to reach me out. */}
            Feel free to reach me out.
            <AiOutlineArrowDown className="ml-3 hidden h-6 w-6 animate-bounce rounded-full bg-lightsecondary text-bglight dark:bg-darksecondary dark:text-bgdark 2xl:block" />
          </p>
        </div>

        <div className="flex justify-center">
          <form
            method="POST"
            action="https://getform.io/f/c7cf47dc-ae70-4826-b242-8fc767dd6944"
            className="flex w-full max-w-[600px] flex-col"
          >
            <div className="space-y-2 py-6 text-center">
              <p className="text-lightsecondary dark:text-darksecondary">
                Submit the form below or email me at
                <a
                  className="ml-2 border-b-2 border-transparent py-1 font-bold tracking-wider text-lightprimary transition duration-300 ease-in hover:border-lightprimary dark:text-darkprimary dark:hover:border-darksecondary"
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
              className="rounded-md bg-[#ccd6f6] p-3 px-5 focus:border-sky-300 focus:outline-none focus:ring"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="my-4 rounded-md bg-[#ccd6f6] p-3 px-5 focus:border-sky-300 focus:outline-none focus:ring"
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="rounded-md bg-[#ccd6f6] p-3 px-5 focus:border-sky-300 focus:outline-none focus:ring"
              rows="10"
              placeholder="Message"
              name="message"
            ></textarea>
            <button className="mx-auto my-4 rounded-lg border-2 bg-sky-400 px-4 py-3 text-white transition duration-300 ease-in hover:border-sky-400 hover:bg-sky-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
