import imagesData from "./assets/imagesData";

const data = [
  {
    id: 1,
    img: imagesData.flavourFlow,
    title: "Flavour Flow ",
    description:
      "A website where user can enter any ingredient they have at home. the website will generate a variety of foods you can make with these ingredient.",
    tools: ["React", "Styled-Components", "API", "Filter"],
    site: "https://flavourflow.netlify.app/",
    repo: "https://github.com/yusof29/flavour_flow",
  },
  {
    id: 2,
    img: imagesData.weatherCity,
    title: "Weather City",
    description:
      "Web application that helps you find the current weather in your city. A short react project to refresh myself on the best practices of api's when used with react.",
    tools: ["React", "Styled-Components", "API"],
    site: "https://weatherct.netlify.app/",
    repo: "https://github.com/yusof29/weathercity",
  },
  {
    id: 3,
    img: imagesData.goodal,
    title: "Goodall",
    description:
      "E-commerce website design that list all of goodal products on offer.",
    tools: ["React", "Tailwind"],
    site: "https://good-al.netlify.app/",
    repo: "https://github.com/yusof29/goodal",
  },
  // {
  //   id: 4,
  //   img: imagesData.sampleImg,
  //   title: "Real-Time Fire Detection System",
  //   description:
  //     "Capstone project created for Bureau of Fire Protection that responsible for the prevention and suppression of all destructive fires.",
  //   tools: ["React", "Tailwind", "Local Storage"],
  //   site: "https://good-al.netlify.app/",
  //   repo: 'https://github.com/yusof29/goodal'
  // },
];

export default data;
