import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeritageBanner = () => {
    return (
        <div className="relative w-full h-[60vh] overflow-hidden">

            {/* Background Image */}
            <Image
                src="https://images.unsplash.com/photo-1548013146-72479768bada"
                alt="Heritage"
                fill
                priority
                className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
                <div className="max-w-3xl space-y-6">

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Discover The World`s <br />
                        Timeless Heritage
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200">
                        Explore UNESCO World Heritage Sites and experience the beauty of
                        history, culture, and nature like never before.
                    </p>

                    <div className="flex gap-4 justify-center">
                        <button className="bg-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition">
                            Explore Sites
                        </button>
                        <Link href={'/heritages'}><button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">
                            Book a Tour
                        </button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeritageBanner;