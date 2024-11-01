import Image from "next/image";
import AboutImage from "@/app/assets/about3.png";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Aboutus = () => {
  return (
    <section id="about" className="w-full flex items-center justify-center p-4">
      <div className="border bg-white rounded-[.5rem] p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        <div>
          <div className="leading-8 mb-6">
            <h3 className="font-sans font-semibold text-center text-lg sm:text-xl">Our Mission</h3>
            <p className="text-slate-500 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, laboriosam cum fugit similique, cupiditate delectus sequi harum labore rem repellendus commodi? Cupiditate quia sit assumenda magnam delectus quod ratione ullam!
            </p>
          </div>
          <div className="leading-8 mb-6">
            <h3 className="font-sans font-semibold text-center text-lg sm:text-xl">Our Vision</h3>
            <p className="text-slate-500 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, laboriosam cum fugit similique, cupiditate delectus sequi harum labore rem repellendus commodi? Cupiditate quia sit assumenda magnam delectus quod ratione ullam!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button className="flex items-center gap-2 px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              <span>Donate</span>
              <MdOutlineDoubleArrow />
            </button>
          </div>
        </div>
        <div className="overflow-hidden rounded-[.5rem] w-full flex justify-center">
          <Image src={AboutImage} alt="about logo" className="w-full max-w-xs sm:max-w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
