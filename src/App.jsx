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
<div className="flex w-full h-screen flex-col md:flex-row">
  <Header toggleSidebar={toggleSidebar} />
  <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
  <main className="flex-grow w-full bg-slate-900 md:mt-0 overflow-y-auto">
    <Dashboard />
  </main>
</div>


    </>
  );
}

export default App;
