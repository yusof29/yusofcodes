import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("dark" || localStorage.theme);
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.add(theme);
    root.classList.remove(colorTheme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};
