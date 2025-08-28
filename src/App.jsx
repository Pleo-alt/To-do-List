import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./sections/Dashboard";

const API_BASE_URL = "https://api.api-ninjas.com/v1";
const QUOTE_API_KEY = import.meta.env.VITE_API_NINJAS_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-Api-Key": QUOTE_API_KEY,
  },
};

function App() {
  //Sidebar Logic handled in Sidebar.jsx and Header.jsx
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setisSidebarOpen(!isSidebarOpen);
  };

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
    <>
    <div className="flex">
      <Header toggleSidebar = {toggleSidebar} />
      <Sidebar isOpen = {isSidebarOpen} toggleSidebar = {toggleSidebar}/>
      <main>
            <Dashboard />
      </main>

    </div>

    </>
  );
}

export default App;
