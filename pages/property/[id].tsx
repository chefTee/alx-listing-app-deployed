import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyDetail from '@/components/property/PropertyDetail';

export default function PropertyDetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchProperty = async () => {
            try {
                // const response = await axios.get(`http://localhost:5005/properties/${id}`);
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties/${id}`)
                setProperty(response.data);
            } catch (err) {
                setError('Failed to load property details');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if (loading) return <div>Loading property details...</div>;
    if (error) return <div>{error}</div>;
    if (!property) return <div>Property not found</div>;

    return (

        <PropertyDetail property={property} />

    );
}