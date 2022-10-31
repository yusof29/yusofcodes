import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import { useDarkMode } from "./hook/useDarkMode";

function App() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="font-rubik bg-bglight dark:bg-bgdark transition duration-300">
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
