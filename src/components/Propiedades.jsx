import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>Propiedades</h2>
      <p>{props.nombre}</p>
      <ul>
        {/* Ejemplos de tipo de datos que se pueden recibir como props */}
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "verdadero" : "falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + " - " + props.objeto.edad}</li>
        <li>{props.funcion(5)}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}

// Propiedades por defecto
// Se definen las propiedades por defecto del componente a través de defaultProps
Propiedades.defaultProps = {
  nombre: "Propiedades por defecto",
};


// Validación de propiedades
// Prop types está deprecated, pero aún se usa en muchos proyectos
// Se definen las propiedades que se esperan recibir en el componente a través de propTypes
// Se puede definir si una propiedad es requerida o no
Propiedades.propTypes = {
  nombre: PropTypes.string,
  cadena: PropTypes.string.isRequired,
  numero: PropTypes.number.isRequired,
  booleano: PropTypes.bool.isRequired,
  arreglo: PropTypes.array.isRequired,
  objeto: PropTypes.object.isRequired,
  funcion: PropTypes.func.isRequired,
  elementoReact: PropTypes.element.isRequired,
};
