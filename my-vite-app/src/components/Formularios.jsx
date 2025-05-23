import React, { useState } from "react";

// export default function Formularios() {
//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       `Nombre: ${nombre}, Sabor: ${sabor}, Lenguaje: ${lenguaje}, Acepta términos: ${terminos}`
//     );
//   };
//   return (
//     <>
//       <h2>Formularios</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nombre">Nombre</label>
//         <input
//           type="text"
//           id="nombre"
//           name="nombre"
//           onChange={(e) => {
//             setNombre(e.target.value);
//           }}
//           value={nombre}
//           placeholder="Escribe tu nombre"
//         />
//         <p>Elige tu sabor JS favorito</p>
//         <label htmlFor="vanilla">Vanilla</label>
//         <input
//           type="radio"
//           id="vanilla"
//           name="sabor"
//           value="vanilla"
//           onChange={(e) => {
//             setSabor(e.target.value);
//           }}
//           defaultChecked={true} // Valor por defecto
//         />
//         <label htmlFor="react">React</label>
//         <input
//           type="radio"
//           id="react"
//           name="sabor"
//           value="react"
//           onChange={(e) => {
//             setSabor(e.target.value);
//           }}
//         />
//         <label htmlFor="angular">Angular</label>
//         <input
//           type="radio"
//           id="angular"
//           name="sabor"
//           value="angular"
//           onChange={(e) => {
//             setSabor(e.target.value);
//           }}
//         />
//         <label htmlFor="vue">Vue</label>
//         <input
//           type="radio"
//           id="vue"
//           name="sabor"
//           value="vue"
//           onChange={(e) => {
//             setSabor(e.target.value);
//           }}
//         />
//         <p>Elige tu lenguaje de programación favorito</p>
//         <select
//           name="lenguaje"
//           id="lenguaje"
//           onChange={(e) => setLenguaje(e.target.value)}
//           defaultValue=""
//         >
//           <option value="javascript">JavaScript</option>
//           <option value="python">Python</option>
//           <option value="java">Java</option>
//           <option value="csharp">C#</option>
//           <option value="php">PHP</option>
//           <option value="ruby">Ruby</option>
//           <option value="swift">Swift</option>
//           <option value="go">Go</option>
//           <option value="kotlin">Kotlin</option>
//         </select>
//         <br />
//         <label htmlFor="terminos">Acepto términos y condiciones</label>
//         <input
//           type="checkbox"
//           id="terminos"
//           name="terminos"
//           onChange={(e) => {
//             setTerminos(e.target.checked);
//           }}
//         />
//         <br />
//         <input type="submit" value="Enviar" />
//       </form>
//     </>
//   );
// }

export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Nombre: ${form.nombre}, Sabor: ${form.sabor}, Lenguaje: ${form.lenguaje}, Acepta términos: ${form.terminos}`
    );
    console.log(form);
  };

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          onChange={handleChange}
          value={form.nombre}
          placeholder="Escribe tu nombre"
        />
        <p>Elige tu sabor JS favorito</p>
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
          defaultChecked={true} // Valor por defecto
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <p>Elige tu lenguaje de programación favorito</p>
        <select
          name="lenguaje"
          id="lenguaje"
          onChange={handleChange}
          defaultValue=""
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
          <option value="php">PHP</option>
          <option value="ruby">Ruby</option>
          <option value="swift">Swift</option>
          <option value="go">Go</option>
          <option value="kotlin">Kotlin</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto términos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleCheked}
        />
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}
