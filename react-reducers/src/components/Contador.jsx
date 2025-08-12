import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENTAR":
      return { contador: state.contador + 1 };
    case "DECREMENTAR":
      return { contador: state.contador - 1 };
    default:
      return state;
  }
}
const initialState = { contador: 0 };

export const Contador = () => {
  //   const [contador, setContador] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  // Funciones para incrementar y decrementar el contador
  //   const Incrementar = () => setContador(contador + 1);
  //   const Decrementar = () => setContador(contador - 1);
  // Usando useReducer
  const Incrementar = () => dispatch({ type: "INCREMENTAR" });
  const Decrementar = () => dispatch({ type: "DECREMENTAR" });

  return (
    <div>
      <h2>Contador</h2>
      <p>{state.contador}</p>
      <button onClick={Incrementar}>Incrementar</button>
      <button onClick={Decrementar}>Decrementar</button>
    </div>
  );
};
