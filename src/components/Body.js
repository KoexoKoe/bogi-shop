import React from "react";
import { useState } from "react";
import img_01 from "../assets/product_01.jpg";
import img_02 from "../assets/product_02.jpg";
import img_03 from "../assets/product_03.jpg";
import { FaChevronDown } from "react-icons/fa";

const Body = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  const imageContainerStyle = imagesLoaded ? {} : { visibility: "hidden" };

  return (
    <div className="flex flex-col justify-center items-center p-4 bg-gradient-to-l from-[#cefecd] to-[#bcefbb]">
      <div>
        <h1 className="text-4xl underline">
          Výtvory našich šikovných zaměstnanců
        </h1>
      </div>
      <div className="max-w-[1140px] mt-5 m-auto w-full md:flex r">
        <div className="relative p-4">
          <img
            className="w-full h-full object-cover relative border-4 border-[#9cd39c] shadow-lg hover:scale-105 duration-75"
            src={img_01}
            onLoad={handleImageLoad}
          />
        </div>
        <div className="relative p-4">
          <img
            className="w-full h-full object-cover relative border-4 border-[#9cd39c] shadow-lg hover:scale-105 duration-75"
            src={img_02}
            onLoad={handleImageLoad}
          />
        </div>
        <div className="relative p-4">
          <img
            className="w-full h-full object-cover relative border-4 border-[#9cd39c] shadow-lg hover:scale-105 duration-100"
            src={img_03}
            onLoad={handleImageLoad}
          />
        </div>
      </div>
      {!imagesLoaded && (
        <div className="my-10 text-3xl">
          <p>Loading images...</p>
        </div>
      )}
      <div className="my-10 text-xl">
        <button className="bg-[#5ce259] py-2 px-4 rounded-md text-white hover:bg-[#3eb53b] transition-colors duration-300">
          Další <FaChevronDown className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Body;
