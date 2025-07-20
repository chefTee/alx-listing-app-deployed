import CancellationPolicy from "@/components/booking/CancellationPolicy";
// import OrderSummary from "@/components/booking/OrderSummary";
import axios from "axios";
import { useState } from "react";


export interface TAllFormData {
    fName: string;
    lName: string;
    email: string;
    phone: string;
    cardType: string;
    cardNo: string;
    expDate: string;
    cvv: string;
    streetAdd: string;
    aptNo: string;
    city?: string;
    state: string;
    zipCode: string;
    country: string
}

export default function BookingForm() {
    const [formData, setFormData] = useState<TAllFormData>({ fName: "", lName: "", email: "", phone: "", cardType: "", cardNo: "", expDate: "", cvv: "", streetAdd: "", aptNo: "", city: "", state: "", zipCode: "", country: "" })


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`, formData);
            alert("Booking confirmed!");
        } catch (err) {
            if (axios.isAxiosError(err)) {
                setError(err.response?.data?.message || err.message);
            } else if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    const handelerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }


    return (
        <div>
            <div>
                {/* <OrderSummary bookingDetails={ } /> */}
            </div>
            <div className="container m-auto bg-white p-6 ">
                <h2 className="text-xl font-semibold">Contact Detail</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                        <div>
                            <label className="text-[17px] font-bold">First Name</label>
                            <input onChange={handelerChange} name="fName" value={formData.fName} type="text" className="border border-bookingFormBorder p-2 w-full mt-2 rounded-sm" />
                        </div>
                        <div>
                            <label className="text-[17px] font-bold">Last Name</label>
                            <input onChange={handelerChange} name="lName" value={formData.lName} type="text" className="border border-bookingFormBorder p-2 w-full mt-2 rounded-sm" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  mt-4">
                        <div>
                            <label className="text-[17px] font-bold"> Email</label>
                            <input onChange={handelerChange} name="email" value={formData.email} type="email" className="border border-bookingFormBorder p-2 w-full mt-2 rounded-sm" />
                        </div>
                        <div>
                            <label className="text-[17px] font-bold">Phone Number</label>
                            <input onChange={handelerChange} name="phone" value={formData.phone} type="text" className="border border-bookingFormBorder p-2 w-full mt-2 rounded-sm" />
                        </div>
                    </div>

                    {/* Payment Information */}
                    <h2 className="text-xl font-semibold mt-6">Pay with</h2>
                    <div className="mt-4">
                        <label className="text-[17px] font-bold">Card Number</label>
                        <input onChange={handelerChange} name="cardNo" value={formData.cardNo} type="text" className="border border-bookingFormBorder p-2 w-full mt-2 rounded-sm" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="text-[17px] font-bold">Expiration Date</label>
                            <input onChange={handelerChange} name="expDate" value={formData.expDate} type="text" className="border border-bookingFormBorder p-2 w-full mt-2 rounded-sm" />
                        </div>
                        <div>
                            <label className="text-[17px] font-bold">CVV</label>
                            <input onChange={handelerChange} name="cvv" value={formData.cvv} type="text" className="border border-bookingFormBorder p-2 w-full mt-2 rounded-sm" />
                        </div>
                    </div>

                    {/* Billing Address */}
                    <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
                    <div className="mt-4 ">
                        <label className="text-[17px] font-bold">Street Address</label>
                        <input onChange={handelerChange} name="streetAdd" value={formData.streetAdd} type="text" className="border border-bookingFormBorder p-2 w-full mt-2 rounded-sm" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="text-[17px] font-bold">City</label>
                            <input onChange={handelerChange} name="city" value={formData.city} type="text" className="border border-bookingFormBorder p-2 w-full mt-2 rounded-sm" />
                        </div>
                        <div>
                            <label className="text-[17px] font-bold">State</label>
                            <input onChange={handelerChange} name="state" value={formData.state} type="text" className="border border-bookingFormBorder p-2 w-full mt-2 rounded-sm" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="text-[17px] font-bold">Zip Code</label>
                            <input onChange={handelerChange} name="zipCode" value={formData.zipCode} type="text" className="border border-bookingFormBorder p-2 w-full mt-2 rounded-sm" />
                        </div>
                        <div>
                            <label className="text-[17px] font-bold">Country</label>
                            <input onChange={handelerChange} name="country" value={formData.country} type="text" className="border border-bookingFormBorder p-2 w-full mt-2 rounded-sm" />
                        </div>
                    </div>

                    <CancellationPolicy />


                    <button type="submit" disabled={loading} className="p-2 mt-6 w-[200px] bg-primaryColor text-white rounded-xl">
                        {loading ? "Processing..." : "Confirm & Pay"}
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
            </div>
        </div>

    );
}