import "./App.css";
import { Contador } from "./components/Contador";
import { ContadorMejorado } from "./components/ContadorMejorado";
import { ShoppingCart } from "./components/ShoppingCart";

function App() {
  return (
    <div>
      <h1> useReducer</h1>
      <hr />
      <ShoppingCart />
      <hr />
      <Contador />
      <hr />
      <ContadorMejorado />
    </div>
  );
}

export default App;
