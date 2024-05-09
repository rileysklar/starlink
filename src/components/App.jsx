import { useState, useEffect } from "react";
import BookingCalendar from "./BookingCalendar";
import LogoLander from "./LogoLander";
import TopNav from "./TopNav";
import Product from "./Product";
import Cart from "./Cart";
import Faq from "./Faq";
import Thanks from "./Thanks";

function flattenProductData(products) {
  return products.map((product) => {
    const { id, acf_fields } = product;
    const { product_name, product_description, product_image } = acf_fields;

    let imageUrl = "";
    let maxArea = 0;

    // Check if there are image sizes and find the largest one
    if (product_image && product_image.sizes) {
      const sizes = product_image.sizes;
      for (const size in sizes) {
        if (size.includes("width") && sizes[size.replace("width", "height")]) {
          const width = parseInt(sizes[size], 10);
          const height = parseInt(sizes[size.replace("width", "height")], 10);
          const area = width * height;
          if (area > maxArea) {
            maxArea = area;
            imageUrl = sizes[size.replace("-width", "")];
          }
        }
      }
    }

    return {
      id,
      product_name,
      product_description,
      imageUrl,
    };
  });
}

export default function App({ products }) {
  console.log(flattenProductData(products));

  const flattenedProducts = flattenProductData(products);

  const [product1Quantity, setProduct1Quantity] = useState(0);
  const [product2Quantity, setProduct2Quantity] = useState(0);

  const [showLogo, setShowLogo] = useState(true);
  const [view, setView] = useState("faq");
  const [history, setHistory] = useState([]);

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
    } else if (view === "cart") {
      setView("thanks"); // Navigate to the Thanks view after the Cart view
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
          product1Quantity={product1Quantity}
          setProduct1Quantity={setProduct1Quantity}
          product2Quantity={product2Quantity}
          setProduct2Quantity={setProduct2Quantity}
          flattenedProducts={flattenedProducts}
        />
      ) : view === "booking" ? (
        <BookingCalendar
          selectedRange={selectedRange}
          setSelectedRange={setSelectedRange}
          onNext={goToNextView}
          goBack={goBack}
        />
      ) : view === "cart" ? (
        <Cart
          dates={selectedRange}
          product1Quantity={product1Quantity}
          product2Quantity={product2Quantity}
          onNext={goToNextView}
          goBack={goBack}
        />
      ) : view === "thanks" ? (
        <Thanks
          goBack={goBack}
          dates={selectedRange}
          product1Quantity={product1Quantity}
          product2Quantity={product2Quantity}
        />
      ) : null}
    </div>
  );
}
