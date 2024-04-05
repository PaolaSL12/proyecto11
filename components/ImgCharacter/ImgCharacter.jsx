import React from 'react'

const ImgCharacter = ({character}) => {
  return (
    <img src={character.image} alt={character.name} />
  )
}

export default ImgCharacter