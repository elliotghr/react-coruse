import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let nombre = "Elliot";
  let auth = true;
  let estaiciones = ["Primavera", "Verano", "Otoño", "Invierno"];
  const [count, setCount] = useState(0);

  return (
    // JSX es una extensión de la sintaxis de JavaScript que permite escribir HTML en JavaScript
    // JSX produce elementos de React
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* Interpolar variables */}
      <h2>Hola {nombre}</h2>
      {/* Contenido dinámico */}
      <p>{auth ? "El usuario está logueado" : "El usuario no está logueado"}</p>
      <p>{2 + 1}</p>
      <ul>
        {/* Estrucutras de control */}
        {/* Cada elemento renderizado dinamicamente debe tener una key única */}
        {estaiciones.map((estacion, index) => (
          <li key={index}>{estacion}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
