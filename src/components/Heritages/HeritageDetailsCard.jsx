import Image from "next/image";
import React from "react";
import { EditsModal } from "./EditsModal";
import { DeleteHeritageAlert } from "./DeleteHeritageAlert";
import AddToVisit from "../Booking/VisitAdd";
import { MdOutlineLocationOn } from "react-icons/md";

const HeritageDetailsCard = async ({ heritage }) => {
    const { _id,
        siteName,
        country,
        region,
        type,
        unescoYear,
        location,
        imageUrl,
        summary,
        description,
    } = heritage;

    return (
        <div className="max-w-6xl mx-auto ">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="mt-4 mb-1 text-center lg:text-start">
                    <h1 className="text-2xl font-bold ">Discover This Heritage Wonder</h1>
                    <p>Dive into the story behind one of the world’s most iconic destinations.</p>
                </div>
                <div className="flex gap-4">
                    <EditsModal heritage={heritage} />
                    <DeleteHeritageAlert heritage={heritage} />
                </div>
            </div>
            <div className=" bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Hero Image */}
                <div className="relative w-full h-[420px] ">
                    <Image
                        src={imageUrl}
                        alt={siteName}
                        fill
                        className="object-cover p-3 lg:p-0 rounded-2xl "
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>

                    <div className="absolute bottom-8 left-8 text-white">
                        <p className="bg-cyan-600 inline px-2 py-1 rounded text-sm mb-3">
                            {type} Heritage Site
                        </p>
                        <h1 className=" text-2xl lg:text-4xl font-bold">{siteName}</h1>
                        <p className="text-lg text-gray-200 flex items-center gap-2">
                            <MdOutlineLocationOn/>{location}, {country}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-10 space-y-10">

                    {/* Info Grid */}
                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-cyan-50 p-6 rounded-2xl">
                            <p className="text-gray-500 text-sm">Country</p>
                            <h2 className="text-xl font-bold">{country}</h2>
                        </div>

                        <div className="bg-cyan-50 p-6 rounded-2xl">
                            <p className="text-gray-500 text-sm">Region</p>
                            <h2 className="text-xl font-bold">{region}</h2>
                        </div>

                        <div className="bg-cyan-50 p-6 rounded-2xl">
                            <p className="text-gray-500 text-sm">UNESCO Listed</p>
                            <h2 className="text-xl font-bold">{unescoYear}</h2>
                        </div>

                    </div>

                    <div className="flex flex-col lg:flex-row  lg:justify-between gap-4 lg:gap-10">
                        <div>
                            <div>
                                <h2 className="text-2xl font-bold mb-3">Quick Overview</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {summary}
                                </p>
                            </div>

                            {/* Description */}
                            <div>
                                <h2 className="text-2xl font-bold mb-3">Full Description</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <AddToVisit heritage={heritage} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeritageDetailsCard;