import { BookingCancel } from '@/components/Booking/BookingCancel'
import { auth } from '@/lib/auth'
import { Button } from '@heroui/react'
import { headers } from 'next/headers'
import Image from 'next/image'

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const booking = await res.json()

    return (
        <div className='max-w-7xl mx-auto mt-6'>
            <div className='text-center lg:text-start lg:p-3'>
                <h1 className='text-3xl font-bold'>My Booking</h1>
                <p className='text-gray-400'>Manage and view your upcoming travel plans</p>
            </div>
            <div className='space-y-5 px-3'>
                {booking.length === 0 ? <div className='border rounded-2xl bg-cyan-50'>
                    <h1 className='flex items-center justify-center font-bold text-4xl h-[500px]'>No Booking </h1>
                </div> :
                    booking.map(booking => <div key={booking._id} className='border rounded-2xl p-3 my-5'>
                        <div className='flex flex-col lg:flex-row gap-3 lg:gap-10 '>
                            <Image
                                src={booking?.imageUrl}
                                alt={booking.siteName}
                                width={300}
                                height={300}
                                className='w-full lg:w-48'
                            />
                            <div className='flex flex-1 flex-col justify-between'>
                                <h1 className='text-2xl font-bold'>Country: <span className='text-orange-500 font-bold'>{booking.country}</span></h1>
                                <h1>{booking.siteName}</h1>
                                <p>Booking Id : {booking._id}</p>
                                <p>
                                    Departure Date: {new Date(booking.departureDate).toLocaleDateString("en-GB", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                                <div className='flex flex-col lg:flex-row space-y-3  justify-between lg:items-center'>
                                    <p className='text-2xl font-bold text-cyan-500'>unescoYear: {booking.unescoYear}</p>
                                    <div className='flex items-center justify-between gap-5'>
                                        <BookingCancel booking={booking} />
                                        <Button className={'rounded '}>View</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default MyBookingPage
