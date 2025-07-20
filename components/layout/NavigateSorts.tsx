"use client"
import { TReservation } from '@/interfaces'
import Image from 'next/image'
import { useState } from 'react'




const NavigateSorts = () => {

  const typesOfReservation: TReservation[] = [
    { id: 1, title: "Rooms", image: "/assets/logos/living-room.svg" },
    { id: 2, title: "Mansion", image: "/assets/logos/mansion.svg" },
    { id: 3, title: "Countryside", image: "/assets/logos/farm.svg" },
    { id: 4, title: "Villa", image: "/assets/logos/villa.svg" },
    { id: 5, title: "Tropical", image: "/assets/logos/palm-tree.svg" },
    { id: 6, title: "New", image: "/assets/logos/key-chain.svg" },
    { id: 7, title: "Amazing pool", image: "/assets/logos/swimming-pool.svg" },
    { id: 8, title: "Beach house", image: "/assets/logos/vacations.svg" },
    { id: 9, title: "Island", image: "/assets/logos/island.svg" },
    { id: 10, title: "Camping", image: "/assets/logos/tent.svg" },
    { id: 11, title: "Apartment", image: "/assets/logos/apartment.svg" },
    { id: 12, title: "House", image: "/assets/logos/home.svg" },
    { id: 13, title: "Lakefront", image: "/assets/logos/cottage.svg" },
    { id: 14, title: "Farm house", image: "/assets/logos/barn.svg" },
    { id: 15, title: "Treehouse", image: "/assets/logos/treehouse.svg" },
    { id: 16, title: "Cabins", image: "/assets/logos/cabin.svg" },
    { id: 17, title: "Castle", image: "/assets/logos/castle-tower.svg" },
    { id: 18, title: "Lakeside", image: "/assets/logos/farm2.svg" },
  ]

  const [selectedId, setSelectedId] = useState<number>(1)

  return (
    <nav className='max-w-[1728px] m-auto w-full h-[88px] sticky top-[135px] z-50 bg-background'>
      <div className='w-[91px] md:w-[108px] h-full bg-white blur-[1.5rem] absolute right-0'></div>
      <div className='flex items-center justify-between gap-[43px] pl-[21px] sm:pl-[41px] lg:pl-[61px] pr-[24px] overflow-x-scroll scrollbar-hide h-[84px]'>
        {typesOfReservation.map((item) => (
          <div key={item.id} className={`flex flex-col h-[84px] items-center justify-around gap-[5px] pt-[17px] pb-[17px] cursor-pointer shrink-0 ${selectedId == item.id ? `border-b-[5px] pb-11- border-[#0F4E3D]` : ""}`} onClick={() => setSelectedId(item.id)}>
            <Image src={item.image} alt={item.title} width={34} height={34} className={`max-w-[34px] ${selectedId == item.id ? `brightness-0` : ""}`} />
            <span className={`text-xs font-medium  max-h-[15px] ${selectedId == item.id ? `text-[#222222]` : `text-[#616161]`}`}>{item.title}</span>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default NavigateSorts