import React from "react";
import AppIndex from "./components/AppIndex";
import { SongSearch } from "./components/SongSearch";
import { SelectsAnidados } from "./components/SelectsAnidados";
import { ContactForm } from "./components/ContactForm";
import { Modals } from "./components/Modals";

function App() {
  return (
    <div>
      <hr />
      <Modals />
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
