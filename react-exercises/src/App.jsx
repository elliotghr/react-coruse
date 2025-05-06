import { useState } from "react";
import CrudApp from "./components/CrudApp";
import CrudApi from "./components/CrudApi";
import { SongSearch } from "./components/SongSearch";
import { SelectsAnidados } from "./components/SelectsAnidados";
import { ContactForm } from "./components/ContactForm";
import Modals from "./components/Modals";

function App() {
  return (
    <div>
      {/* <h1>React exercises</h1> */}
      <hr />
      <Modals />
      <hr />
      <ContactForm />
      <hr />
      <SelectsAnidados />
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
