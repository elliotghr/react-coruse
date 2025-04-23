import React, { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Communicating between Components</h2>
        <p>Contador: {this.state.contador}</p>
        <p>Comunicación de componentes padres a hijos</p>
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo 1"
        />
        <p>Comunicación entre un componente hijo y su padre</p>
        <i>
          Por una acción del componente hijo se afecta el estado del componente
          padre
        </i>
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo 2"
        />
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      {props.incrementarContador ? (
        <>
          <button onClick={props.incrementarContador}>+</button>
        </>
      ) : null}
    </>
  );
}
