import React from "react";

const ProductVariants = ({ variants, onSelect, selectedVariant }) => {
  return (
    <div className="flex flex-col gap-4">
      {variants.map((variant, index) => (
        <div
          key={index}
          onClick={() => variant.stock > 0 && onSelect(variant)} // Only selectable if in stock
          className={`cursor-pointer p-4 border rounded ${
            variant === selectedVariant ? "bg-blue-100" : "bg-white"
          } hover:bg-gray-200 ${variant.stock < 1 && "opacity-50 cursor-not-allowed"}`} // Style for out-of-stock
        >
          <p><strong>Color:</strong> {variant.color}</p>
          <p><strong>Size:</strong> {variant.size}</p>
          <p><strong>Price:</strong> ₹ {variant.price}</p>
          <p className={variant.stock < 5 ? "text-red-500" : "text-green-600"}>
            <strong>Stock:</strong> {variant.stock} {variant.stock < 1 && "(Out of stock)"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductVariants;
