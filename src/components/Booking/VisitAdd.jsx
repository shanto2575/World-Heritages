'use client'
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddToVisit = ({ heritage }) => {
    const [departureDate, setdepartureDate] = useState(null)
    const { siteName, country, imageUrl, unescoYear } = heritage;
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()

    const user = session?.user;
    const handleBookTour = async () => {
        const booking = {
            userName: user?.name,
            userImage: user?.image,
            userEmail: user?.email,
            userId: user?.id,
            siteName,
            country,
            imageUrl,
            unescoYear,
            departureDate:new Date(departureDate)
        }
        const {data:tokenData}=await authClient.token()
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                authorization:`Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(booking)
        })
        const data = await res.json()
        // console.log(data,'booking data fon')
        if(data){
            toast.success('Booking Successful')
        }
    }


    return (
        <div className="w-sm mx-auto bg-linear-to-r from-cyan-300 to-blue-300 rounded-3xl text-black p-8 shadow-xl flex flex-col md:flex-row items-center gap-8">

            {/* Left Info */}
            <div className="flex-1 space-y-3">
                <h2 className="text-3xl font-bold">Ready to Visit <br /> {siteName}?</h2>
                <p className="text-white/80">
                    Experience the beauty of this UNESCO heritage site in {country}.
                    Join our guided tour and explore history like never before.
                </p>

                <div className="flex gap-6 text-sm pt-2">
                    <span>🌍 UNESCO Listed: {unescoYear}</span>
                    <span>📍 {country}</span>
                    <span>⭐ Guided Tour</span>
                </div>
                <div>
                    <DateField onChange={setdepartureDate} className="w-[256px]" name="date">
                        <Label>Departure Date</Label>
                        <DateField.Group>
                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                        </DateField.Group>
                    </DateField>
                </div>
                <div className="flex gap-5 items-center">
                    <Button onClick={handleBookTour} className="mt-4 bg-white text-cyan-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100  transition">
                        Book a Tour
                    </Button>
                    <Button className="mt-4 bg-white text-cyan-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                        Visited
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default AddToVisit;