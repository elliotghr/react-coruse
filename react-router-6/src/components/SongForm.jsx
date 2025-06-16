import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

export const SongForm = ({ handleSearch, handleSaveSong, favsisDisabled, setFavsIsDisabled }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.artist.trim() === "" || form.song.trim() === "") {
      alert("Por favor, completa todos los campos");
      return;
    }
    handleSearch(form);
    // setForm(initialForm);
    setFavsIsDisabled(false);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Artista"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Canción"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Enviar" />
        <input type="button" disabled={favsisDisabled && "disabled"} onClick={() => handleSaveSong(form)} value="Agregar canción" />
      </form>
    </section>
  );
};
