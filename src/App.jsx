import { useEffect } from "react";
import { useDarkMode } from "../src/hook/useDarkMode";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import ReactGA from "react-ga4";
const trackingID = "G-HYE6819HEV";
ReactGA.initialize(trackingID);

function App() {
  const [colorTheme, setTheme] = useDarkMode();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className="bg-bglight font-rubik transition duration-300 dark:bg-bgdark">
      <Navbar colorTheme={colorTheme} setTheme={setTheme} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer colorTheme={colorTheme} />
    </div>
  );
}

export default App;
