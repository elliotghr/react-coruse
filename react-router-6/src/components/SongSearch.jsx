import React, { useState, useEffect } from "react";
import { SongForm } from "./SongForm";
import { SongDetails } from "./SongDetails";
import { Loader } from "./Loader";
import { helpHttp } from "../helpers/helpHttp";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Error404 } from "../pages/Error404";
import { SongTable } from "./SongTable";
import { SongPage } from "../pages/SongPage";

const mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];

export const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);
  const [favsisDisabled, setFavsIsDisabled] = useState(true);

  const handleSearch = (data) => setSearch(data);
  const handleSaveSong = (song) => {
    alert("Canción guardada");
    console.log(song);
    setFavsIsDisabled(true);

    let currentSong = {
      search,
      lyric,
      bio,
    };

    setMySongs((prevSongs) => [...prevSongs, currentSong]);
    // setSearch(null);
  };

  const handleDeleteSong = (id) => {
    let isDelete = window.confirm(
      `¿Seguro que deseas eliminar la canción con id: ${id}?`
    );
    if (!isDelete) return;
    let filteredSongs = mySongs.filter((song, index) => index !== id);
    setMySongs(filteredSongs);
    localStorage.setItem("mySongs", JSON.stringify(filteredSongs));
    alert("Canción eliminada");
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
        localStorage.setItem("mySongs", JSON.stringify(mySongs));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search, mySongs]);

  return (
    <div>
      <BrowserRouter basename="/songs">
        {/* Nav component */}
        <header>
          <h2>SongSearch</h2>
          <Link to="/">Home</Link>
        </header>
        {/* Loader */}
        {loading && <Loader />}
        {/* Main content */}
        <article className="grid-1-2">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <SongForm
                    handleSearch={handleSearch}
                    handleSaveSong={handleSaveSong}
                    setFavsIsDisabled={setFavsIsDisabled}
                    favsisDisabled={favsisDisabled}
                  />
                  <SongTable
                    mySongs={mySongs}
                    handleDeleteSong={handleDeleteSong}
                  />
                  {search && !loading && (
                    <SongDetails search={search} lyric={lyric} bio={bio} />
                  )}
                </>
              }
            ></Route>
            <Route
              path="/:id"
              element={
                <>
                  <SongPage mySongs={mySongs}></SongPage>
                </>
              }
            ></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </article>
      </BrowserRouter>
    </div>
  );
};
