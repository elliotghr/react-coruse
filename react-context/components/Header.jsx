export const Header = ({
  theme,
  handleThemeChange,
  texts,
  handleLanguageChange,
  auth,
  handleAuthChange,
}) => {
  console.log(theme);
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
        id="light"
        value={"light"}
        defaultChecked={theme === "light"}
      />
      <label htmlFor="light">{texts.headerLight}</label>
      <input
        onClick={handleThemeChange}
        type="radio"
        name="theme"
        id="dark"
        value={"dark"}
        defaultChecked={theme === "dark"}
      />
      <label htmlFor="dark">{texts.headerDark}</label>
      <button onClick={handleAuthChange}>
        {auth ? texts.buttonLogout : texts.buttonLogin}
      </button>
    </header>
  );
};
