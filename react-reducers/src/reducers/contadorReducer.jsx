import { TYPES } from "../actions/contadorActions";

export const contadorInitialState = { contador: 0 };

export const contadorInit = (initialState) => {
  return { contador: initialState.contador + 100 };
};

export function contadorReducer(state, action) {
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
      return contadorInitialState;
    default:
      return state;
  }
}
