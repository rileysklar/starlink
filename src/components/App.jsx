import { useState, useEffect } from "react";
import BookingCalendar from "./BookingCalendar";
import LogoLander from "./LogoLander";
import TopNav from "./TopNav";
import Product from "./Product";
import Cart from "./Cart";
import Faq from "./Faq";

export default function App() {
  const [showLogo, setShowLogo] = useState(true);
  const [view, setView] = useState("faq");
  const [history, setHistory] = useState([]);
  const [quantities, setQuantities] = useState({
    "Product 1": 1,
    "Product 2": 1,
  });
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
    if (view === "logo") {
      setView("faq");
    } else if (view === "faq") {
      setView("product");
    } else if (view === "product") {
      setView("booking");
    } else if (view === "booking") {
      setView("cart");
    }
  };
  const goBack = () => {
    console.log("goBack is called");
    if (history.length > 0) {
      const lastView = history[history.length - 1];
      setView(lastView); // set the view to the last one in the history
      setHistory(history.slice(0, -1)); // remove the last view from the history
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
    <div className="App min-h-screen flex flex-col p-4 justify-start content-center w-full max-w-[500px]">
      <TopNav client:load />
      {showLogo ? (
        <LogoLander client:load />
      ) : view === "faq" ? (
        <Faq onNext={goToNextView} onBack={goBack} />
      ) : view === "product" ? (
        <Product
          onNext={goToNextView}
          goBack={goBack}
          onQuantityChange={handleQuantityChange}
          initialQuantity={quantities}
        />
      ) : view === "booking" ? (
        <BookingCalendar
          selectedRange={selectedRange}
          setSelectedRange={setSelectedRange}
          onNext={goToNextView}
          goBack={goBack}
        />
      ) : (
        view === "cart" && (
          <Cart
            dates={selectedRange}
            quantity={totalQuantity}
            onNext={goToNextView}
            goBack={goBack}
          />
        )
      )}
    </div>
  );
}
