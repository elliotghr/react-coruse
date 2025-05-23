import React, { createRef, useRef } from "react";

export default function Referencias() {
  //   let refMenu = createRef(), Para class components
  let refMenu = useRef(), // para funcional components
    refMenuBtn = useRef();

  console.log(refMenu, refMenuBtn);

  const handleToggleMenu = (e) => {
    // No es una buena práctica usar el DOM directamente, pero es para mostrar el uso de refs
    // const $menu = document.getElementById("menu");
    // if (e.target.textContent === "Menú") {
    //   e.target.textContent = "Cerrar";
    //   $menu.style.display = "block";
    // } else {
    //   e.target.textContent = "Menú";
    //   $menu.style.display = "none";
    // }

    // Manipulación del DOM con refs
    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <>
      <h2>Referencias</h2>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
        Menú
      </button>
      <nav id="menu" ref={refMenu} style={{ display: "none" }}>
        <a href="#">Sección 1</a>
        <br />
        <a href="#">Sección 2</a>
        <br />
        <a href="#">Sección 3</a>
        <br />
        <a href="#">Sección 4</a>
        <br />
        <a href="#">Sección 5</a>
        <br />
      </nav>
    </>
  );
}
