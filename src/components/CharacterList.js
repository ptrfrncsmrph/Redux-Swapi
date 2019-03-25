import React from "react"

import Character from "./Character"

const CharacterList = ({ characters = [] }) => (
  <ul>
    {characters.map(character => (
      <Character key={character.name} {...character} />
    ))}
  </ul>
)

export default CharacterList
