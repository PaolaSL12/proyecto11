import { useEffect, useState } from "react";
import "./Characters.css";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/pagination";
import ImgClasified from "../../components/ImgClasified/ImgClasified";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`, {})
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, [page]);

  return (
    <div className="characters">
      {characters.map((character) => (
        <Link to={`/character/${character.id}`} key={character.id}>
        <div className="character">
          <div className="characterImg">
            <img src={character.image} alt={character.name} />
          </div>
          <div className="characterContent">
            <p>name: {character.name}</p>
            <p className="secret">status: {character.status}</p>
            <p className="secret">species: {character.species}</p>
            <p className="secret">gender: {character.gender}</p>
            <p className="secret">id: 00{character.id}</p>
            <ImgClasified/>
          </div>
        </div>
        </Link>
      ))}
      <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
    </div>
  );
};

export default Characters;
