import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const HeritageFooter = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 ">
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand */}
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-white">Heritage Explorer</h1>
                    <p className="text-sm text-gray-400">
                        Discover and explore UNESCO World Heritage sites around the globe.
                        Travel through history, culture and timeless beauty.
                    </p>

                    {/* Social */}
                    <div className="flex gap-4 pt-3">
                        <div className="bg-gray-800 p-3 rounded-full hover:bg-cyan-600 cursor-pointer"><FaFacebookF /></div>
                        <div className="bg-gray-800 p-3 rounded-full hover:bg-cyan-600 cursor-pointer"><FaInstagram /></div>
                        <div className="bg-gray-800 p-3 rounded-full hover:bg-cyan-600 cursor-pointer"><FaTwitter /></div>
                        <div className="bg-gray-800 p-3 rounded-full hover:bg-cyan-600 cursor-pointer"><FaYoutube /></div>
                    </div>
                </div>

                {/* Explore */}
                <div>
                    <h2 className="text-white text-xl font-semibold mb-4">Explore</h2>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-cyan-400 cursor-pointer">All Heritage Sites</li>
                        <li className="hover:text-cyan-400 cursor-pointer">Cultural Sites</li>
                        <li className="hover:text-cyan-400 cursor-pointer">Natural Wonders</li>
                        <li className="hover:text-cyan-400 cursor-pointer">Travel Guides</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h2 className="text-white text-xl font-semibold mb-4">Company</h2>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-cyan-400 cursor-pointer">About Us</li>
                        <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
                        <li className="hover:text-cyan-400 cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-cyan-400 cursor-pointer">Terms & Conditions</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="text-white text-xl font-semibold mb-4">Newsletter</h2>
                    <p className="text-sm text-gray-400 mb-4">
                        Get travel inspiration and updates directly to your inbox.
                    </p>

                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full px-4 py-3 rounded-l-xl bg-gray-800 outline-none"
                        />
                        <button className="bg-cyan-600 px-5 rounded-r-xl hover:bg-cyan-700">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
                © {new Date().getFullYear()} Heritage Explorer. All rights reserved.
            </div>
        </footer>
    );
};

export default HeritageFooter;