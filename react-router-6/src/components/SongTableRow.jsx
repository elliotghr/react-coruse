import React from "react";
import { useNavigate } from "react-router-dom";

export const SongTableRow = ({ id, song, handleDeleteSong }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td>
        <img
          src={
            song.bio.artists[0].strArtistThumb ||
            "https://via.placeholder.com/150"
          }
          alt=""
          width="50"
          height="50"
        />
      </td>
      <td>{song.search.song}</td>
      <td>{song.search.artist}</td>
      <td>
        <button onClick={() => navigate(`/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};
