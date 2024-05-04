import React, { useState, useEffect } from "react";

export default function Product({ onNext, onQuantityChange, initialQuantity }) {
  const [quantity, setQuantity] = useState(initialQuantity || 1);
  const handleQuantityChangeProduct1 = (event) => {
    onQuantityChange("Product 1", parseInt(event.target.value, 10));
  };
  const [darkMode] = useState(true);

  const handleQuantityChangeProduct2 = (event) => {
    onQuantityChange("Product 2", parseInt(event.target.value, 10));
  };
  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);
  return (
    <div className="flex flex-col justify-between">
      <div className="flex-1 flex flex-col items-center content-center m-4 p-6 border border-gray-300 rounded-lg">
        <img
          src="/starlink.png"
          alt="Product 1"
          className="rounded-lg mb-4 w-[200px] aspect-square"
        />
        <h2 className="text-xl font-bold mb-2">Starlink</h2>
        <p className="">
          High-speed internet. Available almost anywhere on Earth.
        </p>
        <label className="block mt-4">
          <span className=""></span>

          <select
            className={`py-2 px-3 rounded-full w-[94%] text-center select-element ${
              darkMode ? "" : "light-mode"
            }`}
            onChange={handleQuantityChangeProduct1}
          >
            {Array.from({ length: 5 }, (_, i) => i + 1).map((quantity) => (
              <option key={quantity} value={quantity}>
                {quantity} {quantity > 1 ? "Starlinks" : "Starlink"}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="flex-1 flex flex-col items-center content-center m-4 p-6 border border-gray-300 rounded-lg">
        <img
          src="/battery.png"
          alt="battery"
          className="rounded-lg mb-4 w-[200px] aspect-square"
        />
        <h2 className="text-xl font-bold mb-2">Battery</h2>
        <p className="">Designed for heavy-duty use in extreme environments.</p>
        <label className="block mt-4">
          <span className=""></span>
          <select
            className={`py-2 px-3 rounded-full w-[94%] text-center select-element ${
              darkMode ? "" : "light-mode"
            }`}
            onChange={handleQuantityChangeProduct2}
          >
            {Array.from({ length: 5 }, (_, i) => i + 1).map((quantity) => (
              <option key={quantity} value={quantity}>
                {quantity} {quantity > 1 ? "Batteries" : "Battery"}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="flex flex-row items-center justify-end">
        <button
          type="submit"
          className="flex flex-row justify-center items-center text-right gap-2 p-6"
          onClick={onNext}
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
  );
}
