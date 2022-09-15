import React from "react";

const Contact = () => {
  return (
    <section name="contact" className="w-full min-h-screen flex items-center">
      <div className="container mx-auto py-6 px-5 lg:px-10 my-10 lg:my-32">
        <div className="sm:w-3/5">
          <h2 className="text-2xl lg:text-4xl font-bold text-lightprimary dark:text-darkprimary">
            Let's Build Something Together
          </h2>
          <p className="text-lightsecondary dark:text-darksecondary my-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur dicta ex voluptas praesentium, voluptatibus ut ea
            dolorum maiores vitae ipsa distinctio exercitationem nulla, dolorem
            vero pariatur optio nihil laboriosam sint.
          </p>
        </div>

        <div className="flex justify-center">
          <form className="flex flex-col max-w-[600px] w-full">
            <div className="text-center">
              <p className="py-6 text-lightsecondary dark:text-darksecondary">
                Submit the form below or shoot me an email
                <a
                  className="text-lightprimary dark:text-darkprimary ml-2 py-1 font-bold border-transparent border-b-2 hover:border-lightprimary dark:hover:border-darksecondary transition ease-in duration-300"
                  href="/"
                >
                  yusofpaciente29@gmail.com
                </a>
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
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
