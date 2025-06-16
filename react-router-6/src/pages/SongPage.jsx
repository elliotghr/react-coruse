import React from "react";
import { SongDetails } from "../components/SongDetails";
import { useParams } from "react-router-dom";

export const SongPage = ({ mySongs }) => {
  let { id } = useParams();

  let song = mySongs[id] || {
    search: { artist: "Desconocido", song: "Desconocida" },
    lyric: { lyrics: "No hay letra disponible." },
    bio: { artists: [{ strArtistThumb: "" }] },
  };

  console.log(song);

  const { search, lyric, bio } = song;

  return <SongDetails search={search} lyric={lyric} bio={bio} />;
};
