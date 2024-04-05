import { useEffect, useState } from "react";
import "./Episodes.css";
import Pagination from "../../components/pagination/pagination";
import ImgClasified from "../../components/ImgClasified/ImgClasified";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [visibleEpisodeId, setVisibleEpisodeId] = useState(null);

  const toggleImage = (episodeId) => {
    setVisibleEpisodeId(visibleEpisodeId === episodeId ? null : episodeId);
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${page}`, {})
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.results);
        setTotalPages(data.info.pages);
      })
      .catch((error) => {
        console.error("Error fetch:", error);
      });
  }, [page]);

  return (
    <div className="episodes">
      {episodes.map((episode) => (
        <div
          className="episode"
          key={episode.id}
          onClick={() => toggleImage(episode.id)}
        >
          <ImgClasified
            className={
              visibleEpisodeId === episode.id ? "visible" : "hidden-image"
            }
          />
          <p>episode: {episode.episode}</p>
          <p>name: {episode.name}</p>
          <p>air date: {episode.air_date}</p>
          <p>id: 00{episode.id}</p>
        </div>
      ))}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Episodes;
