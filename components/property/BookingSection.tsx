import Link from "next/link";
import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Format dates for input fields (YYYY-MM-DD)
    const formatDateForInput = (date: Date) => date.toISOString().split('T')[0];

    const [requiredDates, setRequiredDates] = useState({
        checkIn: formatDateForInput(today),
        checkOut: formatDateForInput(tomorrow)
    });

    // Calculate number of nights
    const calculateNights = () => {
        const checkInDate = new Date(requiredDates.checkIn);
        const checkOutDate = new Date(requiredDates.checkOut);
        const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
        return Math.max(0, Math.ceil(timeDiff / (1000 * 3600 * 24)));
    };

    const nights = calculateNights();
    const totalPrice = nights * price;

    return (
        <div className="bg-white p-6 shadow-md rounded-lg min-w-[250px]">
            <h3 className="text-xl font-semibold">${price}/night</h3>

            <div className="mt-4">
                <label>Check-in</label>
                <input
                    onChange={(e) => setRequiredDates({ ...requiredDates, checkIn: e.target.value })}
                    type="date"
                    name="checkIn"
                    value={requiredDates.checkIn}
                    min={formatDateForInput(new Date())}
                    className="border rounded-lg p-2 w-full mt-2"
                />
            </div>

            <div className="mt-4">
                <label>Check-out</label>
                <input
                    onChange={(e) => setRequiredDates({ ...requiredDates, checkOut: e.target.value })}
                    type="date"
                    name="checkOut"
                    value={requiredDates.checkOut}
                    min={requiredDates.checkIn}
                    className="border rounded-lg p-2 w-full mt-2"
                />
            </div>

            {/* Total payment */}
            <div className="mt-4">
                <p>
                    Total payment: <strong>${totalPrice}</strong>
                    <span className="text-xs"> / {nights} night{nights !== 1 ? 's' : ''}</span>
                </p>
            </div>

            {/* Reserve button */}
            <Link href={`/booking`}>
                <button className="mt-4 bg-primaryColor text-white py-2 px-4 rounded-md w-full cursor-pointer">
                    Reserve now
                </button>
            </Link>
        </div>
    );
};

export default BookingSection;