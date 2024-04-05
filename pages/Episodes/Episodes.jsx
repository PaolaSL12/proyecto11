import { useEffect, useState } from "react";
import "./Episodes.css";
import Pagination from "../../components/pagination/pagination";
import ImgClasified from "../../components/ImgClasified/ImgClasified";
import { toggleImage } from "../../utils/toggleImage";
import EpisodeData from "../../components/EpisodeData/EpisodeData";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [visibleEpisodeId, setVisibleEpisodeId] = useState(null);

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
    <main className="episodes">
      {episodes.map((episode) => (
        <div
          className="episode"
          key={episode.id}
          onClick={() =>
            toggleImage(episode.id, visibleEpisodeId, setVisibleEpisodeId)
          }
        >
          <ImgClasified
            className={
              visibleEpisodeId === episode.id ? "visible" : "hidden-image"
            }
          />
          <EpisodeData episode={episode} />
        </div>
      ))}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </main>
  );
};

export default Episodes;
