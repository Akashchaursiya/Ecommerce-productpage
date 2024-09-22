import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

const Product = ({ info }) => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store?.cart?.items);
  const [val, setVal] = useState('');
  const [cartText, setCartText] = useState("Add to cart");

  const AddProduct = (e) => {
    e.preventDefault();
    dispatch(addItems(info));
    setVal(info.id);

    setCartText("Added Product into cart!");

    setTimeout(() => {
      setCartText("Add to cart");
    }, 3000);
  };

  return (
    <div className="w-full relative group">
      <Link to={`/shop/${info.id}`} className="block">
        <div className="max-w-80 max-h-80 relative overflow-hidden">
          <img className="w-full h-[220px]" src={info?.images[0]} alt={info.title} />
          <div className="absolute top-6 left-8 bg-[#262626] w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer">
            ⭐ {info?.rating}
          </div>
          <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
            <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
              <li
                onClick={AddProduct}
                className="text-[#767676] hover:text-[#262626] text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-[#262626] flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
              >
                {cartText}
                <FaShoppingCart />
              </li>
              <li className="text-[#767676] hover:text-[#262626] text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-[#262626] flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
                View Details
                <MdOutlineLabelImportant />
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
          <div className="flex items-center justify-between font-titleFont">
            <h2 className="text-lg text-[#262626] font-bold">{info?.title}</h2>
            <p className="text-[#767676] text-[14px]">₹ {info?.price}</p>
          </div>
          <div>
            <p className="text-[#767676] text-[14px]">{info?.brand}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
