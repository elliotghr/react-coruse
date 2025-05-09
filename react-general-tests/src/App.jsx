import React from "react";
import AppIndex from "./components/AppIndex";
import { SongSearch } from "./components/SongSearch";
import { SelectsAnidados } from "./components/SelectsAnidados";
import { ContactForm } from "./components/ContactForm";


function App() {
  return (
    <div>
      <hr />
      <ContactForm />
      <hr />
      <SelectsAnidados />
      <hr />
      <SongSearch />
      <hr />
      <AppIndex />
      <hr />
    </div>
  );
}

export default App;
