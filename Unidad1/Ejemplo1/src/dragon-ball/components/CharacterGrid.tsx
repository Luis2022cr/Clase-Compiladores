import { CharacterCard, SimplePersonajes } from "../Index"

interface Props {
    characters: SimplePersonajes[]
}

export const CharacterGrid = ({ characters}: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {
        characters.map((character) => (
          <CharacterCard key={character.id} character={character}/>
        ) )
      }
    </div>
  )
}
 
