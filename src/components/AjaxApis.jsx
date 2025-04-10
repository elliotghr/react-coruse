import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class AjaxApis extends Component {
  // Definimos el estado inicial
  state = {
    pokemons: [],
  };

  // El ciclo de vida del componente se ejecuta una vez que el componente se ha montado en el DOM
  componentDidMount() {
    // Realizamos la petición a la API de Pokemon
    let url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              // Destructuring
              const { id, name, sprites } = json;
              // Crear un objeto pokemon
              let pokemon = {
                id,
                name,
                avatar: sprites.front_default,
              };
              // Actualizar el estado
              // Devolvemos un objeto con el nuevo estado
              // Obtenemos el estado anterior y agregar el nuevo pokemon
              this.setState((prevState) => ({
                pokemons: [...prevState.pokemons, pokemon],
              }));
            });
        });
      });
  }
  render() {
    return (
      <>
        <h2>Peticiones Asíncronas en Componentes de Clase</h2>
        {this.state.pokemons.length > 0 ? (
          this.state.pokemons.map((el, index) => (
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
}
