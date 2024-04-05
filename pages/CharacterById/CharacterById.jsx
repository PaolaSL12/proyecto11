import { useEffect, useState } from "react";
import "./CharacterById.css";
import { useParams } from "react-router-dom";
import ImgClasified from "../../components/ImgClasified/ImgClasified";

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
                <img src={character.image} alt={character.name} />
              </div>
              <div className="fileDetails">
                <p>name: {character.name}</p>
                <p>status: {character.status}</p>
                <p>species: {character.species}</p>
                <p>gender: {character.gender}</p>
                <p>location: {character.location.name}</p>
                <p className="id">id: 00{character.id}</p>
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
