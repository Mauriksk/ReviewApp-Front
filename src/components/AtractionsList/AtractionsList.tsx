"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Atracctions } from "./AtractionsType";
import { StarsRating } from "../StarsRating/StarsRating";
import { SearchInput } from "../SearchInput/SearchInput";
import { SearchCategories } from "../SearchCategories/SearchCategories";

export const AtractionsList = () => {


    const [ProductsList, setProductsList] = useState<Atracctions[]>([])
    const [searchValues, setSearchValues] = useState<string>("")
    const [typeValues, setTypeValue] = useState<string>("")

    const queryParams = new URLSearchParams({
        place: searchValues,
        type: typeValues
    });

    useEffect(() => {
        (async () => {
            handlerOnSubmit()
        })()
    }, [])

    const handlerOnSubmit = async () => {
        await fetch(`http://localhost:3000/api/places?${queryParams}`)
            .then(data => data.json())
            .then(data => setProductsList(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <SearchInput value={searchValues} onChange={setSearchValues} onSumbit={handlerOnSubmit} />
            <SearchCategories onClick={setTypeValue} currentValue={typeValues} />
            <div className="columns-3">
                {
                    ProductsList.map(atractions => (

                        atractions.imageUrl ? ( // Verifica si imageUrl no está vacío
                            <div key={atractions.place_id} className="mb-10 ml-3 mr-3 pb-1 max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white transition-transform duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105">
                                <Image className="w-full object-cover" width={2000} height={2000} src={atractions.imageUrl} alt="Restaurant image" />
                                <div className="px-6 pt-4">
                                    <div className="font-bold text-xl mb-2">{atractions.name}</div>
                                    <p className="text-gray-700 text-base">
                                        {atractions.formatted_address}
                                    </p>
                                </div>

                                <div className="px-6 pt-2 pb-2 flex justify-between">
                                    <StarsRating rating={atractions.rating} totalReviews={atractions.user_ratings_total} />
                                    <p className="text-sm font-medium text-gray-900 underline cursor-pointer">
                                        See details
                                    </p>
                                </div>
                            </div>
                        ) : null

                    ))
                }
            </div>
        </>
    )
}
