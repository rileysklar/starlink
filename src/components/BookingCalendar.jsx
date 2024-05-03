import { useState, useEffect } from "react";
import "./BookingCalendar.css";

export default function BookingCalendar() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [darkMode, setDarkMode] = useState(true);
  const [month, setMonth] = useState(new Date().getMonth());
  const [quantity, setQuantity] = useState(1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 6 }, (_, i) => currentYear + i);
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const placeholders = Array.from({ length: firstDayOfMonth }, () => null);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const [selectedRange, setSelectedRange] = useState({
    start: null,
    end: null,
  });
  const [isStartSelected, setIsStartSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleDayClick = (day) => {
    const date = new Date(year, month, day);
    if (!isStartSelected) {
      setSelectedRange({ start: date, end: null });
      setIsStartSelected(true);
    } else {
      setSelectedRange((prev) => ({ ...prev, end: date }));
      setIsStartSelected(false);
    }
  };

  const handleMonthChange = (e) => {
    setMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value));
  };

  useEffect(() => {
    if (
      selectedRange.start &&
      selectedRange.end &&
      selectedRange.start > selectedRange.end
    ) {
      setErrorMessage("Start date cannot be later than end date");
    } else {
      setErrorMessage(null);
    }
  }, [selectedRange]);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode);
  }, [darkMode]);

  return (
    <div
      className="flex flex-col"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-color)",
      }}
    >
      <div className="calendar-container">
        <div className="flex flex-col items-center space-y-4 pb-8">
          <div className="px-2 pt-4 border-2 w-auto bg-transparent rounded-xl shadow-lg ">
            <div
              className="flex flex-col items-center space-y-3 border-b  pb-2"
              style={{ borderColor: "rgba(var(--text), 1)" }}
            >
              <select
                value={quantity}
                onChange={handleQuantityChange}
                className={`py-2 px-3 rounded-full w-full text-center select-element ${
                  darkMode ? "" : "light-mode"
                }`}
              >
                {Array.from({ length: 5 }, (_, i) => i + 1).map((quantity) => (
                  <option key={quantity} value={quantity}>
                    {quantity} {quantity > 1 ? "Starlinks" : "Starlink"}
                  </option>
                ))}
              </select>

              <div className="flex justify-center space-x-3 px-2 w-full">
                <select
                  value={month}
                  onChange={handleMonthChange}
                  className={`bg-transparent py-2 px-3 rounded-full border w-1/2 text-center select-element ${
                    darkMode ? "" : "light-mode"
                  }`}
                >
                  {months.map((name, index) => (
                    <option key={index} value={index}>
                      {name}
                    </option>
                  ))}
                </select>
                <select
                  value={year}
                  onChange={handleYearChange}
                  className={`bg-transparent py-2 px-3 rounded-full border w-1/2 text-center select-element ${
                    darkMode ? "" : "light-mode"
                  }`}
                >
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="p-2">
              <div className="grid grid-cols-7 text-center">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (dayOfWeek) => (
                    <div key={dayOfWeek}>{dayOfWeek}</div>
                  )
                )}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {placeholders.map((_, index) => (
                  <div
                    className="flex rounded-md aspect-square justify-center  items-center border border-gray-300 p-2"
                    key={`placeholder-${index}`}
                  ></div>
                ))}
                {daysArray.map((day) => {
                  const date = new Date(year, month, day);
                  return (
                    <div
                      className={`flex justify-center rounded-md aspect-square text-sm items-center border border-gray-300 p-2 cursor-pointer 
        ${
          selectedRange.start?.getTime() === date.getTime() ||
          selectedRange.end?.getTime() === date.getTime()
            ? "bg-cyan-300 text-indigo-950"
            : ""
        }
        ${
          selectedRange.start &&
          selectedRange.end &&
          date.getTime() > selectedRange.start.getTime() &&
          date.getTime() < selectedRange.end.getTime()
            ? "bg-emerald-300 text-indigo-950"
            : ""
        }`}
                      key={day}
                      onClick={() => handleDayClick(day)}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 border-2 shadow-lg rounded-xl mt-3 w-full">
            <h3 className="text-xl">Selected Dates: </h3>
            <p>
              {selectedRange.start && selectedRange.end
                ? `${selectedRange.start.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })} - ${selectedRange.end.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}, ${quantity} ${quantity > 1 ? "Starlinks" : "Starlink"}`
                : "None"}
            </p>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button
              type="submit"
              className="mt-6 hidden bg-transparent bg-white transition-all duration-200 text-indigo-950 py-2 px-3 rounded-full w-full text-center"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
