import Homeheader from "./Homeheader";
import Testimonials from "./Testimonials";
import ContactUs from "./Contactus";
import Aboutus from "./Aboutus";
import Features from "./Features";

const HomeComponent = () => {
    return(
        <section className="flex items-center justify-center w-full min-h-screen p-4 md:p-8 bg-gray-50 dark:bg-gray-900">
            <div className="w-[70%] xl:w-[70%] md:w-[100%] sm:w-[100%] flex flex-col items-center justify-center gap-3 p-4">
                <Homeheader/>
                <Aboutus/>
                <Features/>
                <Testimonials/>
                <ContactUs/>
            </div>
        </section>
    )
}

export default HomeComponent
