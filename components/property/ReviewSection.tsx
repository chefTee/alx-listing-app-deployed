import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import star from "@/public/assets/icons/Star-2.svg"
import { PropertyProps } from "@/interfaces";
import { useRouter } from "next/router";

const ReviewSection = () => {
    const router = useRouter();
    const { id } = router.query;

    const [property, setProperty] = useState<PropertyProps | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return; // Don't fetch if id is not available yet

        const fetchProperty = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`);
                setProperty(response.data);
                setError(null);
            } catch (error) {
                console.error("Error fetching property:", error);
                setError("Failed to load reviews");
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if (loading) {
        return <p>Loading reviews...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!property) {
        return <p>No property data found</p>;
    }

    return (
        <div className="py-4 mt-4" id="review">
            <div className="flex items-center space-x-2">
                <Image src={star} alt="star" className="w-[20.42px] h-[19.42px]" />
                <span className="text-black font-semibold">{property.rating}</span>
                <span className="text-[#929292]">({property.reviews.count} reviews)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-4">
                {property.reviews.list.map((review, index) => (
                    <div key={index} className="p-4">
                        <div className="flex items-center space-x-2 mb-2">
                            <div className="w-[94px] h-[94px] relative">
                                <Image
                                    src={review.reviewerImage}
                                    alt={review.reviewerName}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <span className="font-semibold">
                                {review.reviewerName}
                            </span>
                        </div>
                        <div className="flex items-center space-x-4 py-2">
                            <span>{review.date}</span>
                            <span className="text-[#6C6C6C]">{review.travelType}</span>
                        </div>
                        <p className="py-2">
                            {review.comment}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;