import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);
  const detectarScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    console.log("Moviendo el Scroll");

    window.addEventListener("scroll", detectarScroll);
  }, [scrollY]); // Si no pasamos el segundo argumento, se ejecutará cada vez que haya un cambio de estado

  useEffect(() => {
    // Esto es similar al componentDidUpdate
    console.log("Fase de Actualización");
  });

  useEffect(() => {
    console.log("Fase de Montaje");
    // Estableciendo un array vacío al parametro deps forzamos a que el useEffect se ejecute solo una vez
    // Esto es similar al componentDidMount
  }, []);

  useEffect(() => {
    // Cuando establecemos un return en el useEffect, este se ejecuta antes de que el componente se desmonte
    // Esto es similar al componentWillUnmount
    return () => {
      console.log("Fase de Desmontaje");
      // Fase mayormente usada para eliminar eventos, limpiar intervalos, generar desuscripciones, etc.
      window.removeEventListener("scroll", detectarScroll);
    };
  });

  return (
    <div>
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </div>
  );
}
