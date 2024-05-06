import React, { useEffect } from "react";

export default function Thanks({
  dates,
  onNext,
  product1Quantity,
  product2Quantity,
  goBack,
}) {
  const { start, end } = dates;

  return (
    <div
      className=""
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-color)",
      }}
    >
      <div className="flex-1 flex flex-col items-center content-center mb-4 p-6 border border-gray-300 rounded-lg">
        <h2 className="text-xl text-center font-bold">
          <p>
            {start?.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
            {" - "}
            {end?.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </h2>
        <div className="">
          {product1Quantity !== undefined && (
            <div className="flex flex-row">
              <h2>StarLink quantity: {product1Quantity}</h2>
            </div>
          )}
          {product2Quantity !== undefined && (
            <div className="flex flex-row">
              <h2>Battery quantity: {product2Quantity}</h2>
            </div>
          )}
        </div>
      </div>
      <p>
        Thank you for booking your StarLink rental with us! We will be in touch
        with you via email for within 48 hours for payment and next steps.{" "}
      </p>

      <div className="flex justify-end">
        <div className="flex flex-row w-full justify-between items-center">
          <button
            onClick={goBack}
            className={`flex flex-row justify-center items-center text-right gap-2 p-6`}
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
          {/* <button
            onClick={onNext}
            className={`$\flex flex-row justify-center items-center text-right gap-2 p-6`}
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
          </button> */}
        </div>
      </div>
    </div>
  );
}
