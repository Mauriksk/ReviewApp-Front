"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Atracctions } from "./AtractionsType";

export const AtractionsList = () => {

    const [ProductsList, setProductsList] = useState<Atracctions[]>([])
    useEffect(() => {
        (async () => {
            await fetch("http://localhost:3000/api/restaurants")
                .then(data => data.json())
                .then(data => setProductsList(data))
                .catch(err => console.log(err))
        })()
    }, [])

    return (
        <div className="columns-3">

            {
                ProductsList.map(atrctions => (

                    <div key={atrctions.place_id} className="mb-10 ml-3 mr-3 max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white shadow transition-transform duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105">
                        <Image className="w-full object-cover" width={2000} height={2000} src={atrctions.imageUrl} alt="Restaurant image" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{atrctions.name}</div>
                            <p className="text-gray-700 text-base">
                                {atrctions.formatted_address}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            
                        </div>
                    </div>

                ))
            }
        </div>
    )
}
