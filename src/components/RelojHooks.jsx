import React, { useState, useEffect } from "react";

function Reloj({ hora }) {
  return <h3>Props Hora: {hora}</h3>;
}

export default function RelojHooks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;
    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
        // Si visible es false, no se hace nada
        console.log("El componente está oculto");
    }
    return () => {
      // Limpiar el temporizador si el componente se desmonta o se oculta
      // (cuando visible cambia a false)
      // Esto es importante para evitar fugas de memoria
      // y asegurarse de que el temporizador no siga ejecutándose
      console.log("Limpiando temporizador");
      clearInterval(temporizador);
    };
  }, [visible]);

  return (
    <>
      <h2>Reloj con Hooks</h2>
      {visible && <Reloj hora={hora} />}
      <button onClick={() => setVisible(true)}>iniciar</button>
      <button onClick={() => setVisible(false)}>detener</button>
    </>
  );
}
