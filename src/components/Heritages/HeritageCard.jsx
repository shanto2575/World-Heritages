import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeritageCard = ({ heritages }) => {
    const {_id,
        siteName,
        country,
        region,
        type,
        unescoYear,
        location,
        imageUrl,
        summary,
        description,
    } = heritages;

    return (
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

            {/* Image */}
            <div className="relative h-60 w-full">
                <Image
                    src={imageUrl}
                    alt={siteName}
                    fill
                    className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-cyan-600 text-white text-sm px-4 py-1 rounded-full">
                    {type} Site
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">{siteName}</h1>

                <p className="text-gray-500 text-sm">
                    📍 {location}, {country} • {region}
                </p>

                <p className="text-gray-600 text-sm">{summary}</p>

                {/* Info row */}
                <div className="flex justify-between items-center pt-3 border-t">
                    <span className="text-sm text-gray-500">
                        UNESCO Year: <span className="font-semibold text-cyan-600">{unescoYear}</span>
                    </span>

                    <Link href={`/heritages/${_id}`}>
                        <button className="bg-cyan-600 text-white px-5 py-2 rounded-xl hover:bg-cyan-700 transition">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeritageCard;