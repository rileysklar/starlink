import { useState, useEffect } from "react";
import "./TopNav.css";

export default function TopNav() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (
    <div
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-color)",
      }}
      className="flex top-nav w-full h-auto p-4 justify-end"
    >
      <button
        className={`px-4 py-2 rounded-full button-element ${
          darkMode ? "" : "light-mode"
        }`}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light" : "Dark"} mode
      </button>
    </div>
  );
}
