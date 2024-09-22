import React, { useState } from "react";
import ShopSiderbar from "./ShopSiderbar";
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";
import { GoTriangleDown } from "react-icons/go";
import Product from "./Product";
import { useSelector } from "react-redux";

const Shop = () => {
  const { data } = useSelector((store) => store?.product);
  const [filtData, setFiltData] = useState([]);

  const filterData = ([a, cat]) => {
    if (cat.split(" ")[2].toLowerCase() === "category") {
      const Data = data[0]?.products.filter((x) =>
        x?.category?.toLowerCase()?.includes(a?.toLowerCase())
      );
      setFiltData(Data);
    } else if (cat.split(" ")[2].toLowerCase() === "rating") {
      const Data = data[0]?.products.filter((x) => x?.rating > a);
      setFiltData(Data);
    } else if (cat.split(" ")[2].toLowerCase() === "brand") {
      const Data = data[0]?.products.filter(
        (x) => x?.brand?.toLowerCase() === a?.toLowerCase()
      );
      setFiltData(Data);
    } else if (cat.split(" ")[2].toLowerCase() === "price") {
      const Data = data[0]?.products.filter(
        (x) => x?.price >= a.split("-")[0] && x?.price < a.split("-")[1]
      );
      setFiltData(Data);
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lg:w-[25%] hidden md:inline-flex h-full">
          <ShopSiderbar filterData={filterData} />
        </div>
        <div className="w-full md:w-[80%] lg:w-[75%] h-full flex flex-col gap-10">
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="bg-[#262626] border-[1px] border-gray-300 text-[#737373] w-8 h-8 text-lg flex items-center justify-center cursor-pointer gridView">
                <BsGridFill />
              </span>
              <span
                className={
                  "border-[1px] border-gray-300 text-[#737373] w-8 h-8 text-base flex items-center justify-center cursor-pointer listView"
                }
              >
                <ImList />
              </span>
            </div>

            <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
              <div className="flex items-center gap-2 text-base text-[#767676] relative">
                <label className="block">Sort by:</label>
                <select
                  id="countries"
                  className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-[#262626] text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-[#262626]"
                >
                  <option value="Best Sellers">Best Sellers</option>
                  <option value="New Arrival">New Arrival</option>
                  <option value="Featured">Featured</option>
                  <option value="Final Offer">Final Offer</option>
                </select>
                <span className="absolute text-sm right-2 md:right-4 top-2.5">
                  <GoTriangleDown />
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#767676] relative">
                <label className="block">Show:</label>
                <select
                  id="countries"
                  className="w-16 md:w-20 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-[#262626] text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-[#262626]"
                >
                  <option value="12">12</option>
                  <option value="24">24</option>
                  <option value="36">36</option>
                  <option value="48">48</option>
                </select>
                <span className="absolute text-sm right-3 top-2.5">
                  <GoTriangleDown />
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-4 lg:gap-10">
              {filtData.length < 1
                ? data[0]?.products
                    ?.slice(0, 10)
                    ?.map((x) => <Product key={x?.id} info={x} />)
                : filtData.map((x) => <Product key={x?.id} info={x} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
