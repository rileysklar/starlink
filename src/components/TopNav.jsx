import { useState, useEffect } from "react";
import "./TopNav.css";

export default function TopNav() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (
    <div
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-color)",
      }}
      className="flex top-nav w-full h-auto py-4 justify-between"
    >
      <a href="/">
        <h1 className="text-2xl p-1 font-bold text-center">
          📡 StarLink Rentals
        </h1>
      </a>
      {/* <button
        className={`px-4 py-2 rounded-full button-element ${
          darkMode ? "" : "light-mode"
        }`}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light" : "Dark"} mode
      </button> */}{" "}
      <a href="#contact" className="">
        <button className="px-4 py-2 rounded-full button-element">
          Contact us
        </button>
      </a>
    </div>
  );
}
