import React from "react";
import "./Estilos.css";
import "./Estilos.scss";
import ModuleStyles from "./Estilos.module.css";

export default function Estilos() {
  let myStyles = {
    borderRadius: ".25rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };

  return (
    <section className="estilos">
      <h2>Estilos CSS en React</h2>
      <h3 className="bg-react">Estilos en hoja css externa</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: ".25rem", padding: "5rem" }}
      >
        Estilos en linea (atributo style)
      </h3>
      <h3 className="bg-react" style={myStyles}>
        Estilos en linea
      </h3>
      <h3>
        Agregando Nromalize con
        <br />
        <code>@import-normalize;</code>
      </h3>
      <h3 className={ModuleStyles.error}>Estilos con módulos</h3>
      <h3 className={ModuleStyles.success}>Estilos con módulos</h3>
      <h3 className="bg-sass">Estilos con SASS</h3>
    </section>
  );
}
