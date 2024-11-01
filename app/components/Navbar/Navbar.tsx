"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import myLogo from "@/app/assets/bug-logo.png";
import menuIcon from "../../assets/hamburger.png";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const router = useRouter();

    const routeToPage = (route: string) => {
        if (route === "get-started") {
            router.push("./pages/get-started");
        }
    };

    const displayPopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <nav className="w-full fixed flex justify-center opacity-100 bg-slate-50">
            <div className="w-full max-w-[80%] flex items-center justify-between p-4">
                {/* Logo */}
                <div className="flex items-center">
                    <Image src={myLogo} alt="logo" className="h-20 w-20" />
                    <h3 className="text-2xl hidden sm:block">Paper Clip</h3> {/* Hidden on sm and smaller screens */}
                </div>

                {/* Links (Hidden on small screens) */}
                <div className="hidden xl:flex md:hidden items-center">
                    <ul className="flex items-center justify-center gap-10">
                        <li className="list-none hover:text-gray-400"><Link href="/">Home</Link></li>
                        <li className="list-none hover:text-gray-400"><Link href="/about">About</Link></li>
                        <li className="list-none hover:text-gray-400"><Link href="/testimonials">Testimonials</Link></li>
                        <li className="list-none hover:text-gray-400"><Link href="/contact">Contact us</Link></li>
                    </ul>
                </div>

                {/* Buttons (Hidden on small screens) */}
                <div className="hidden xl:flex md:hidden gap-4">
                    <button
                        className="px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                        onClick={() => routeToPage("get-started")}
                    >
                        Get started
                    </button>
                    <Link className="px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80" href="/sign-in">Sign in</Link>
                </div>

                {/* Menu Icon (Visible on small screens only) */}
                <div className="flex items-center xl:hidden md:flex ml-auto h-6 w-6 overflow-hidden rounded-sm cursor-pointer" onClick={displayPopup}>
                    <Image src={menuIcon} alt="menu" className="w-full" />
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
                            <li className="hover:text-gray-500"><Link href="#about">About</Link></li>
                            <li className="hover:text-gray-500"><Link href="#testimonials">Testimonials</Link></li>
                            <li className="hover:text-gray-500"><Link href="#contact">Contact us</Link></li>
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
