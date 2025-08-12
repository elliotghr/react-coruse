import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import AuthContext from "../context/AuthContext";

export const HeaderContext = () => {
  const { auth, handleAuthChange } = useContext(AuthContext);
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const { texts, handleLanguageChange } = useContext(LanguageContext);

  return (
    <header className={theme}>
      <h2>{texts.headerTitle}</h2>
      <h3>{texts.headerSubtitle}</h3>
      <select onChange={handleLanguageChange} name="language">
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        onClick={handleThemeChange}
        type="radio"
        name="theme"
        id="light-context"
        value={"light"}
        defaultChecked={theme === "light"}
      />
      <label htmlFor="light-context">{texts.headerLight}</label>
      <input
        onClick={handleThemeChange}
        type="radio"
        name="theme"
        id="dark-context"
        value={"dark"}
        defaultChecked={theme === "dark"}
      />
      <label htmlFor="dark-context">{texts.headerDark}</label>
      <button onClick={handleAuthChange}>
        {auth ? texts.buttonLogout : texts.buttonLogin}
      </button>
    </header>
  );
};
