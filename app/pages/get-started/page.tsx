import { LoginRegisterForm } from "@/app/components/Forms/Form";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

export default function GetStartedPage() {
  return (
    <div>
      <Navbar/>
      <LoginRegisterForm />
      <Footer/>
    </div>
  );
}
