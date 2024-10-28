import Footer from "@/components/Footer/Footer";
import {LoginRegisterForm} from "@/components/Forms/Form";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
      <div className="border-none box-content m-0 p-0 max-w-[100%] max-h-[100%]">
        <Navbar/>
        <LoginRegisterForm/>
        <Footer/>
      </div>
  );
}
