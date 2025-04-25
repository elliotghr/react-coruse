import React from "react";
import { SongLyrics } from "./SongLyrics";
import { SongArtist } from "./SongArtist";
import { Message } from "./Message";

export const SongDetails = ({ song, artist, search }) => {
  if (!song && !artist) return null;

  return (
    <>
      {song.err ? (
        <Message
          msg={`Error: ${song.status}, detalle: ${song.statusText}`}
          bgColor="#d11212"
        />
      ) : (
        <SongArtist data={artist.artists[0]} songName={search.song} />
      )}

      {artist?.artists ? (
        <SongLyrics lyrics={song.lyrics} songName={search.song} />
      ) : (
        <Message
          msg={`Error al obtener la información del artista ${search.artist}`}
          bgColor="#d11212"
        />
      )}
    </>
  );
};
