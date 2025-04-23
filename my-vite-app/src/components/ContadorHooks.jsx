import React, { useState } from "react";

export default function ContadorHooks(props) {
  const [contador, setContador] = useState(0);

  // Usamos arrow function para evitar el bind
  const sumar = (e) => setContador(contador + 1);
  const restar = (e) => setContador(contador - 1);

  return (
    <div>
      <h2>Hooks - useState</h2>
      <h3>
        {props.title}
        <br />
        {contador}
      </h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
    </div>
  );
}

ContadorHooks.defaultProps = {
  title: "Contador Clicks",
};
