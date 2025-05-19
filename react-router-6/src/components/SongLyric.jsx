import React from "react";

export const SongLyric = ({ lyrics, title }) => {
  if (!lyrics) return null;
  return (
    <section>
      <h3>{title}</h3>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>{lyrics}</blockquote>
    </section>
  );
};
