import { useState } from "react";
import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";
import { SongSearch } from "./components/SongSearch";

function App() {
  return (
    <div>
      <h1>React exercises</h1>
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </div>
  );
}

export default App;
