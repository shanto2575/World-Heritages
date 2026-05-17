'use client'
import React from 'react'
import Marquee from "react-fast-marquee";
import { FaGlobeAsia } from "react-icons/fa";
import { ImArrowRight } from 'react-icons/im';

const HeritageMarquee = () => {

    const heritageNames = [
        "Taj Mahal – India",
        "Great Wall – China",
        "Machu Picchu – Peru",
        "Pyramids of Giza – Egypt",
        "Stonehenge – UK",
        "Petra – Jordan",
        "Colosseum – Italy",
        "Angkor Wat – Cambodia",
        "Statue of Liberty – USA",
        "Bagan – Myanmar",
    ];

    return (
        <div className="bg-black p-2 mt-5 flex">
                <h1 className='text-red-500 border-r-0 rounded p-2 flex gap-3 items-center justify-center bg-white text-sm lg:text-2xl font-bold'>Haritages <ImArrowRight className='text-pink-500' /></h1>
            <Marquee pauseOnHover={true} speed={60} gradient={false}>

                {heritageNames.map((name, index) => (
                    
                    <div
                        key={index}
                        className="flex items-center gap-3 mx-10 text-white lg:text-lg font-semibold"
                    >
                        <FaGlobeAsia className="text-blue-400 lg:text-2xl" />
                        {name}
                    </div>
                ))}

            </Marquee>
        </div>
    );
};

export default HeritageMarquee;