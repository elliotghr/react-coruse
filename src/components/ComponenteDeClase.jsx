import React from "react";

// Componente de clase
class Componente extends React.Component {
  // El método render() es obligatorio en los componentes de clase
  render() {
    return <p>{this.props.msg}</p>;
  }
}

export default Componente;
