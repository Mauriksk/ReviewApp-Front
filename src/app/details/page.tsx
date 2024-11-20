"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface DetailsType {
    imagesData: string[]
}

const DetailsPage = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [details, setDetails] = useState<DetailsType>()
    const getDetails = async (id: string): Promise<DetailsType> => {
        const detailsData: DetailsType = await fetch(`http://localhost:3000/api/details?id=${id}`)
            .then(data => data.json())
            .then(data => data)
            .catch(err => console.log(err))

        return detailsData
    }

    useEffect(() => {
        (async () => {
            const detailsData: DetailsType = await getDetails(id || "")
            console.log("aca esta la data ", detailsData)
            setDetails(detailsData)
        })()
    }, [])
    return (
       <div>hola papa</div>
    )
}

export default DetailsPage