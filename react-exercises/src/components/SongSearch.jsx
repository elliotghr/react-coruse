import React, { useState, useEffect } from "react";
import { SongForm } from "./SongForm";
import { SongDetails } from "./SongDetails";
import { Loader } from "./Loader";
import { helpHttp } from "../helpers/helpHttp";

export const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    setSearch(data);
  };

  useEffect(() => {
    if (!search) return;
    setLoading(true);
    const { artist, song } = search;

    let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
    let lyricUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    Promise.all([helpHttp().get(artistUrl), helpHttp().get(lyricUrl)])
      .then((res) => {
        const [artistRes, lyricRes] = res;
        setBio(artistRes);
        setLyric(lyricRes);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

  return (
    <div>
      <h2>SongSearch</h2>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search && !loading && (
          <SongDetails search={search} lyric={lyric} bio={bio} />
        )}
      </article>
    </div>
  );
};
