import React from "react";

function EstadoAHijo(props) {
  return <p>count is {props.contadorHijo}</p>;
}

class Estado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    // setInterval recibe una función y un tiempo en milisegundos
    // La función se ejecutará cada vez que pase el tiempo especifico
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    return (
      <div>
        <p>count is {this.state.count}</p>
        <EstadoAHijo contadorHijo={this.state.count} />
      </div>
    );
  }
}

export default Estado;
