import React, { useState } from 'react';

const ProductImageZoom = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <img
        className="w-full h-full object-cover cursor-pointer"
        src={image}
        alt="Product Main"
        onClick={handleImageClick}
      />
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <img
            className="max-w-full max-h-full"
            src={image}
            alt="Zoomed Product"
            onClick={handleClose}
          />
          <button className="absolute top-4 right-4 text-white text-2xl" onClick={handleClose}>
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default ProductImageZoom;
