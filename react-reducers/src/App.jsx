import "./App.css";
import { Contador } from "./components/Contador";
import { ContadorMejorado } from "./components/ContadorMejorado";

function App() {
  return (
    <div>
      <h1> useReducer</h1>
      <hr />
      <Contador />
      <hr />
      <ContadorMejorado />
    </div>
  );
}

export default App;
