"use client"
import Link from 'next/link';
import React from 'react';
const Navbar = () => {
    return (
        <nav className="bg-purple-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex  items-center justify-between h-16">
                        <Link href="/">
                        <div className="flex item-center gap-3">
                            {/* Your logo or brand name */}
                            <img src='profile.jpeg' className='w-12 h-12 mr-2 rounded-full' />
                            <p className="flex text-white font-serif mt-3">Noor's Portfolio</p>
                        </div>
                        </Link>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex absolute space-x-4 right-24 top-3">
                                {/* Navigation links */}
                                <a href="/" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a href="#about" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                                <a href="#projects" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                                <a href="/contact" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
