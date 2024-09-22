import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem, increaseQuantity, decreaseQuantity } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store?.cart?.items);

  return (
    <div className="max-w-container mx-auto px-4">
      {products.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] text-[#262626] hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">Product Name</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          {products.map((product) => (
            <div key={product?.id} className="mt-5">
              <div className="w-full grid grid-cols-5 mb-4 border py-2">
                <div className="flex col-span-5 md:col-span-2 items-center gap-4 ml-4">
                  <ImCross
                    onClick={() => dispatch(removeItem(product?.id))}
                    className="text-[#262626] hover:text-red-500 duration-300 cursor-pointer"
                  />
                  <img
                    className="w-32 h-32"
                    src={product?.images[0]}
                    alt="productImage"
                  />
                  <h1 className="font-titleFont font-semibold">{product?.title}</h1>
                </div>
                <div className="col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 md:px-0 gap-6 md:gap-0">
                  <div className="flex w-1/3 items-center text-lg font-semibold">
                    ₹ {product?.price}
                  </div>
                  <div className="w-1/3 flex items-center gap-6 text-lg">
                    <span
                      onClick={() => dispatch(decreaseQuantity(product?.id))}
                      className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300"
                    >
                      -
                    </span>
                    <p>{product?.quantity || 1}</p>
                    <span
                      onClick={() => dispatch(increaseQuantity(product?.id))}
                      className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300"
                    >
                      +
                    </span>
                  </div>
                  <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
                    <p>₹ {product?.price * (product?.quantity || 1)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={() => dispatch(clearCart())}
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            Reset cart
          </button>

          <div className="flex flex-col md:flex-row justify-between border py-4 px-4 items-center gap-2 md:gap-0">
            <div className="flex items-center gap-4">
              <input
                className="w-44 md:w-52 h-8 px-4 border text-[#262626] text-sm outline-none border-gray-400"
                type="text"
                placeholder="Coupon Number"
              />
              <p className="text-sm md:text-base font-semibold">Apply Coupon</p>
            </div>
            <p className="text-lg font-semibold">Update Cart</p>
          </div>

          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">Cart totals</h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Subtotal
                  <span className="font-semibold tracking-wide font-titleFont">
                    ₹ {products.reduce((acc, item) => acc + item?.price * (item?.quantity || 1), 0)}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Shipping Charge
                  <span className="font-semibold tracking-wide font-titleFont">₹50</span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  Total
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    ₹ {products.reduce((acc, item) => acc + item?.price * (item?.quantity || 1), 0) + 50}
                  </span>
                </p>
              </div>
              <div className="flex justify-end">
                <button className="w-52 h-10 bg-[#262626] text-white hover:bg-black duration-300">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 pb-20">
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src="../../Images/emptyCart.png"
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">Your Cart feels lonely.</h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/shop">
              <button className="bg-[#262626] rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
