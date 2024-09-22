import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-[#262626] font-semibold text-lg">Electronic - Product</span>
          is one of the world's leading ecommerce brands and is internationally
          recognized for celebrating the essence of classic Worldwide cool
          looking style.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-[#262626] text-white hover:bg-black duration-300">
           Visit Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
