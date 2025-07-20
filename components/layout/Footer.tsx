import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className=' relative text-[#CACACA] w-full position-fixed bottom-0 mt-[100px]'>
            <div className='h-[29px] bg-primaryColor '></div>
            <div className='bg-secondaryDarkColor'>
                <div className='max-w-[1728px] h-[768px] lg:h-[717px] 2xl:h-[412px] bg-secondaryDarkColor 2xl:flex flex-row justify-between 2xl:pr-[60px] m-auto'>
                    <div>
                        <div className='pt-[25.96px] pl-[25.55px] lg:pl-[116px] 2xl:pl-[59.55px]'>
                            <Image src={"/assets/logos/Alx footer.svg"} alt="alx immage" width={58.73} height={30.6} />

                        </div>
                        <p className='pl-[26px] lg:pl-[116px] 2xl:pl-[59.55px] font-medium text-[11px] 2xl:text-[16px] 2xl:w-[640.45px]  mt-[38.44px] w-[375px] lg:w-[645px]'>
                            ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.
                        </p>
                    </div>
                    <div className='flex justify-between mt-[32px] pl-[48px] lg:pl-[116px] max-w-[293px] lg:max-w-[793px] 2xl:w-[793px] flex-wrap'>
                        <div className='flex flex-col'>
                            <span className='text-[16px] font-[600] mb-[18px]'>Explore</span>
                            <div className='flex flex-col justify-between items-start text-[12px] font-medium gap-[9px]'>
                                <span>
                                    Apartments in Dubai
                                </span>
                                <span>
                                    Hotels in New York
                                </span>
                                <span>
                                    Villa in Spain
                                </span>
                                <span>
                                    Mansion in Indonesia
                                </span>
                            </div>

                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[16px] font-[600] mb-[18px]'>Company</span>
                            <div className='flex flex-col justify-between items-start text-[12px] font-medium gap-[9px]'>
                                <span>
                                    About us
                                </span>
                                <span>
                                    Blog
                                </span>
                                <span>
                                    Career
                                </span>
                                <span>
                                    Customers
                                </span>
                                <span>
                                    Brand
                                </span>
                            </div>

                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[16px] font-[600] mb-[18px]'>Help</span>
                            <div className='flex flex-col justify-between items-start text-[12px] font-medium gap-[9px]'>
                                <span>
                                    Support
                                </span>
                                <span>
                                    Cancel booking
                                </span>
                                <span>
                                    Refunds Process
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className='max-w-[1728px] w-full h-[195px] 2xl:h-[66.5px] absolute bottom-0 left-[50%] translate-x-[-50%] 2xl:pl-[60px]  '>
                        <div className=' ml-[21px] 2xl:ml-[0] mr-[21px] 2xl:mr-[0] h-[1px] bg-[#CACACA]'></div>
                        <div className='2xl:flex justify-between items-center 2xl:pt-[15.5px] '>
                            <p className='text-[12px] 2xl:text-[16px] font-medium w-[307px] lg:w-[626px] 2xl:w-[626px] text-center mx-auto 2xl:m-0  mt-[18px]  leading-[26px] 2xl:mt-[0]'>
                                Some hotel requires you to cancel more than 24 hours before check-in. Details <a href="#" className='text-primaryColor'>here</a>
                            </p>
                            <div className='flex gap-[23px] items-center justify-between w-[299px] 2xl:w-[500px] text-[12px] 2xl:text-[16px] mx-auto 2xl:mx-0 2xl:pr-[59.55px] mt-[49px] 2xl:mt-[0]'>
                                <span>Terms of Service</span>
                                <span>Policy service</span>
                                <span>Cookies Policy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer