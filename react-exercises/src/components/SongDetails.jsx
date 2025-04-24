import React from "react";
import { SongArtist } from "./SongArtist";
import { SongLyric } from "./SongLyric";
import { Message } from "./Message";

export const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric && !bio) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name == "AbortError" ? (
        <Message
          msg={`No se encontró la letra de la canción <em>${search.song}</em> de <em>${search.artist}</em>`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric lyrics={lyric.lyrics} title={search.song}/>
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`No se encontró la información del artista <em>${search.artist}</em>`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};
