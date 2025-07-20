import React from 'react'
import Image from 'next/image'
// import { Source_Sans_3 } from "next/font/google";
import Card from '@/components/common/Card';
import Filter from '@/components/common/Filter';

// const sansPro = Source_Sans_3({
//     subsets: ['latin'],
//     display: 'swap',
//     variable: '--font-source-sans', // Add this line
//     weight: ['400', '700'], // Explicitly declare weights you need
// });

const Home = () => {

    return (
        <div className='max-w-[1728px] m-auto'>
            <div className={`md:hidden`}><Filter /></div>
            <div className=" box-content mt-[37px] mx-[21px] lg:mx-[40px] 2xl:mx-[60px] min-w-[340px] lg:min-w-[944px] 2xl:w-[full] h-[296px] lg:h-[421px] 2xl:h-[481px] relative rounded-[11.13px] lg:rounded-[27px] overflow-hidden">
                <Image src={"/assets/Main.jpg"} fill alt="main" className="object-cover" />
                <div className="w-full h-full pt-[87px] lg:pt-[66px] 2xl:pt-[82px]  flex flex-col justify-centter items-baseline  absolute text-background  ">
                    <h1 className={`font-semibold w-[260.84px] h-[60px] lg:w-[633px] lg:h-[145px] 2xl:w-[867px] 2xl:h-[198px]  text-[28.28px] lg:text-[68.63px] 2xl:text-[94px] self-center text-center leading-[29.78px] lg:leading-[72.28px] 2xl:leading-[99px] `}>
                        Find your favorite place here!
                    </h1>
                    <h5 className="w-[189px] h-[9px] lg:w-[459px] lg:h-[23px] 2xl:w-[612px] 2xl:h-[30px] text-[7.42px] lg:text-[18px] 2xl:text-[24px] self-center text-center font-medium mt-[7.58px] lg:mt-[19px] 2xl:mt-[13px] ">
                        The best prices for over 2 million properties worldwide
                    </h5>
                </div>
            </div>

            <div className={`hidden md:flex`}><Filter /></div>
            <Card />
        </div>
    )
}

export default Home