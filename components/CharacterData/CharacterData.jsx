const CharacterData = ({ character, className = "", id = "", mostrarLocation }) => {
  return (
    <>
      <p>name: {character.name}</p>
      <p className={className}>status: {character.status}</p>
      <p className={className}>species: {character.species}</p>
      <p className={className}>gender: {character.gender}</p>
      {mostrarLocation && <p>location: {character.location.name}</p>}
      <p className={className} id={id}>id: 00{character.id}</p>
    </>
  );
};

export default CharacterData;
