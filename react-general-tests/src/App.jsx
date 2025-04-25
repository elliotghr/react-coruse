import React from "react";
import AppIndex from "./components/AppIndex";
import { SongSearch } from "./components/SongSearch";

function App() {
  return (
    <div>
      <SongSearch />
      <hr />
      <AppIndex />
      <hr />
    </div>
  );
}

export default App;
