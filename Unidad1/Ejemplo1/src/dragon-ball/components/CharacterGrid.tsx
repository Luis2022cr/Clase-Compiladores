import { SimplePersonajes } from "../Index"

interface Props {
    characters: SimplePersonajes[]
}

export const CharacterGrid = ({ characters}: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
    </div>
  )
}

