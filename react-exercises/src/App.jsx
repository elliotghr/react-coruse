import { useState } from "react";
import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";

function App() {
  return (
    <div>
      <h1>React exercises</h1>
      <CrudApi />
      <hr />
      <CrudApp />
    </div>
  );
}

export default App;
