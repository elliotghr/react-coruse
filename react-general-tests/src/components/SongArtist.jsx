import React from 'react'

export const SongArtist = ({data}) => {
    console.log(data);
    const {strArtist, strGenre, strCountry, strBiographyES} = data;
  return (
    <div>
        <h2>{strArtist}</h2>
        <h3>{strGenre}</h3>
        <h4>{strCountry}</h4>
        <p>{strBiographyES}</p>
    </div>
  )
}
