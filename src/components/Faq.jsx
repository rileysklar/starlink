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
    {
      question: "What is included in a Starlink rental?",
      answer:
        "A typical Starlink rental includes the Starlink Kit, which consists of a dish, a modem, and a power supply.",
    },
    {
      question: "Can I use Starlink anywhere?",
      answer:
        "Starlink is designed to deliver high speed broadband internet to locations where access has been unreliable, expensive, or completely unavailable. However, the service is still in beta and therefore coverage may not be available everywhere.",
    },
    {
      question: "What internet speeds can I expect with Starlink?",
      answer:
        "During beta, users can expect to see data speeds vary from 50Mb/s to 150Mb/s and latency from 20ms to 40ms in most locations.",
    },
    {
      question: "Is there a data cap on Starlink rentals?",
      answer:
        "Currently, Starlink does not enforce data caps. However, this may change in the future.",
    },
    {
      question:
        "What happens if the Starlink equipment gets damaged during my rental period?",
      answer:
        "The terms for damage to rented equipment will depend on the rental agreement. Typically, you may be responsible for repair or replacement costs.",
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
      {isOpen && <p className="px-4 pb-3">{answer}</p>}
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
        <h2 className="text-xl font-bold">Welcome to StarLink Rental</h2>
      </div>
      <Accordion items={faqData} />
      <div className="flex flex-row items-center justify-end">
        <button
          type="submit"
          className="flex flex-row justify-center items-center text-right gap-2 p-6"
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
