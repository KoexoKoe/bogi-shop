import React from "react";
import logo from "../assets/frog.png";
import { FaHome, FaShoppingCart, FaUserAlt, FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-5 bg-gradient-to-l from-[#cefecd] to-[#bcefbb] ">
      <div className="flex items-center">
        <img
          className="w-20 hover:scale-125 duration-100 cursor-pointer"
          src={logo}
        />
        <div className="justify-center items-center text-center pl-3 py-0">
          <p
            id="BOGI"
            className="text-3xl text-transparent bg-clip-text bg-gradient-to-t from-[#5ce259] to-[#3eb53b] font-bold"
          >
            BOGI
          </p>
          <p className="text-2xl">CHRÁNĚNÁ DÍLNA</p>
        </div>
      </div>

      <div
        id="NavMenu"
        className="flex justify-center text-center items-center mr-10"
      >
        <div id="FaBario" className="hidden">
          <FaBars />
        </div>
        <div className="flex px-3 items-center mx-3 text-2xl text-transparent bg-clip-text bg-gradient-to-t from-[#5ce259] to-[#3eb53b] hover:scale-125 cursor-pointer duration-100">
          <FaHome style={{ color: "black", fontSize: "20px" }} />
          DOMŮ
        </div>
        <div className="flex px-3 items-center mx-3 text-2xl hover:scale-125 cursor-pointer duration-100 ">
          <FaShoppingCart style={{ color: "black", fontSize: "18px" }} />
          OBCHOD
        </div>
        <button className="flex px-3 items-center mx-3 text-2xl hover:scale-125 cursor-pointer duration-100">
          <FaUserAlt style={{ color: "black", fontSize: "18px" }} />
          ÚČET
        </button>
      </div>
    </header>
  );
};

export default Header;
