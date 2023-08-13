import { useState } from "react";

const useDarkThemeSwitcher = () => {
  const themeParamName = "isDarkTheme";
  const [isDarkTheme, setIsDarkTheme] = useState(
    !!localStorage.getItem(themeParamName)
  );

  const toggleTheme = () => {
    setIsDarkTheme((v) => {
      const newValue = !v;
      localStorage.setItem(themeParamName, newValue ? "1" : "");
      return newValue;
    });
  };

  return {
    isDarkTheme,
    toggleTheme,
  };
};

export default useDarkThemeSwitcher;
