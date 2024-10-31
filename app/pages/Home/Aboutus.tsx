import Image from "next/image"
import AboutImage from "@/app/assets/about3.png"
import { MdOutlineDoubleArrow } from "react-icons/md";

const Aboutus = ()=> {
    return (
        <section className="w-full flex items-center justify-center p-4">
            <div className="border bg-white rounded-[.5rem] p-4 grid grid-cols-2 gap-4 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-[70%] xl:w-full md:w-[100%] sm:w-[100%]">
                <div className="">
                    <div className="leading-8 mb-4">
                        <h3 className="font-sans font-semibold text-center">Our Mission</h3>
                        <p className=" text-slate-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, laboriosam cum fugit similique, cupiditate delectus sequi harum labore rem repellendus commodi? Cupiditate quia sit assumenda magnam delectus quod ratione ullam!
                        </p>
                    </div>
                    <div className="leading-8 mb-4">
                        <h3 className="font-sans font-semibold text-center">Our Vission</h3>
                        <p className=" text-slate-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, laboriosam cum fugit similique, cupiditate delectus sequi harum labore rem repellendus commodi? Cupiditate quia sit assumenda magnam delectus quod ratione ullam!
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="flex justify-center items-center gap-2 w-fit px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            <span>Donate</span>
                            <MdOutlineDoubleArrow />
                        </button>
                    </div>
                </div>
                <div className="overflow-hidden rounded-[.5rem] max-h-screen w-full">
                    <Image src={AboutImage} alt="about logo" className="h-[100%]"/>
                </div>
            </div>
        </section>
    )
}

export default Aboutus