import React from 'react'
import Image from "next/image";
import NavigateSorts from './NavigateSorts';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='sticky top-0 z-10'>
            <div className="bg-primaryColor ">
                <header className="max-w-[1728px] m-auto h-[92px] sm:h-[47px] sm:pt-[7px] pt-[46px] px-[21px] sm:pb-[10px] flex justify-center items-center gap-[17px]">
                    <Image src="/assets/icons/Case Minimalistic.svg" alt="Case Minimalistic" width={24} height={24} />
                    <span className="text-xs sm:text-base font-semibold text-background w-[244px] sm:w-[440px]">Overseas trip? Get the latest information on travel guides</span>
                    <Link href={"/"} className="h-[27px] min-w-[69px] sm:h-[31px] sm:w-[83px] px-[14px] py-2 bg-secondaryDarkColor text-background text-[9px] sm:text-xs font-semibold rounded-[50px] cursor-pointer">More Info</Link>
                </header>
            </div>
            <div>
                <header className="max-w-[1728px] m-auto flex justify-between items-center h-[88px] px-[20px] lg:pl-[39.55px] lg:pr-[39px] xl:pl-[59.55px] xl:pr-[60px] border-b border-[#EBEBEB] bg-background">
                    <Link href={"/"}> <Image className='hidden lg:block' src="/assets/logos/ALX.svg" alt="alx logo" width={58.73} height={30.6} /></Link>

                    <div className='hidden lg:block'>
                        <div className="datePicker h-[58px] sm:w-[737px] pl-[30px] pr-[11px] border-shimmer border-[1px]  rounded-[60px] py-[8px] flex items-center ">
                            <div className="flex flex-col justify-center items-start gap-[6px] w-[308.5px] h-[40px] border-r-[1px] border-[#E9E9E9]">
                                <div className='w-[133px]'>
                                    <label htmlFor="location" className="font-medium  text-sm">Location</label>
                                    <input id='location' type="text" placeholder="Search for destination" className="outline-none font-normal text-[13px] text-[#BEBEBE]" />
                                </div>

                            </div>

                            <div className="flex flex-col justify-center items-start pl-[21.5px] gap-[6px] w-[calc(435px-308.5px)] h-[40px] border-r-[1px] border-[#E9E9E9]">
                                <div className='w-[56px]'>
                                    <label htmlFor="checkIn" className="font-medium text-sm ">Check in</label>
                                    <input id='checkIn' type="text" placeholder="Add date" className="outline-none font-normal text-[13px] text-[#BEBEBE] w-[56px]" />
                                </div>

                            </div>
                            <div className="flex flex-col justify-center items-start pl-[21px] gap-[6px] w-[calc(571px-435px)] h-[40px] border-r-[1px] border-[#E9E9E9]">
                                <div className='w-[66px]'>
                                    <label htmlFor="checkOut" className="font-medium text-sm ">Check out</label>
                                    <input id='checkOut' type="text" placeholder="Add date" className="outline-none font-normal text-[13px] text-[#BEBEBE] w-[56px]" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-start pl-[calc(576px-571px)] gap-[6px] w-[calc(684px-571px)] h-[40px] ">
                                <div className='w-[66px]'>
                                    <label htmlFor="people" className="font-medium text-sm ">People</label>
                                    <input id='people' type="text" placeholder="Add guest" className="outline-none font-normal text-[13px] text-[#BEBEBE] w-[56px]" />
                                </div>
                            </div>
                            <span className='w-[42px] h-[42px] bg-secondaryColor relative rounded-[50px]'>
                                <Image src={"/assets/icons/Magnifer.svg"} alt='magnifer' width={20} height={20} className='absolute left-[50%] top-[50%] translate-[-50%]' />
                            </span>

                        </div>
                    </div>


                    <div className='block lg:hidden'>
                        <div className="datePicker h-[58px] w-[280px] pl-[20px] pr-[5px] border-shimmer border-[1px]  rounded-[60px] py-[8px] flex items-center justify-center ">
                            <div className="flex flex-col justify-center items-start gap-[6px] w-[235px] h-[40px] ">
                                <div className='w-[185px]'>
                                    <span className="font-medium text-sm">Where to</span>
                                    <div className="flex items-center gap-[9px] font-normal text-[13px] text-[#BEBEBE]" >
                                        Location <span className='w-[3px] h-[3px] bg-[#9C9C9C] rounded-[50%]'></span> Data <span className='w-[3px] h-[3px] bg-[#9C9C9C] rounded-[50%]'></span> Add guest
                                    </div>
                                </div>

                            </div>

                            <span className='w-[42px] h-[42px] bg-secondaryColor relative rounded-[50px]'>
                                <Image src={"/assets/icons/Magnifer.svg"} alt='magnifer' width={20} height={20} className='absolute left-[50%] top-[50%] translate-[-50%]' />
                            </span>

                        </div>
                    </div>
                    <div className='block xl:hidden'>
                        <div className='bg-primaryColor w-[46px] h-[46px] rounded-full flex justify-center cursor-pointer'>
                            <Image src={'/assets/icons/profile-2.svg'} alt='profile' width={44.03} height={44.02} />
                        </div>
                    </div>
                    <div className='hidden xl:block'>
                        <div className='w-[214px] h-[45px] flex justify-between items-center'>
                            <button className='w-[103px] h-[45px] px-[25px] bg-primaryColor rounded-[70px] text-background text-[17px] font-normal cursor-pointer'>Sign in</button>
                            <button className='w-[103px]  h-[45px] px-[21px] bg-background rounded-[70px] text-secondaryDarkColor text-[17px] font-normal border-[1px] border-[#ECECEC] cursor-pointer '>Sign up</button>
                        </div>

                    </div>
                </header>
            </div>
            <NavigateSorts />

        </div>
    )
}

export default Header