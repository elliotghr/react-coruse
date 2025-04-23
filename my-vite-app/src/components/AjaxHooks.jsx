import React, { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  //   useEffect(() => {
  //     let url = "https://pokeapi.co/api/v2/pokemon";
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         json.results.forEach((el) => {
  //           fetch(el.url)
  //             .then((res) => res.json())
  //             .then((json) => {
  //               const { id, name, sprites } = json;
  //               let pokemon = {
  //                 id,
  //                 name,
  //                 avatar: sprites.front_default,
  //               };
  //               setPokemons((prevState) => [...prevState, pokemon]);
  //             });
  //         });
  //       });
  //   }, []);

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("https://pokeapi.co/api/v2/pokemon");
      if (!res.ok) throw new Error("Error en la petición");

      let json = await res.json();
      const { results } = json;

      results.forEach(async (el) => {
        let res = await fetch(el.url);
        if (!res.ok) throw new Error("Error en la petición");

        let json = await res.json();
        const { id, name, sprites } = json;

        let pokemon = {
          id,
          name,
          avatar: sprites.front_default,
        };

        setPokemons((prevState) => [...prevState, pokemon]);
      });
    }
    fetchData();
  }, []);

  return (
    <>
      <h2>Peticiones Asíncronas en Hooks</h2>
      {pokemons.length > 0 ? (
        pokemons.map((el, index) => (
          <Pokemon
            key={`${el.id}-${index}`}
            name={el.name}
            avatar={el.avatar}
          />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
}
