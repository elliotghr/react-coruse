// Desde la versión 17 de React, ya no es necesario importar React en los componentes
import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Componente from "./components/ComponenteDeClase.jsx";
import ComponenteFuncional from "./components/ComponenteFuncional.jsx";
import Propiedades from "./components/Propiedades.jsx";
import Estado from "./components/Estado.jsx";
import RenderizadoCondicional from "./components/RenderizadoCondicional.jsx";
import RenderizadoElementos from "./components/RenderizadoElementos.jsx";
import {
  EventosES6,
  EventosES7,
  MasSobreEventos,
} from "./components/Eventos.jsx";
import Padre from "./components/ComunicacionComponentes.jsx";
import CicloVida from "./components/CicloVida.jsx";
import AjaxApis from "./components/AjaxApis.jsx";
import ContadorHooks from "./components/ContadorHooks.jsx";
import ScrollHooks from "./components/ScrollHooks.jsx";
import RelojHooks from "./components/RelojHooks.jsx";
import AjaxHooks from "./components/AjaxHooks.jsx";

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
      <h1>Vite</h1>
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
      <section>
        <Componente msg="Hola soy un componente basado en clases desde una prop" />
        <ComponenteFuncional msg="Hola soy un componente funcional desde una prop" />
        <hr />
        <Propiedades
          cadena="Esto es una cadena de texto"
          numero={19}
          booleano={true}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: "Elliot", edad: 28 }}
          funcion={(num) => num * num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={
            <Componente msg="Soy un componente pasado como prop" />
          }
        />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
        <hr />
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <MasSobreEventos />
        <hr />
        <Padre />
        <hr />
        <CicloVida />
        <hr />
        {/* <AjaxApis /> */}
        <hr />
        <ContadorHooks title="Followers" />
        <hr />
        <ScrollHooks />
        <hr />
        <RelojHooks />
        <hr />
        <AjaxHooks />
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
