import Image from "next/image"
import Link from "next/link"
import { MdOutlineDoubleArrow } from "react-icons/md";
import HeaderImg from "@/app/assets/home_page.gif"


const Homeheader = ()=> {
    return (
        <div className="bg-white border rounded-[.5rem] w-full p-10 overflow-hidden grid grid-cols-2 gap-3 items-center justify-center xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-5 ">
            <div className="">
                <Image src={HeaderImg} alt="header" className="w-full"/>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">

                <div className="flex flex-col text-center">
                    <h3 className="h2 text-xl font-semibold">Welcome to Paper Trail</h3>
                </div>

                <div className="flex mb-4">
                    <p className="leading-8 text-slate-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, placeat? Perferendis, velit error. Dolores facilis mollitia quos perferendis? Modi laudantium neque eveniet cumque inventore unde temporibus quasi cum! Corporis, voluptatibus!
                    </p>
                </div>

                <div className="flex flex-wrap justify-center">
                    <Link className="relative z-0 flex items-center gap-4 px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80" href="/get-started">
                        Get started
                        <MdOutlineDoubleArrow />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Homeheader