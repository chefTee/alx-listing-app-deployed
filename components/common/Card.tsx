import Image from "next/image"
import star from "@/public/assets/icons/Star-2.svg"
import Pill from "./Pill"
import axios from "axios"
import { PropertyProps } from "@/interfaces"
import { useEffect, useState } from "react"
import Link from "next/link"

const Card = () => {
    const [propertyData, setPropertyData] = useState<PropertyProps[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getCardData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`)
                console.log('API Response:', response.data); // Debug log
                
                // Handle different response structures
                if (Array.isArray(response.data)) {
                    setPropertyData(response.data);
                } else if (response.data && Array.isArray(response.data.properties)) {
                    setPropertyData(response.data.properties);
                } else if (response.data && Array.isArray(response.data.data)) {
                    setPropertyData(response.data.data);
                } else {
                    console.error('Unexpected API response structure:', response.data);
                    setError('Invalid data structure received from API');
                }

            } catch (error) {
                console.error("Error fetching properties:", error);
                setError('Failed to fetch properties');
            } finally {
                setLoading(false);
            }
        }

        getCardData()
    }, [])

    if (loading) {
        return <p>Loading Properties...</p>;
    }

    if (error) {
        return <p className="text-red-500">Error: {error}</p>;
    }

    if (!propertyData || propertyData.length === 0) {
        return <p>No properties available.</p>;
    }

    return (
        <div className="max-w-[1728px] grid grid-cols-1 min-[900px]:grid-cols-2 2xl:grid-cols-4 gap-[37.13px] min-md:gap-[31px] justify-items-center 2xl:min-w-[1607.23px] lg:w-[944px] m-auto mt-[30px]">
            {propertyData.map((item) => (
                <Link href={`/property/${item.id}`} key={item.id} className="h-[435px] lg:h-[505px] lg:w-[378.56px] md:w-[453.43px] 2xl:h-[422.7px] w-[360px] cursor-pointer  flex flex-col justify-between">
                    <div className="h-[308.41px]  lg:h-[358.58px] 2xl:h-[299.37px] relative">
                        <Image className="rounded-lg h-[262.71px] 2xl:h-[255px] lg:h-[305.44px]" src={item.image} alt={item.name} fill />
                    </div>
                    <div className="py-2 flex gap-2 mt-2">
                        {item.category?.map((category, i) => (
                            <span key={`${category}-${i}`}>
                                <Pill title={category} />
                            </span>
                        ))}
                    </div>
                    <div className="flex items-start justify-between h-[52.68px] lg:h-[61.12px] 2xl:h-[51.6px] ">
                        <div>
                            <h3 className=" font-semibold text-[22px] line-clamp-1">{item.name}</h3>
                            <p className=" font-medium text-[17.5px] text-secondaryDarkColor">{item.address?.state}, {item.address?.city}, {item.address?.country}</p>
                        </div>
                        <div className="flex items-center">
                            <Image src={star} alt="star" className="w-[20.42] h-[19.42]" />
                            <p className=" font-medium text-[17.51px] ml-2">{item.rating?.toFixed(2) || '0.00'}</p>
                        </div>
                    </div>

                    <div className="flex justify-between mt-4 h-[38.12px] lg:h-[44.32px] 2xl:h-[37px]">
                        <div className=" grid grid-cols-3 border-[1.34px] border-shimmer min-w-[156px] rounded-full px-2 py-1">
                            <div className="flex items-center">
                                <Image src={"/assets/icons/bed.svg"} alt="bed" width={20.36} height={20.36} />
                                <p className="ml-1 text-[12.95px] font-medium">{item.offers?.bed || 0}</p>
                            </div>
                            <div className="flex items-center">
                                <Image src={"/assets/icons/bathtub.svg"} alt="shower" width={20.36} height={20.36} />
                                <p className="ml-1 text-[12.95px] font-medium">{item.offers?.shower || 0}</p>
                            </div>
                            <div className="flex items-center">
                                <Image src={"/assets/icons/people.svg"} alt="people" width={20.36} height={20.36} />
                                <p className="ml-1 text-[12.95px] font-medium">{item.offers?.occupants || 0}</p>
                            </div>
                        </div>
                        <p className=" text-[22px] font-semibold">${item.price}<span className=" text-[14px] text-secondaryDarkColor">/n</span></p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Card