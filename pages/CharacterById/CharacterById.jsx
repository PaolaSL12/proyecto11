import { useEffect, useState } from "react";
import "./CharacterById.css";
import { useParams } from "react-router-dom";

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
            <img
              src="https://www.pngall.com/wp-content/uploads/2016/06/Classified-Stamp-Transparent.png"
              alt="clasified"
            />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterById;
