import { createContext, useState } from "react";

// Create a context for the theme
const ThemeContext = createContext();

const initialTheme = "light"; // Default theme

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);
  const handleThemeChange = (e) => setTheme(e.target.value);

  // You can define your theme data to be shared
  // across components that consume this context
  const data = {
    theme,
    handleThemeChange,
  };
  //   Return the context provider with the data
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
