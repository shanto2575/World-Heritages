import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { GiArrowWings } from 'react-icons/gi'
import { SlCalender } from 'react-icons/sl'

const FeaturedPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/feature`)
    const destination = await res.json()
    // console.log(destination)
    return (
        <div className='p-3 lg:w-10/12 mx-auto'>
            <div className='text-center mt-12'>
                <h1 className='text-3xl font-bold'>Featured Heritages</h1>
                <p>Handpicked travel experiences for the adventure seekers</p>
            </div>
            <div className='text-center lg:text-end my-2'>
                <Link href={'/heritages'}><Button variant='secondary' className={'rounded'}>All Heritages <FaArrowCircleRight /></Button></Link>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-10'>
                {
                    destination.map(destination => <div key={destination._id} className='my-2'>
                        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

                            {/* Image */}
                            <div className="relative h-60 w-full">
                                <Image
                                    src={destination.imageUrl}
                                    alt={destination.siteName}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-cyan-600 text-white text-sm px-4 py-1 rounded-full">
                                    {destination.type} Site
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <h1 className="text-2xl font-bold text-gray-800">{destination.siteName}</h1>

                                <p className="text-gray-500 text-sm">
                                    📍 {destination.location}, {destination.country} • {destination.region}
                                </p>

                                <p className="text-gray-600 text-sm">{destination.summary}</p>

                                {/* Info row */}
                                <div className="flex justify-between items-center pt-3 border-t">
                                    <span className="text-sm text-gray-500">
                                        UNESCO Year: <span className="font-semibold text-cyan-600">{destination.unescoYear}</span>
                                    </span>

                                    <Link href={`/heritages/${destination._id}`}>
                                        <button className="bg-cyan-600 text-white px-5 py-2 rounded-xl hover:bg-cyan-700 transition">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default FeaturedPage