"use client"
import Image from "next/image";
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
    //<Image className="w-full object-cover" width={2000} height={2000} src={details?.imagesData[0]} alt="Restaurant image" />

    useEffect(() => {
        (async () => {
            const detailsData: DetailsType = await getDetails(id || "")
            console.log("aca esta la data ", detailsData)
            setDetails(detailsData)
        })()
    }, [])
    return (
        <>
        <div className="flex gap-4 overflow-x-auto">
            {details?.imagesData[0] && (
                // <div
                //     className="mb-10 ml-0 mr-0 pb-1 w-[50vw] h-[40vh] overflow-hidden shadow-lg bg-white rounded-b-3xl"
                // >
                //     <Image
                //         className="w-full h-full object-cover"
                //         width={4000}
                //         height={4000}
                //         src={details.imagesData[0]}
                //         alt="Restaurant image"
                //     />
                // </div>
                
                details?.imagesData.map((item, index) => (
                    <details
                        key={index}
                        className="relative w-80 h-[30rem] rounded-2xl overflow-hidden flex flex-col"
                    >
                        <summary className="relative flex items-center justify-center w-20 h-full bg-gray-100 text-xl cursor-pointer">
                            {/* <span>{item.emoji}</span> */}
                            <Image
                                className="absolute inset-0 w-full h-full object-cover z-[-1] transition-all duration-500 filter brightness-100"
                                src={item}
                                alt={`img${index}`}
                                width={400}
                                height={400}
                            />
                        </summary>
                        {/* <div className="p-4 bg-white h-full overflow-y-auto">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="mt-2 text-sm">{item.description}</p>
                      </div> */}
                    </details>
                ))
            )}
            </div>
        </>

    )
}

export default DetailsPage