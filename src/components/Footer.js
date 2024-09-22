import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full px-4 bg-[#F5F5F3] py-20">
        <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
          <div className="col-span-2">
            <h3 className="text-xl font-bodyFont font-semibold mb-6">
              More about Productpage
            </h3>
            <div className="flex flex-col gap-6">
              <p className="text-base w-full xl:w-[80%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                sint ab ullam, numquam nesciunt in.
              </p>
              <ul className="flex items-center gap-2">
                <Link to="https://github.com/Akashchaursiya" target="_blank">
                  <li className="w-7 h-7 bg-[#262626] text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                    <FaGithub />
                  </li>
                </Link>
                <Link
                  to="https://linkedin.com/in/akashchaursiya"
                  target="_blank"
                >
                  <li className="w-7 h-7 bg-[#262626] text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                    <FaLinkedin />
                  </li>
                </Link>
                <Link
                  to="https://www.instagram.com/unknow__sky_31"
                  target="_blank"
                >
                  <li className="w-7 h-7 bg-[#262626] text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                    <FaInstagram />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bodyFont font-semibold mb-6">Shop</h3>
            <ul className="flex flex-col gap-2">
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Accesories
              </li>
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Clothes
              </li>
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Electronics
              </li>
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Home appliances
              </li>
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                New Arrivals
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bodyFont font-semibold mb-6">
              Your account
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Profile
              </li>
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Orders
              </li>
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Addresses
              </li>
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Account Details
              </li>
              <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                Payment Options
              </li>
            </ul>
          </div>
          <div className="col-span-2 flex flex-col items-center w-full px-4">
            <h3 className="text-xl font-bodyFont font-semibold mb-6">
              Subscribe to our newsletter.
            </h3>
            <div className="w-full">
              <p className="text-center mb-4">
                A at pellentesque et mattis porta enim elementum.
              </p>
              <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
                <div className="flex flex-col w-full">
                  <input
                    className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-[#262626] text-lg placeholder:text-base outline-none"
                    type="text"
                    placeholder="Insert your email ...*"
                  />
                </div>
                <button className="bg-white text-lightText w-[30%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide">
                  Subscribe
                </button>
              </div>
              <img
                className={"w-[80%] lg:w-[60%] mx-auto mt-6"}
                src="../../Images/payment.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F5F5F3] group">
        <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
          <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
            <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
              <AiOutlineCopyright />
            </span>
            Copyright 2024 | SnapShop | All Rights Reserved |
            <span className="ml-1 font-medium group-hover:text-[#262626]">
             @Akash
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
