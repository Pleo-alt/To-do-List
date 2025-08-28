import { useState, useEffect } from "react";
import Loading from "./Loading";
const API_BASE_URL = "https://api.api-ninjas.com/v1";
const QUOTE_API_KEY = import.meta.env.VITE_API_NINJAS_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-Api-Key": QUOTE_API_KEY,
  },
};

function Quote() {
  //API Quote State Logic
  const [errorMessage, setErrorMessage] = useState("");
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/quotes`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error(`Failed to fetch quote: ${response.statusText}`);
      }

      const data = await response.json();

      if (!data || !Array.isArray(data)) {
        setErrorMessage("Unexpected response format.");
        return;
      }

      setQuote(data[0]);
    } catch (e) {
      console.error("Error fetching quote:", e);
      setErrorMessage("Failed to fetch quote. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote_container h-full max-w-xl mt-13 md:mt-17 flex p-6 md:p-2 ml-0 md:ml-4">
      {loading ? (
        <Loading />
      ) : errorMessage ? (
        <p className="text-center text-red-500 font-medium">{errorMessage}</p>
      ) : quote ? (
        <div className="bg-white border-l-4 border-blue-500 shadow-md rounded-lg p-6 transition-all duration-300 hover:shadow-xl w-full mx-auto">
          <div className="max-h-40 overflow-y-auto pr-2">
            <p className="text-lg text-gray-800 italic leading-relaxed">
              “{quote.quote}”
            </p>
          </div>
          <p className="mt-4 text-right text-sm text-blue-600 font-semibold">
            — {quote.author}
          </p>
        </div>
      ) : null}
    </div>
  );
}
export default Quote;
