import { useEffect, useState } from "react";
import "./Episodes.css";

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
        console.error("Error fetching episodes:", error);
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
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/06/Classified-Stamp-Transparent.png"
            alt="clasified"
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
      <div className="pagination">
        <img
          src="/assets/back.png"
          alt="back"
          onClick={() => {
            setPage(page === 1 ? 1 : page - 1);
          }}
          disabled={page === 1}
        />
        <p>{page}</p>
        <img
          src="/assets/next.png"
          alt="next"
          onClick={() => {
            setPage(page < totalPages ? page + 1 : page);
          }}
          disabled={page === totalPages}
        />
      </div>
    </div>
  );
};

export default Episodes;
