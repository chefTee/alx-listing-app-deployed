
interface TAddress {
    state: string;
    city: string;
    country: string;
}

interface TOffers {
    bed: string;
    shower: string;
    occupants: string;
    amenities?: string[];
}

interface TReviewList {
    reviewerName: string;
    reviewerImage: string;
    date: string;
    comment: string;
    travelType: string;
}

export interface TReview {
    count: number;
    list: TReviewList[];
}

export interface PropertyProps {
    id: string;
    name: string;
    address: TAddress;
    rating: number;
    category: string[];
    price: number;
    offers: TOffers;
    image: string;
    discount: string;
    reviews: TReview;
    description: string;


}


export interface TReservation {
    id: number;
    title: string;
    image: string;
}


export interface PillProps {
    id?: number
    title: string
}