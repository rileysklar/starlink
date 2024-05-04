export default function Cart({ dates = {}, quantity, onNext, goBack }) {
  const { start, end } = dates;
  return (
    <div
      className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-color)",
      }}
    >
      <div className="md:flex">
        <div className="p-8">
          <div className=" tracking-wide text-2xl font-semibold">Checkout</div>
          <p className="block mt-1 text-lg leading-tight font-medium">
            Quantity: {quantity}
          </p>
          <p className="mt-2">Start Date: {start?.toString()}</p>
          <p className="mt-2">End Date: {end?.toString()}</p>
        </div>
      </div>

      <form className="mt-4 p-8">
        <div className=" text-2xl pb-2 font-semibold">Contact Information</div>
        <input
          className="mb-2 w-full p-2 rounded-md"
          type="text"
          placeholder="First Name"
          style={{
            backgroundColor: "var(--background)",
            color: "var(--text-color)",
            border: "1px solid var(--text-color)",
          }}
        />
        <input
          className="mb-2 w-full p-2 rounded-md"
          type="text"
          placeholder="Last Name"
          style={{
            backgroundColor: "var(--background)",
            color: "var(--text-color)",
            border: "1px solid var(--text-color)",
          }}
        />
        <input
          className="mb-2 w-full p-2 rounded-md"
          type="email"
          placeholder="Email"
          style={{
            backgroundColor: "var(--background)",
            color: "var(--text-color)",
            border: "1px solid var(--text-color)",
          }}
        />
        <textarea
          className="mb-2 w-full p-2 b-2 rounded-md"
          placeholder="Message"
          style={{
            backgroundColor: "var(--background)",
            border: "1px solid var(--text-color)",
            color: "var(--text-color)",
          }}
        ></textarea>
        <input
          className="mb-2 w-full p-2 rounded-md hidden"
          type="text"
          placeholder="Start Date"
          value={start?.toString()}
          readOnly
          style={{
            backgroundColor: "var(--background)",
            color: "var(--text-color)",
          }}
        />
        <input
          className="mb-2 w-full p-2 rounded-md hidden"
          type="text"
          placeholder="End Date"
          value={end?.toString()}
          readOnly
          style={{
            backgroundColor: "var(--background)",
            color: "var(--text-color)",
          }}
        />
        <input
          className="mb-2 w-full p-2 rounded-md hidden"
          type="number"
          placeholder="Quantity"
          value={quantity}
          readOnly
          style={{
            backgroundColor: "var(--background)",
            color: "var(--text-color)",
          }}
        />
        <button
          className="w-full p-2 rounded-md bg-blue-500 text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
