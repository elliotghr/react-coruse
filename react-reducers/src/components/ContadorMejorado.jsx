import { useReducer } from "react";
import {
  contadorInit,
  contadorInitialState,
  contadorReducer,
} from "../reducers/contadorReducer";
import { TYPES } from "../actions/contadorActions";

export const ContadorMejorado = () => {
  const [state, dispatch] = useReducer(
    contadorReducer,
    contadorInitialState,
    contadorInit
  );

  const Incrementar = () => dispatch({ type: TYPES.INCREMENTAR });
  const Decrementar = () => dispatch({ type: TYPES.DECREMENTAR });
  const Reset = () => dispatch({ type: TYPES.RESET });
  const Incrementar5 = () =>
    dispatch({ type: TYPES.INCREMENTAR_5, payload: 5 });
  const Decrementar5 = () =>
    dispatch({ type: TYPES.DECREMENTAR_5, payload: 5 });

  return (
    <div>
      <h2>Contador Mejorado Reducer</h2>
      <p>{state.contador}</p>
      <button onClick={Incrementar5}>Incrementar 5</button>
      <button onClick={Incrementar}>Incrementar</button>
      <button onClick={Reset}>Resetear</button>
      <button onClick={Decrementar}>Decrementar</button>
      <button onClick={Decrementar5}>Decrementar 5</button>
    </div>
  );
};
