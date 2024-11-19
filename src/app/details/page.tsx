"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DetailsPage = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [details, setDetails] = useState()
    const getDetails = async (id: string) => {
        await fetch(`http://localhost:3000/api/details?id=${id}`)
            .then(data => data.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        (async () => {
            getDetails(id || "")
        })()
    }, [])
    return (
        <div>page {id}</div>
    )
}

export default DetailsPage