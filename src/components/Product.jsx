import React, { useState, useEffect } from "react";

export default function Product({
  onNext,
  goBack,
  product1Quantity,
  setProduct1Quantity,
  product2Quantity,
  setProduct2Quantity,
}) {
  const handleQuantityChangeProduct1 = (event) => {
    setProduct1Quantity(parseInt(event.target.value));
  };

  const handleQuantityChangeProduct2 = (event) => {
    setProduct2Quantity(parseInt(event.target.value));
  };

  return (
    <div>
      <div className="flex-1 flex flex-col items-center content-center mb-4 p-6 border border-gray-300 rounded-lg">
        <h2 className="text-xl text-center font-bold ">
          Select your product and quantity
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {" "}
        <div className="flex-1 flex flex-col items-center content-center p-4 border border-gray-300 rounded-lg">
          <img
            src="/starlink.png"
            alt="Product 1"
            className="rounded-lg mb-4 w-[150px] aspect-square"
          />
          <h2 className="text-xl text-center leading-3 font-bold mb-2">
            Starlink
          </h2>
          <p className="text-md text-center">
            High-speed internet. Available almost anywhere on Earth.
          </p>
          <label className="block mt-4">
            <select
              className={`py-2 px-3 rounded-full w-full text-center select-element `}
              onChange={handleQuantityChangeProduct1}
            >
              {Array.from({ length: 5 }, (_, i) => i).map((quantity) => (
                <option key={quantity} value={quantity}>
                  {quantity} {quantity > 1 ? "Starlinks" : "Starlink"}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex-1 flex flex-col items-center content-center p-4 border border-gray-300 rounded-lg">
          <img
            src="/battery.png"
            alt="battery"
            className="rounded-lg mb-4 w-[150px] aspect-square"
          />
          <h2 className="text-xl text-center leading-3 font-bold mb-2">
            Battery
          </h2>
          <p className="text-md text-center">
            Designed for heavy-duty use in extreme environments.
          </p>
          <label className="block mt-4">
            <select
              className={`py-2 px-3 rounded-full w-full text-center select-element `}
              onChange={handleQuantityChangeProduct2}
            >
              {Array.from({ length: 5 }, (_, i) => i).map((quantity) => (
                <option key={quantity} value={quantity}>
                  {quantity} {quantity > 1 ? "Batteries" : "Battery"}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-row w-full justify-between items-center">
          <button
            onClick={goBack}
            className={` flex flex-row justify-center items-center text-right gap-2 p-6`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="transform rotate-180"
            >
              <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM8.711,4.3l5.7,5.766L8.7,15.711,7.3,14.289l4.289-4.242L7.289,5.7Z" />
            </svg>
            Back
          </button>
          <button
            onClick={onNext}
            className={`
             flex flex-row justify-center items-center text-right gap-2 p-6`}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20ZM8.711,4.3l5.7,5.766L8.7,15.711,7.3,14.289l4.289-4.242L7.289,5.7Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
