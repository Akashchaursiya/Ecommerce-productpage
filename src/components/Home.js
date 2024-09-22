import React, { useEffect } from "react";

import Slider from "react-slick";
import SamplePrevArrow from "./SamplePrevArrow";
import SampleNextArrow from "./SampleNextArrow";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../utils/productSlice";
import { Link } from "react-router-dom";
import { SALE_IMG1, SALE_IMG2, } from "../utils/constants";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const { data, status } = useSelector((store) => store?.product);

  if (status === "loading") {
    <h2>Loading ....</h2>;
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="max-w-container mx-auto px-4 pt-0 pb-4">

      <div className="py-15 flex flex-col md:flex-row items-center justify-between gap-2 lg:gap-4">
        <div className="w-full md:w-2/3 lg:w-1/2 h-full">
          <Link to="/shop">
            <img className="h-full w-full object-cover" src={SALE_IMG1} />
          </Link>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
          <Link to="/shop">
            <div className="h-1/2 w-full">
              <img className="h-full w-full object-cover" src={SALE_IMG2} />
            </div>
          </Link>
          <Link to="/shop">
            <div className="h-1/2 w-full">
              <img className="h-full w-full object-cover"  src="../Images/bghome2.png" />
            </div>
          </Link>
        </div>
      </div>


      <div className="w-full pb-16">
        <div className="text-3xl font-semibold pb-6">New Arrivals</div>
        <Slider {...settings}>
          {data[0]?.products?.slice(0, 4)?.map((x) => (
            <Product key={x?.id} info={x} />
          ))}
        </Slider>
      </div>

      <div className="w-full pb-20">
        <div className="text-3xl font-semibold pb-6">Our Bestsellers</div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {data[0]?.products?.slice(0, 4)?.map((x) => (
            <Product key={x?.id} info={x} />
          ))}
        </div>
      </div>


      <div className="w-full pb-20">
        <div className="text-3xl font-semibold pb-6">Special Offers</div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
          {data[0]?.products?.slice(5, 9)?.map((x) => (
            <Product info={x} key={x?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
