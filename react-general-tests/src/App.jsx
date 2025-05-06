import React from "react";
import AppIndex from "./components/AppIndex";
import { SongSearch } from "./components/SongSearch";
import { Forms } from "./components/SelectsAnidados";

function App() {
  return (
    <div>
      <hr />
      <Forms />
      <hr />
      <SongSearch />
      <hr />
      <AppIndex />
      <hr />
    </div>
  );
}

export default App;
