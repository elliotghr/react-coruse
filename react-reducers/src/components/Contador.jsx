import { useReducer } from "react";

const initialState = { contador: 0 };
const TYPES = {
  INCREMENTAR: "INCREMENTAR",
  INCREMENTAR_5: "INCREMENTAR_5",
  DECREMENTAR: "DECREMENTAR",
  DECREMENTAR_5: "DECREMENTAR_5",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENTAR:
      return { contador: state.contador + 1 };
    case TYPES.DECREMENTAR:
      return { contador: state.contador - 1 };
    case TYPES.INCREMENTAR_5:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENTAR_5:
      return { contador: state.contador - action.payload };
    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
}

const init = (initialState) => {
  return { contador: initialState.contador + 100 };
};

export const Contador = () => {
  //   const [contador, setContador] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState, init);
  // Funciones para incrementar y decrementar el contador
  //   const Incrementar = () => setContador(contador + 1);
  //   const Decrementar = () => setContador(contador - 1);
  // Usando useReducer
  const Incrementar = () => dispatch({ type: TYPES.INCREMENTAR });
  const Decrementar = () => dispatch({ type: TYPES.DECREMENTAR });
  const Reset = () => dispatch({ type: TYPES.RESET });
  const Incrementar5 = () =>
    dispatch({ type: TYPES.INCREMENTAR_5, payload: 5 });
  const Decrementar5 = () =>
    dispatch({ type: TYPES.DECREMENTAR_5, payload: 5 });

  return (
    <div>
      <h2>Contador</h2>
      <p>{state.contador}</p>
      <button onClick={Incrementar5}>Incrementar 5</button>
      <button onClick={Incrementar}>Incrementar</button>
      <button onClick={Reset}>Resetear</button>
      <button onClick={Decrementar}>Decrementar</button>
      <button onClick={Decrementar5}>Decrementar 5</button>
    </div>
  );
};
