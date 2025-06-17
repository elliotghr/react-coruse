import React, { memo, useMemo } from "react";

const ContadorHijo = ({ contador, sumar, restar }) => {
  console.log("Hijo del Contador renderizado");

  // Simulación de un cálculo pesado sin useMemo
  // let superNumero = 0;

  // for (let i = 0; i < 10000000000; i++) {
  //   superNumero += 1;
  // }

  // Uso de useMemo para evitar cálculos innecesarios en cada renderizado
  const superNumero = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 10000000000; i++) {
      result += 1;
    }
    return result;
  }, []); // No dependencias, se calcula una sola vez

  return (
    <div>
      <h2>Hijo del Contador</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>Super número: {superNumero}</h3>
    </div>
  );
};

export default memo(ContadorHijo);
