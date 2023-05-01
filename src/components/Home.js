import React from "react";
import img_01 from "../assets/self-confidence.png";
import { FaChevronDown } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex justify-center items-center text-left bg-gradient-to-l from-[#cefecd] to-[#bcefbb] p-5 md:p-20">
      <div className="mx-5">
        <img
          className="px-2 w-[35vh] hover:rotate-2 duration-500"
          src={img_01}
          alt="illustration of a goal"
        />
      </div>
      <div>
        <h1 className="pb-4 text-4xl text-transparent bg-clip-text bg-gradient-to-t from-[#5ce259] to-[#3eb53b] font-bold">
          Kdo jsme a co je našim cílem?
        </h1>
        <div className="max-w-[400px] text-2xl pb-4 overflow-auto overscroll-auto md:max-h-[400px]">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            placerat. Duis condimentum augue id magna semper rutrum. In enim a
            arcu imperdiet malesuada. Mauris dictum facilisis augue. Nullam sit
            amet magna in magna gravida vehicula. Morbi leo mi, nonummy eget
            tristique non, rhoncus non leo. Fusce tellus. In laoreet, magna id
            viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien
            wisi sed libero. Morbi leo mi, nonummy eget tristique non, rhoncus
            non leo.
          </p>
        </div>
        <button className="text-xl bg-[#5ce259] py-2 px-4 rounded-md text-white hover:bg-[#3eb53b] transition-colors duration-300">
          Pokračovat ve čtení.. <FaChevronDown className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Home;
