import { FaPaperclip } from "react-icons/fa6";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const Features = () => {
  return (
    <section className="w-full flex items-center justify-center p-4">
      <div className="grid grid-cols-1 gap-4 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-gray-800 sm:grid-cols-2 lg:grid-cols-3 w-full sm:w-[80%] lg:w-[100%]">
        <div className="p-8 flex flex-col items-center text-center border-b border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-t-lg sm:rounded-none sm:border-r">
          <FaPaperclip className="text-2xl sm:text-3xl mb-4 text-gray-600" />
          <h3 className="font-sans font-semibold text-lg sm:text-xl">Past Papers</h3>
          <p className="leading-6 text-slate-400 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem repellendus natus! Facere temporibus, ullam atque cumque quas incidunt nesciunt inventore? Id sed, praesentium quaerat est eos et reiciendis officia!
          </p>
        </div>

        <div className="p-8 flex flex-col items-center text-center border-b border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 sm:border-r">
          <MdOutlineAssignmentTurnedIn className="text-2xl sm:text-3xl mb-4 text-gray-600" />
          <h3 className="font-sans font-semibold text-lg sm:text-xl">Assistance with assignments</h3>
          <p className="leading-6 text-slate-400 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem repellendus natus! Facere temporibus, ullam atque cumque quas incidunt nesciunt inventore? Id sed, praesentium quaerat est eos et reiciendis officia!
          </p>
        </div>

        <div className="p-8 flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-b-lg sm:rounded-none">
          <AiOutlineFundProjectionScreen className="text-2xl sm:text-3xl mb-4 text-gray-600" />
          <h3 className="font-sans font-semibold text-lg sm:text-xl">Assistance with projects</h3>
          <p className="leading-6 text-slate-400 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil exercitationem repellendus natus! Facere temporibus, ullam atque cumque quas incidunt nesciunt inventore? Id sed, praesentium quaerat est eos et reiciendis officia!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
