import { BsCircle } from "react-icons/bs";

const Skills = () => {
  const skills = [
    "REACTS",
    "Javascript ES6",
    "Redux / Redux Toolkit",
    "HTML & CSS",
    "Tailwind CSS",
    "Styled Components",
    "REST API",
    "NodeJs",
    "ExpressJs",
    "MongoDB",
    "Mongoose",
    "Git",
  ];

  return (
    <section name="skills" className="flex min-h-screen w-full items-center">
      <div className="container mx-auto px-5 py-6 lg:px-10">
        <div className="sm:w-3/5">
          <h2 className="text-2xl font-bold tracking-wider text-sky-400 lg:text-4xl">
            My Skills
          </h2>
          <p className="my-12 text-lightsecondary dark:text-darksecondary">
            I develop web applications using these languages and frameworks. I
            am always excited by new technologies, therefore, I do not hesitate
            to take up coding task.
          </p>
        </div>

        <div className="font-semibold text-lightprimary dark:text-darkprimary">
          <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill, i) => (
              <li key={i} className="flex items-center py-2 tracking-wide">
                <BsCircle className="mr-2 w-3 text-sky-300" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
