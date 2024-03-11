import { CharacterCard, PersonajesResponse, SimplePersonajes } from "@/dragon-ball/Index";
import { CharacterGrid } from "@/dragon-ball/components/CharacterGrid";
import Image from "next/image";

const getDragonBallPersonajes = async (page = 1, limit = 10): Promise<SimplePersonajes[]> => {
    const data: PersonajesResponse = await fetch(
        `https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`)
        .then(res => res.json());

    const personajes = data.items.map(personaje => ({
        id: personaje.id,
        name: personaje.name,
        image: personaje.image
    }));

    return personajes;
}

const DragonBallPage = async () => {
    const dbPersonajes = await getDragonBallPersonajes(1, 58);

    
    //throw new Error('Error intencional');
    
    return (
        <div className="flex flex-col">
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {
                    /*dbPersonajes.map((personaje) =>
                    (
                        <Image
                        className="rounded w-14"
                            key={personaje.id}
                            src={personaje.image}
                            width={300}
                            height={300}
                            alt={personaje.name}
                        />
                    ))*/
                }
                <CharacterGrid characters={dbPersonajes}/>
            </div>

        </div>
    )
}

export default DragonBallPage
