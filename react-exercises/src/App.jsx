import { useState } from "react";
import CrudApp from "./components/CrudApp";
import { CrudApi } from "./components/CrudApi";

function App() {
  return (
    <div>
      <h2>CRUD APP</h2>
      <CrudApi />
      <hr />
      <CrudApp />
    </div>
  );
}

export default App;
