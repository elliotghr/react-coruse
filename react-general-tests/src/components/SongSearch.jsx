import React, { useState, useEffect } from "react";
import { SongForm } from "./SongForm";
import { SongDetails } from "./SongDetails";
import { helpHttp } from "../helpers/helpHttp";

export const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [song, setSong] = useState(null);
  const [artist, setArtist] = useState(null);

  const handleSearch = (data) => {
    setSearch(data);
  };

  useEffect(() => {
    if (!search) return;
    const { artist, song } = search;

    let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
    let lyricUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    Promise.all([helpHttp().get(artistUrl), helpHttp().get(lyricUrl)])
      .then((res) => {
        const [artistData, lyricData] = res;
        console.log(artistData);
        console.log(lyricData);
        setSong(lyricData);
        setArtist(artistData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, [search]);

  return (
    <article className="grid-1-3">
      <SongForm handleSearch={handleSearch} />
      <SongDetails song={song} artist={artist} search={search} />
    </article>
  );
};
