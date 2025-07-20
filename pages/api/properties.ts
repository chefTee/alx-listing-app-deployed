// pages/api/properties.ts
import { NextApiRequest, NextApiResponse } from 'next';

const properties = [
  {
    id: 1,
    name: "Villa Arrecife Beach House",
    image: "/assets/image1.png", // Make sure these images exist
    category: ["Villa", "Beach", "Luxury"],
    address: {
      state: "Bali",
      city: "Sidemen", 
      country: "Indonesia"
    },
    rating: 4.8,
    offers: {
      bed: 4,
      shower: 2,
      occupants: "2-4"
    },
    price: 2450
  },
  {
    id: 2,
    name: "Entire cabin",
    image: "/assets/image2.png",
    category: ["Cabin", "Countryside"],
    address: {
      state: "Rio de Janeiro",
      city: "Nova Friburgo",
      country: "Brazil"
    },
    rating: 4.2,
    offers: {
      bed: 1,
      shower: 1,
      occupants: "3"
    },
    price: 62
  },
  {
    id: 3,
    name: "Earthen home",
    image: "/assets/image3.png",
    category: ["Unique", "Eco-friendly"],
    address: {
      state: "Magdalena",
      city: "Santa Marta",
      country: "Colombia"
    },
    rating: 4.6,
    offers: {
      bed: 4,
      shower: 2,
      occupants: "6"
    },
    price: 386
  },
  {
    id: 4,
    name: "Private room",
    image: "/assets/image4.png",
    category: ["Room", "Budget"],
    address: {
      state: "Minas Gerais",
      city: "Moeda",
      country: "Brazil"
    },
    rating: 4.3,
    offers: {
      bed: 1,
      shower: 1,
      occupants: "2"
    },
    price: 134
  },
  {
    id: 5,
    name: "Gokce Gemile Estate",
    image: "/assets/image5.png",
    category: ["Estate", "Luxury", "Pool"],
    address: {
      state: "Muğla",
      city: "Kayaköy",
      country: "Turkey"
    },
    rating: 4.9,
    offers: {
      bed: 6,
      shower: 6,
      occupants: "12"
    },
    price: 980
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Add a small delay to simulate real API
    setTimeout(() => {
      res.status(200).json(properties);
    }, 500);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}