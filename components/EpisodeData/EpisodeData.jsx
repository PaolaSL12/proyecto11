import React from "react";

const EpisodeData = ({episode}) => {
  return (
    <>
      <p>episode: {episode.episode}</p>
      <p>name: {episode.name}</p>
      <p>air date: {episode.air_date}</p>
      <p>id: 00{episode.id}</p>
    </>
  );
};

export default EpisodeData;
