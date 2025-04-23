import React, { Component } from "react";

// Creando un componente de clase
class Reloj extends Component {
  constructor(props) {
    super(props);
  }

  //  Fase de desmontaje
  componentWillUnmount() {
    console.log(3, "El componente ha sido eliminado del DOM");
  }

  render() {
    return <h3>Props Hora: {this.props.hora}</h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El componente se inicializa, aún no está en el DOM");
    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  //   Fase de montaje
  componentDidMount() {
    console.log(1, "El componente ya está en el DOM");
  }
  //    Fase de actualización
  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El componente se actualiza");
    console.log(prevProps, prevState);
  }

  //   Funciones del ciclo de vida
  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
        visible: true,
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  //   Renderizado del componente
  render() {
    console.log(4, "El componente se renderiza o se vuelve a renderizar");
    return (
      <div>
        <h2>Ciclo de vida de los componentes de clase</h2>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>
      </div>
    );
  }
}
