"use client";
import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

// local directory imports
import Image from "next/image";
import sideImage from "@/assets/side_img.webp";


// interface for login data
// interface UserData {
//     username: string;
//     email: string;
//     password: number;
// }

// create checkouthtmlForm
export function LoginRegisterForm () {
    const [register, isRegister] = useState<boolean>(true);
    // const [error, isError] = useState<boolean>(false);

    return (
        <div className="flex items-center justify-center min-h-screen p-4 md:p-8 bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-wrap items-center max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <Image src={sideImage} alt="Side Image" className="w-full h-auto rounded-lg" />
                </div>

                {
                    register? 
                        <form className="w-full md:w-1/2 max-w-sm mx-auto">
                            <div className="mb-4 text-center">
                                <h3 className="h2">Register your account</h3>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                                <input type="text" id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="john_doe-254" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@flowbite.com" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                                <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div className="flex items-start mb-5">
                                <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600" required />
                                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                            </div>
                            <div className="flex flex-wrap gap-2 justify-center mb-5">
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Register new account</button>
                                <button onClick={()=> isRegister(false)} type="button" className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700">Login</button>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <Link type="button" href={"/"} className="flex flex-wrap gap-2">
                                    <span className="text-2xl">
                                        <FcGoogle />
                                    </span>
                                    <span className="text-sm">Sign up</span>
                                </Link>
                            </div>
                        </form>
                    : 

                        <form className="w-full md:w-1/2 max-w-sm mx-auto">
                            <div className="mb-4 text-center">
                                <h3 className="h2">Welcome Back</h3>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@flowbite.com" required />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div className="flex items-start mb-5">
                                <input id="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600" required />
                                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-5 justify-center">
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Login</button>
                                <button onClick={()=> isRegister(true)} type="button" className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700">Register new account</button>
                            </div>
                            <div className="flex flex-wrap justify-center">
                                <Link type="button" href={"/"} className="flex flex-wrap gap-2">
                                    <span className="text-2xl">
                                        <FcGoogle />
                                    </span>
                                    <span className="text-sm">Sign in</span>
                                </Link>
                            </div>
                        </form>
                }
            </div>
        </div>
    );
}
