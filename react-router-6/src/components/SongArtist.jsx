import React from "react";

export const SongArtist = ({ artist }) => {
  const {
    strArtist,
    strArtistThumb,
    strCountry,
    strGenre,
    strBiographyES,
    strBiographyEN,
    strWebsite,
    intBornYear,
    intDiedYear,
  } = artist;

  return (
    <section>
      <h3>{strArtist}</h3>
      <img src={strArtistThumb} alt={strArtist} />
      <p>
        {intBornYear} - {intDiedYear || "Presente"}
      </p>
      <p>{strCountry}</p>
      {strWebsite && (
        <a href={strWebsite} target="_blank" rel="noreferrer">
          sitio web
        </a>
      )}
      <p>{strGenre}</p>
      <p>{strBiographyES || strBiographyEN}</p>
    </section>
  );
};
