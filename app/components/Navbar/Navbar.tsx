"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import myLogo from "@/app/assets/bug-logo.png"
import menuIcon from "../../assets/hamburger.png";

const Navbar = () => {
    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);

    const displayPopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <nav className="w-full fixed flex justify-center opacity-100 bg-slate-50">
            <div className="w-full max-w-[80%] grid grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 items-center justify-items-center cursor-pointer">
                <div className="flex items-center p-4">
                    <Image src={myLogo} alt="logo" className="h-20 w-20"/>
                    <h3 className="text-2xl">Paper Clip</h3>
                </div>
                <div className="flex items-center p-4 xl:flex md:hidden sm:hidden">
                    <ul className="flex items-center justify-center gap-10">
                        <li className="list-none hover:text-gray-400"><Link href="/">Home</Link></li>
                        <li className="list-none hover:text-gray-400"><Link href="/about">About</Link></li>
                        <li className="list-none hover:text-gray-400"><Link href="/testimonials">Testimonials</Link></li>
                        <li className="list-none hover:text-gray-400"><Link href="/contact">Contact us</Link></li>
                    </ul>
                </div>
                <div className="flex items-center xl:flex gap-4 sm:hidden">
                    <Link className="px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80" href="/get-started">Get started</Link>
                    <Link className="px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80" href="/sign-in">Sign in</Link>
                </div>
                <div className="flex items-center xl:hidden md:flex h-6 w-6 overflow-hidden rounded-sm cursor-pointer" onClick={displayPopup}>
                    <Image src={menuIcon} alt="menu" className="w-full"/>
                </div>
            </div>
            
            {/* Popup */}
            {isPopupVisible && (
                <div className="fixed inset-0 z-100 bg-gray-800 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-md">
                        <div className="grid grid-cols-2 p-2 items-center justify-center">
                            <h2 className="text-lg font-semibold text-gray-700">Menu</h2>
                            <button
                                className="mt-6"
                                onClick={displayPopup}
                            >
                                X
                            </button>
                        </div>

                        <ul className="mt-4 space-y-3">
                            <li className="hover:text-gray-500"><Link href="/">Home</Link></li>
                            <li className="hover:text-gray-500"><Link href="/about">About</Link></li>
                            <li className="hover:text-gray-500"><Link href="/testimonials">Testimonials</Link></li>
                            <li className="hover:text-gray-500"><Link href="/contact">Contact us</Link></li>
                        </ul>

                        <div className="flex items-center gap-4 justify-start py-3">
                            <Link className="px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80" href="/get-started">Get started</Link>
                            <Link className="px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80" href="/sign-in">Sign in</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
