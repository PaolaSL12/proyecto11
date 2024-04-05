import { useEffect, useState } from "react";
import "./CharacterById.css";
import { useParams } from "react-router-dom";
import ImgClasified from "../../components/ImgClasified/ImgClasified";
import ImgCharacter from "../../components/ImgCharacter/ImgCharacter";
import CharacterData from "../../components/CharacterData/CharacterData";

const CharacterById = () => {
  const [character, setCharacter] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + id)
      .then((res) => res.json())
      .then((res) => setCharacter(res));
  }, []);

  return (
    <div className="chararacterById">
      {character && (
        <>
          <div className="characterFile">
            <div className="fileTop">
              <div className="FileImg">
              <ImgCharacter character={character} />
              </div>
              <div className="fileDetails">
              <CharacterData character={character} id="id" mostrarLocation />
              </div>
            </div>
            <div className="fileBottom">
            <p>seen in {character.episode.length} episodes</p>
            <ImgClasified/>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterById;
