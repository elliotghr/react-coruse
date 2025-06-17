import React, { useState, useCallback } from "react";
import ContadorHijo from "./ContadorHijo";

export const Contador = () => {
  const [contador, setContador] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // const sumar = () => setContador(contador + 1);
  const sumar = useCallback(() => setContador(contador + 1), [contador]);
  // const restar = () => setContador(contador - 1);
  const restar = useCallback(() => setContador(contador - 1), [contador]);

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <div>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <input type="text" onChange={handleInputChange} value={inputValue} />
      <ContadorHijo contador={contador} sumar={sumar} restar={restar} />
    </div>
  );
};
