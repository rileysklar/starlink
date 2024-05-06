import React, { useState, useEffect } from "react";

export default function Faq({ onNext }) {
  const faqData = [
    {
      question: "What is Starlink?",
      answer:
        "Starlink is a satellite internet constellation being constructed by SpaceX providing satellite Internet access. The constellation will consist of thousands of mass-produced small satellites in low Earth orbit (LEO), working in combination with ground transceivers.",
    },
    {
      question: "How can I rent Starlink?",
      answer:
        "You can rent Starlink from various online platforms that offer tech rentals. Make sure to check the availability in your area.",
    },
    {
      question: "What is the cost of renting Starlink?",
      answer:
        "The cost of renting Starlink can vary depending on the rental duration and the platform from which you are renting. Please check the specific platform for accurate pricing.",
    },
  ];

  const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-3 px-4 cursor-pointer focus:outline-none"
        onClick={onClick}
      >
        {question}
        <span className="float-right">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <p className="p-4 mb-4 bg-[var(--accent)] rounded-lg ">{answer}</p>
      )}
    </div>
  );

  const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
      <div className="w-full max-w-md mx-auto mt-4">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between">
      <div className="flex-1 flex flex-col items-center content-center mb-4 p-6 border border-gray-300 rounded-lg">
        <img
          src="/starlink-rv.jpg"
          alt="Product 1"
          className="rounded-lg mb-4 "
        />{" "}
        <h2 className="text-xl text-center font-bold">
          Rent a StarLink for your event, festival or wedding today!
        </h2>
      </div>
      <Accordion items={faqData} />
      <div className="flex flex-row items-center justify-end">
        <button
          type="submit"
          className="flex my-4 w-full flex-row justify-center bg-[var(--accent)] rounded-full items-center text-right gap-2 px-4 py-2"
          onClick={onNext}
        >
          Get Started
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
