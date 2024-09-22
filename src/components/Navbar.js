import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { navItems } from "../utils/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-gray-200">
      <nav className="h-full  max-w-container mx-auto relative">
        <div className="flex items-center justify-between h-full">
          <div>
            <Link to="/">
              <img className="w-20 object-cover" src="../../Images/logo1.png" alt="logo" /> 
            </Link>
          </div>

          <div className="hidden md:flex">
            <ul className="flex items-center">
              {navItems.map((x, i) => (
                <Link onClick={() => setActiveTab(i)} to={x?.link} key={x?.id}>
                  <li
                    className={`${
                      activeTab === i
                        ? "text-[#262626] font-bold underline underline-offset-[4px] decoration-[1px]"
                        : "text-[#767676] font-normal"
                    } hover:font-bold px-12 text-base hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626]`}
                  >
                    {x?.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <HiMenuAlt2
            onClick={() => setOpen(!open)}
            className="inline-block md:hidden cursor-pointer w-8 h-6"
          />

          {open && (
            <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
              <div className="w-[80%] h-full bg-primeColor p-6">
                <span
                  onClick={() => setOpen(false)}
                  className="absolute top-6 right-6 cursor-pointer text-3xl text-white"
                >
                  <MdClose />
                </span>
                <img className="w-28 mb-6" src="../../Images/logo1.png" alt="logo" />
                <ul className="flex flex-col gap-4">
                  {navItems.map((x, i) => (
                    <Link onClick={() => {setActiveTab(i); setOpen(false);}} to={x?.link} key={x?.id}>
                      <li
                        className={`${
                          activeTab === i
                            ? "text-white font-bold underline underline-offset-[4px] decoration-[1px]"
                            : "text-gray-300 font-normal"
                        } hover:underline underline-offset-[4px] decoration-[1px] text-lg`}
                      >
                        {x?.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
