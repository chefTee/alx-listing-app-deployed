import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import star from "@/public/assets/icons/Star-2.svg"
import location from "@/public/assets/icons/Map Point.svg"
import profile1 from "@/public/assets/icons/profile.svg"
import Link from "next/link";
import ReviewSection from "./ReviewSection";
import BookingSection from "./BookingSection";



const PropertyDetail: React.FC<{
    property:
    PropertyProps
}> = ({ property }) => {



    return (


        <div className="container mx-auto p-6 md:max-w-[70%]">
            <h3 className="text-2xl font-bold">{property.name}</h3>
            <div className="flex items-center space-x-2 mt-2 text-[#929292] text-xs">
                <div className=" flex items-center space-x-2">
                    <Image src={star} alt="star" className="w-[20.42] h-[19.42]" />
                    <span className="text-black font-semibold">{property.rating} </span>
                    <span className="">({property.reviews.count} reviews)</span>
                </div>
                <div className=" flex items-center space-x-2">
                    <Image src={location} alt="location" className="w-[20.42] h-[19.42]" />
                    <span>{property.address.city}, {property.address.country}</span>
                </div>
                <div className=" flex items-center space-x-2">
                    <Image src={profile1} alt="profile1" className="w-[20.42] h-[19.42]" />
                    <span>Mainstream</span>
                </div>


            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-2 mt-6  ">
                <div className="sm:col-span-2 relative min-h-[200px] col-span-3">
                    <Image src={property.image} alt={property.name} className=" object-fit-contain rounded-xl" fill />
                </div>
                <div className="sm:grid grid-rows-2 gap-1 relative hidden ">
                    <div className="w-full">
                        <Image src={property.image} alt={property.name} className="w-full object-fit-contain rounded-xl " height={660} width={340} />
                    </div>
                    <div className="grid grid-cols-2 gap-1  h-full">
                        <div className="relative h-full ">
                            <Image src={property.image} alt={property.name} className=" object-fit-contain rounded-xl" fill />

                        </div>
                        <div className="relative h-full ">
                            <Image src={property.image} alt={property.name} className=" object-fit-contain rounded-xl" fill />

                        </div>
                    </div>

                </div>
                {/* Add more images */}
            </div>

            <div className=" flex space-x-2 mt-6 py-4 text-secondaryDarkColor max-w-[370px]  ">
                <div className="flex items-center justify-center border-[1.34px] border-shimmer  rounded-full px-2 py-1">
                    <Image src={"/assets/icons/bed.svg"} alt="bed" width={15.36} height={15.36} />
                    <p className="ml-1 text-xs font-medium">{property.offers.bed} Bedrooms</p>
                </div>
                <div className="flex items-center justify-center border-[1.34px] border-shimmer rounded-full px-2 py-1 ">
                    <Image src={"/assets/icons/bathtub.svg"} alt="shower" width={15.36} height={15.36} />

                    <p className="ml-1 text-xs font-medium">{property.offers.shower} Bathrooms</p>
                </div>
                <div className="flex items-center justify-center border-[1.34px] border-shimmer  rounded-full px-2 py-1">
                    <Image src={"/assets/icons/people.svg"} alt="people" width={15.36} height={15.36} />

                    <p className="ml-1 text-xs font-medium">{property.offers.occupants} guests</p>
                </div>
            </div>



            {/* Navigate Links */}
            <hr className="text-shimmer" />
            <div className="flex justify-between items-start sm:flex-row flex-col">

                <div className="md:w-[60%] w-[100%] text-xs">
                    <div className="flex items-center space-x-2 pt-4 border-b-2 border-shimmer ">
                        <Link className="px-2 pb-2 h-8 hover:border-b-2 
                border-primaryColor hover:text-primaryColor" href="#description">Description</Link>
                        <Link className="px-2 pb-2 h-8 hover:border-b-2 border-primaryColor
                hover:text-primaryColor" href="#offer">What we offer</Link>
                        <Link className="px-2 pb-2 h-8 hover:border-b-2 border-primaryColor
                hover:text-primaryColor" href="#review">Reviews</Link>
                        <Link className="px-2 pb-2 h-8 hover:border-b-2 border-primaryColor
                hover:text-primaryColor" href="#host">About host</Link>
                    </div>

                    {/* Description */}
                    <div className="mt-4 py-4 " id="description">
                        <h2 className="text-2xl font-semibold">Description</h2>
                        <p>{property.description}</p>
                    </div>
                    <hr className="text-shimmer" />
                    {/* Amenities */}
                    <div className="mt-4 py-4 " id="offer">
                        <h2 className="text-2xl font-semibold">What this place offers</h2>
                        <p className="py-2">Each home is fully equipped to meet your needs, with ample space and privacy.</p>
                        <ul className="flex flex-wrap space-x-4 space-y-2 mt-4">
                            {property.offers.amenities?.map((amenity, index) => (
                                <li key={index} className="h-[40px] bg-gray-100 p-2 rounded-xl">
                                    {amenity}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <hr className="text-shimmer" />

                    {/* review section */}


                    <ReviewSection />
                </div>

                <div className="sm:w-[30%] m-auto sm:m-0 ">
                    <BookingSection price={property.price} />
                </div>
            </div>


        </div>


    );
};

export default PropertyDetail;

