import { useState, useEffect } from "react";
import "./BookingCalendar.css";

export default function BookingCalendar({
  darkMode,
  goBack,
  selectedRange,
  setSelectedRange,
  onNext,
}) {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
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
  const [isStartSelected, setIsStartSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

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
      <p className="text-center pb-2">Select the date for your rental.</p>
      <div className="calendar-container">
        <div className="flex flex-col items-center space-y-4 pb-8">
          <div className="px-2 pt-4 border-2 w-auto bg-transparent rounded-xl ">
            <div
              className="flex flex-col items-center space-y-3 border-b  pb-2"
              style={{ borderColor: "rgba(var(--text), .5)" }}
            >
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
          <div className="flex flex-col items-center p-4 rounded-xl mt-3 w-full">
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
                  })}`
                : "None"}
            </p>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-row w-full justify-between items-center">
          <button
            onClick={goBack}
            className={`${
              darkMode ? "" : "light-mode"
            } flex flex-row justify-center items-center text-right gap-2 p-6`}
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
            className={`${
              darkMode ? "" : "light-mode"
            } flex flex-row justify-center items-center text-right gap-2 p-6`}
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
