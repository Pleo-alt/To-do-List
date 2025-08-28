import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./sections/Dashboard";
function App() {
  //Sidebar Logic handled in Sidebar.jsx and Header.jsx
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setisSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="flex min-h-screen w-full flex-col md:flex-row bg-[#F8F8FF]">
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-grow w-full">
          <Dashboard />
        </main>
      </div>
    </>
  );
}

export default App;
