import { FaPaperclip } from "react-icons/fa6";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Features = ()=> {
    return(
        <section className="w-full flex items-center justify-center p-4">
            <div className="p-4 grid grid-cols-2 gap-4 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-[70%] xl:w-full md:w-[100%] sm:w-[100%]">
                <div className="border bg-white rounded-[.5rem] p-4">
                    <div className="flex justify-center items-center gap-6">
                        <h3 className="font-sans font-semibold">Past Papers</h3>
                        <FaPaperclip />
                    </div>
                    <div className="">
                        <p className="leading-8 text-slate-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem repellendus natus! Facere temporibus, ullam atque cumque quas incidunt nesciunt inventore? Id sed, praesentium quaerat est eos et reiciendis officia!
                        </p>
                    </div>
                </div>
                <div className="border bg-white rounded-[.5rem] p-4">
                    <div className="flex justify-center items-center gap-6">
                        <h3 className="font-sans font-semibold">Assistence with assignments</h3>
                        <MdOutlineAssignmentTurnedIn />
                    </div>
                    <div className="">
                        <p className="leading-8 text-slate-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem repellendus natus! Facere temporibus, ullam atque cumque quas incidunt nesciunt inventore? Id sed, praesentium quaerat est eos et reiciendis officia!
                        </p>
                    </div>
                </div>
                <div className="border bg-white rounded-[.5rem] p-4">
                    <div className="flex justify-center items-center gap-6">
                        <h3 className="font-sans font-semibold">Assistance with projects</h3>
                        <AiOutlineFundProjectionScreen />
                    </div>
                    <div className="">
                        <p className="leading-8 text-slate-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem repellendus natus! Facere temporibus, ullam atque cumque quas incidunt nesciunt inventore? Id sed, praesentium quaerat est eos et reiciendis officia!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Features
