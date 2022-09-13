import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-[1240px] m-auto px-5 pt-28 pb-20">
        <div className="sm:w-3/5">
          <h2 className="text-4xl font-bold text-primary">
            Let's Build Something Together
          </h2>
          <p className="text-secondary my-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur dicta ex voluptas praesentium, voluptatibus ut ea
            dolorum maiores vitae ipsa distinctio exercitationem nulla, dolorem
            vero pariatur optio nihil laboriosam sint.
          </p>
        </div>

        <div className="flex justify-center mt-3">
          <form className="flex flex-col max-w-[600px] w-full">
            <div className="text-center">
              <p className="py-6 text-secondary">
                Submit the form below or shoot me an email
                <a
                  className="text-primary ml-2 py-1 font-bold border-transparent border-b-2 hover:border-primary transition ease-in duration-300"
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
            <button className="bg-sky-300 text-white rounded-lg border-2 px-4 py-3 my-4 mx-auto hover:bg-sky-400 hover:border-sky-300 transition ease-in duration-300">
              Let's Collaborate
            </button>
          </form>
        </div>

        <div className="mt-20 flex justify-between items-center">
          <div>
            <a href="/" title="Home - Yusof Paciente">
              <h1 className="font-bold text-sm font-arvo text-primary">YU</h1>
              <h1 className="font-bold text-sm font-arvo text-primary">SOF.</h1>
            </a>
          </div>

          <div>
            <div className="flex space-x-8 text-base text-secondary">
              <a
                className="hover:text-primary hover:drop-shadow-xl border-transparent border-b-2 hover:border-primary transition ease-in duration-300"
                href="https://www.linkedin.com/in/yusofpaciente"
                title="Linkedin Account"
              >
                linkedin
              </a>
              <a
                className="hover:text-primary hover:drop-shadow-xl border-transparent border-b-2 hover:border-primary transition ease-in duration-300"
                href="https://github.com/yusof29"
                title="Github Repository"
              >
                github
              </a>
              <a
                className="hover:text-primary hover:drop-shadow-xl border-transparent border-b-2 hover:border-primary transition ease-in duration-300"
                href="https://www.facebook.com/noeyeat"
                title="Facebook - Yusof Paciente"
              >
                facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
