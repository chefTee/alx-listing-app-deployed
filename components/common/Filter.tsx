import React, { useState } from 'react'
import Image from 'next/image'
import { PROPERTYLISTINGSAMPLE } from '@/constants'

const Filter = () => {

    const [filter, setFilter] = useState<string>("all")
    const [showList, setShowList] = useState<boolean>(false)

    const features = new Set(PROPERTYLISTINGSAMPLE.map((item) => {
        return item.category
    })
        .reduce((prev, cur) => { return prev.concat(cur) }))

    return (
        <>
            <div className='md:hidden '>
                <div className='h-[37px] mt-[30px]  overflow-x-scroll flex justify-start scrollbar-hide'>
                    <div className='flex justify-center border-[1.09px] ml-[21px] border-[#E9E9E9] min-w-[37px] h-full rounded-full mr-[5px]'>
                        <Image src={"./assets/icons/Filter.svg"} alt='filter' width={17.41} height={17.41} />
                    </div>
                    <div className='flex h-[37px] items-center justify-center '>
                        <div onClick={() => setFilter("all")} className={`whitespace-nowrap text-[19px] font-[600] pl-[17.41px] pr-[17.41px] capitalize border-[1.5px] rounded-[30px] ${filter == "all" ? `border-primaryColor bg-[#F0FFFB] text-primaryColor` : `border-shimmer `} w-auto h-[37px]  mx-[5px] flex items-center cursor-pointer `}>
                            <span>
                                all
                            </span>
                        </div>
                        {[...features].map((el, index) => {
                            return (
                                <div onClick={() => setFilter(el)} key={index} className={`whitespace-nowrap text-[19px] font-[600] pl-[24px] pr-[24x] capitalize border-[1.5px] rounded-[30px] ${filter == el ? `border-primaryColor bg-[#F0FFFB] text-primaryColor
` : `border-shimmer`} w-auto h-[37px]  mx-[7.5px] flex items-center cursor-pointer`}>
                                    <span >{el}</span>
                                </div>
                            )
                        })}
                    </div>


                </div>
            </div>
            <div className='h-[135.73px] hidden md:flex items-center w-full justify-between min-w-[768px]'>
                <div className='flex justify-start  '>
                    <div className='h-[51px] sm:w-[330px] lg:w-[424px] ml-[21px] lg:ml-[40px]'>
                        <div className='flex h-[51px] items-center justify-start  overflow-hidden'>
                            <div onClick={() => setFilter("all")} className={`whitespace-nowrap text-[19px] font-[600] pl-[24px] pr-[24px] capitalize border-[1.5px] rounded-[30px] ${filter == "all" ? `border-primaryColor bg-[#F0FFFB] text-primaryColor` : `border-shimmer `} w-auto h-[51px]  mr-[7.5px] flex items-center cursor-pointer `}>
                                <span>
                                    all
                                </span>
                            </div>
                            {[...features].map((el, index) => {
                                return (
                                    <div key={index} onClick={() => setFilter(el)} className={`whitespace-nowrap text-[19px] font-[600] pl-[17.41px] pr-[17.41px] capitalize border-[1.5px] rounded-[30px] ${filter == el ? `border-primaryColor bg-[#F0FFFB] text-primaryColor
` : `border-shimmer`} w-auto h-[51px]  mx-[7.5px] flex items-center cursor-pointer`}>
                                        <span >{el}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='flex justify-center border-[1.09px]  border-[#E9E9E9] min-w-[51px] h-[51px] rounded-full ml-[31px] cursor-pointer relative' onClick={() => setShowList(!showList)}>
                        <Image src={"/assets/icons/Alt Arrow Down.svg"} alt='filter' width={24} height={24} />
                        <ul className={`${showList ? `flex` : `hidden`} flex-col absolute bg-white top-[60px] z-20`}>
                            {[...features].map((el, index) => {
                                return (
                                    <li onClick={() => setFilter(el)}
                                        key={index} className={`whitespace-nowrap text-[19px] font-[600] pl-[17.41px] pr-[17.41px] capitalize ${filter == el ? `border-primaryColor bg-[#F0FFFB] text-primaryColor
` : `border-shimmer`} w-auto h-[51px]  mx-[7.5px] flex items-center cursor-pointer p-2 border-b-2`}>
                                        <span >{el}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
                <div className='flex items-center gap-[10px]'>
                    <div className='flex justify-center border-[1.09px]  border-[#E9E9E9] min-w-[51px] h-[51px] rounded-full mr-[5px]'>
                        <Image src={"./assets/icons/Filter.svg"} alt='filter' width={24} height={24} />
                    </div>
                    <div className='flex justify-center border-[1.09px]  border-[#E9E9E9] w-[243px] h-[51px] rounded-full mr-[21px] lg:mr-[40px] items-center'>
                        <span className='text-[19px] font-[600] text-[#8C8C8C]'>Sort by:</span>
                        <span className='text-[19px] font-[600]'> Highest Price</span>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Filter