import React from "react";

export const SongForm = ({ handleSearch }) => {
  const [form, setForm] = React.useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form?.artist || !form?.song) {
      alert("Please fill in both fields");
      return;
    }
    handleSearch(form);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          onChange={handleChange}
        />
        <input
          type="text"
          name="song"
          placeholder="Song"
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    </section>
  );
};
