import Link from "next/link"
import { SimplePersonajes } from "../Index"
import Image from "next/image"
import { IoHeartOutline } from "react-icons/io5"

interface Props {
    character: SimplePersonajes
}

export const CharacterCard = ({ character }: Props) => {
    const { id, name, image } = character
    return (
        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-gray-800 border-b">
                    <Image
                        className="w-20 h-40"
                        key={id}
                        src={image}
                        width={200}
                        height={200}
                        alt={name}
                        priority={false}
                    />

                    <p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>
                    <div className="mt-5">
                        <Link href={`character/${id}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
                            Más información
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex">

                        <div className="text-green-600">
                            <IoHeartOutline className="text-red-600" />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                No es favorito
                            </p>
                            <p className="text-xs text-gray-500">View your campaigns</p>
                        </div>

                    </Link>
                </div>
            </div>
        </div>
    )
}
