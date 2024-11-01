import Image from "next/image";
import Link from "next/link";
import { MdOutlineDoubleArrow } from "react-icons/md";
import HeaderImg from "@/app/assets/home_page.gif";

const Homeheader = () => {
  return (
    <div className="bg-white border rounded-[.5rem] w-full p-6 sm:p-8 lg:p-10 overflow-hidden grid grid-cols-1 gap-6 sm:grid-cols-2 items-center justify-center mb-5">
      <div className="flex justify-center sm:justify-start">
        <Image src={HeaderImg} alt="header" className="w-full max-w-xs sm:max-w-full" />
      </div>
      <div className="flex flex-col items-center sm:items-start justify-center gap-4 text-center sm:text-left">
        <h3 className="text-2xl font-semibold text-gray-900">Welcome to Paper Trail</h3>
        <p className="leading-6 text-slate-500 text-sm sm:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, placeat? Perferendis, velit error. Dolores facilis mollitia quos perferendis? Modi laudantium neque eveniet cumque inventore unde temporibus quasi cum! Corporis, voluptatibus!
        </p>
        <Link
          className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg transition duration-300 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          href="/get-started"
        >
          Get started
          <MdOutlineDoubleArrow />
        </Link>
      </div>
    </div>
  );
};

export default Homeheader;
