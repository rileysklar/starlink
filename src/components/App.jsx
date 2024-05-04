import { useState, useEffect } from "react";
import BookingCalendar from "./BookingCalendar";
import LogoLander from "./LogoLander";
import TopNav from "./TopNav";
import Product from "./Product";
import Cart from "./Cart";

export default function App() {
  const [showLogo, setShowLogo] = useState(true);
  const [view, setView] = useState("product");
  const [history, setHistory] = useState([]);
  const [quantities, setQuantities] = useState({
    "Product 1": 1,
    "Product 2": 1,
  });
  const [darkMode, setDarkMode] = useState(true);
  const [selectedRange, setSelectedRange] = useState({
    start: null,
    end: null,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const goToNextView = () => {
    setHistory([...history, view]); // add current view to history before navigating to next view
    setView(view === "product" ? "booking" : "cart");
  };

  const goBack = () => {
    if (history.length > 0) {
      setView(history[history.length - 1]);
      setHistory((prevHistory) => prevHistory.slice(0, prevHistory.length - 1));
    }
  };

  const handleQuantityChange = (product, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: quantity,
    }));
  };
  const totalQuantity = Object.values(quantities).reduce((a, b) => a + b, 0);

  return (
    <div className="App h-screen flex flex-col justify-start content-center w-full max-w-[500px]">
      <TopNav client:load />
      {showLogo ? (
        <LogoLander client:load />
      ) : view === "product" ? (
        <Product
          onNext={goToNextView}
          onBack={goBack}
          onQuantityChange={handleQuantityChange}
          initialQuantity={quantities}
        />
      ) : view === "booking" ? (
        <BookingCalendar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          selectedRange={selectedRange}
          setSelectedRange={setSelectedRange}
          onNext={goToNextView}
          onBack={goBack}
        />
      ) : (
        <Cart
          dates={selectedRange}
          quantity={totalQuantity}
          onNext={goToNextView}
          onBack={goBack}
        />
      )}
    </div>
  );
}
