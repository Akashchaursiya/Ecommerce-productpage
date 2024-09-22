import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItems } from "../utils/cartSlice";
import ProductImageZoom from './ProductImageZoom'; 
import { getProducts } from '../utils/productSlice'; 

const ProductDetail = () => {
  const { pid } = useParams();
  const dispatch = useDispatch();

  const { data, isLoading } = useSelector((store) => store?.product);
  const product = data[0]?.products?.find((x) => String(x?.id) === pid);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    if (!data.length) {
      dispatch(getProducts()); 
    }

    if (product) {
      setSelectedColor(product?.variants?.colors?.[0] || '');
      setSelectedSize(product?.variants?.sizes?.[0] || '');
    }
  }, [dispatch, data.length, product]);

 { /*const handleAddToCart = () => {
    console.log("Add to Cart button clicked!");
    if (!selectedColor || !selectedSize) {
      alert("Please select both color and size.");
      return;
    }

    const productWithVariant = {
      ...product,
      selectedColor,
      selectedSize,
    };
    dispatch(addItems(productWithVariant));
  };

  if (isLoading) {
    return <div>Loading...</div>;  
  }

  if (!product) {
    return <div>Product not found</div>;  
  }
    */}

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full pb-10 bg-gray-100 p-4">
          <div className="h-full md:col-span-2 xl:col-span-1">
            <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
              Product Photos
            </h3>
            <div className="flex flex-col gap-2">
              {product?.images.map((image, index) => (
                <img
                  key={index}
                  className="w-full cursor-pointer"
                  src={image}
                  alt={`Product ${index}`}
                />
              ))}
            </div>
          </div>

          <div className="h-full md:col-span-2 xl:col-span-3">
            <ProductImageZoom image={product?.images[0]} />
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-2 flex flex-col gap-6 justify-center p-4">
            <h2 className="text-3xl font-semibold">{product?.title}</h2>
            <p className="text-xl font-semibold">₹ {product?.price}</p>
            <p className="text-base text-gray-600">{product?.description}</p>
            <p className="text-lg text-gray-600 font-semibold">Category: {product?.category}</p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">Color:</p>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2"
                >
                  {product?.variants?.colors?.map((color, index) => (
                    <option key={index} value={color}>{color}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold">Size:</p>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2"
                >
                  {product?.variants?.sizes?.map((size, index) => (
                    <option key={index} value={size}>{size}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={() => dispatch(addItems(product))}
              className="w-full py-4 bg-[#262626] hover:bg-black hover:shadow-lg duration-300 text-white text-lg font-titleFont transition-all ease-in-out rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;



