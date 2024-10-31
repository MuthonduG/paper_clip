import Footer from "@/app/components/Footer/Footer";
// import {LoginRegisterForm} from "@/app/components/Forms/Form";
import Navbar from "@/app/components/Navbar/Navbar";
import HomeComponent from "./pages/Home/page";

export default function Home() {
  return (
      <div className="border-none box-content m-0 p-0 max-w-[100%] max-h-[100%]">
        <Navbar/>
        {/* <LoginRegisterForm/> */}
        <HomeComponent/>
        <Footer/>
      </div>
  );
}
