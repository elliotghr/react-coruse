import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import React, { useState } from "react";

const initialTheme = "light"; // Default theme
const initialLanguage = "es"; // Default language
const initialAuth = false; // Default authentication state

const translations = {
  es: {
    headerTitle: "Mi aplicacion SIN Context Api",
    headerSubtitle: "Mi Cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesion",
    buttonLogout: "Cerrar Sesion",
    mainWelcome: "Bienvenido",
    mainHello: "Hola usuario",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pie de pagina",
  },
  en: {
    headerTitle: "My application WITHOUT Context Api",
    headerSubtitle: "My Header",
    headerLight: "Sure",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Close Session",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello user",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

export const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);
  const [auth, setAuth] = useState(initialAuth);

  const handleThemeChange = (e) => setTheme(e.target.value);
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setTexts(translations[e.target.value]);
  };
  const handleAuthChange = () => setAuth(!auth);

  return (
    <div className="my-page">
      <Header
        theme={theme}
        handleThemeChange={handleThemeChange}
        texts={texts}
        handleLanguageChange={handleLanguageChange}
        auth={auth}
        handleAuthChange={handleAuthChange}
      />
      <Main theme={theme} texts={texts} auth={auth} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
};
