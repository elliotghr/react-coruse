import React from "react";
import { SongTableRow } from "./SongTableRow";

export const SongTable = ({ mySongs, handleDeleteSong }) => {
  return (
    <div>
      <h3>Fav Songs</h3>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Artista</th>
            <th>Canción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mySongs.length > 0 ? (
            mySongs.map((song, index) => (
              <SongTableRow key={index} id={index} song={song} handleDeleteSong={handleDeleteSong} />
            ))
          ) : (
            <tr>
              <td colSpan={4}>Sin canciones favoritas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
