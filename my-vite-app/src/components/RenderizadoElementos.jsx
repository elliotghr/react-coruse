import React from "react";
import data from "../helpers/data.json";

// Componente funcional
function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" rel="noreferrer">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }

  render() {
    return (
      <div>
        <h2>Element's render</h2>
        <h3>Estaciones del año</h3>
        <ul>
          {this.state.seasons.map((estacion, index) => (
            <li key={index}>{estacion}</li>
          ))}
        </ul>

        <h3>Frameworks Frontend JavaScript</h3>
        <ul>
          {data.frameworks.map((el) => (
            <ElementoLista key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
