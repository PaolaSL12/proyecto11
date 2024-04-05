import { useEffect, useState } from "react";
import "./Characters.css";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/pagination";
import ImgClasified from "../../components/ImgClasified/ImgClasified";
import ImgCharacter from "../../components/ImgCharacter/ImgCharacter";
import CharacterData from "../../components/CharacterData/CharacterData";

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
    <main className="characters">
      {characters.map((character) => (
        <Link to={`/character/${character.id}`} key={character.id}>
        <div className="character">
          <div className="characterImg">
            <ImgCharacter character={character} />
          </div>
          <div className="characterContent">
            <CharacterData character={character} className="secret" />
            <ImgClasified/>
          </div>
        </div>
        </Link>
      ))}
      <Pagination page={page} setPage={setPage} totalPages={totalPages}/>
    </main>
  );
};

export default Characters;
