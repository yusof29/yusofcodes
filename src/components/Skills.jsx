import { BsCircle } from "react-icons/bs";

const Skills = () => {
  const skills = [
    "REACT",
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
    <section name="skills" className="w-full min-h-screen flex items-center">
      <div className="container mx-auto py-6 px-5 lg:px-10">
        <div className="sm:w-3/5">
          <h2 className="text-2xl lg:text-4xl font-bold text-sky-400 tracking-wider">
            My Skills
          </h2>
          <p className="text-lightsecondary dark:text-darksecondary my-12">
            I develop web applications using these languages and frameworks. I
            am always excited by new technologies, therefore, I do not hesitate
            to take up coding task.
          </p>
        </div>

        <div className="text-lightprimary dark:text-darkprimary font-semibold">
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
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
