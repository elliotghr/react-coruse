import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    // Bindear el método sumar al contexto de la clase
    this.sumar = this.sumar.bind(this);
  }

  sumar(e) {
    console.log("sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar = (e) => {
    console.log("restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
    console.log(e);
  };

  render() {
    return (
      <div>
        <h2>Events in Class Components</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    );
  }
}

// Properties Initializer Syntax
export class EventosES7 extends Component {
  // Constructor no es necesario
  // ya que no se inicializa el estado
  state = {
    contador: 0,
  };

  // Usamos arrow function para evitar el bind
  sumar = (e) =>
    this.setState({
      contador: this.state.contador + 1,
    });

  restar = (e) =>
    this.setState({
      contador: this.state.contador - 1,
    });

  // No es necesario bindear el método sumar al contexto de la clase
  render() {
    return (
      <div>
        <h2>Events in Class Components ES7</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    );
  }
}

// function Boton(props) {
//   return <button onClick={props.myOnClick}>Botón hecho Componente</button>;
// }

// Usando arrow functions y desestructuración
const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Botón hecho Componente</button>
);

export class MasSobreEventos extends Component {
  handleClick = (e, message) => {
    // Evento sintetico
    console.log(e);
    console.log(e.target);
    // Evento nativo
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    // Paso de parámetros
    console.log(message);
  };

  render() {
    return (
      <div>
        <h2>More about Events</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parametro desde un evento")
          }
        >
          Saludar
        </button>
        {/* Evento Personalizado */}
        {/* Se utiliza porque los enentos como onClick son propios de elementos JSX, pero no de componentes */}
        {/* <Boton
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parametro desde un evento")
          }
        /> */}
        {/* La solución es pasarlo como una propiedad y ejecutarlo en el evento del componente */}
        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "Hola pasando parametro desde un evento")
          }
        />
      </div>
    );
  }
}
