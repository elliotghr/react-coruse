export const Main = ({ theme, texts, auth }) => {
  return (
    <main className={theme}>
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
      <h3>{texts.mainContent}</h3>
    </main>
  );
};
