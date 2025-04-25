import React from "react";

export const SongLyrics = ({ lyrics, songName }) => {
  return (
    <div>
      <h2>Letra de la canción {songName}</h2>
      <p style={{ whiteSpace: "pre-wrap" }}>{lyrics}</p>
    </div>
  );
};
