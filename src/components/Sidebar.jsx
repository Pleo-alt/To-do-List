function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen bg-gray-800 p-3 shadow-xl
          w-full md:w-64
          transform
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block
          z-40
        `}
      >
        <nav className="space-y-4">
          <div className="flex items-center justify-between px-2 py-3 border-b-2 border-white">
            <h1 className="nav_header text-2xl text-center md:text-center font-bold text-[#EEEEEE] ml-4 p-0 m-0">
              My Tasks App
            </h1>
            <button
              className="p-2 text-white bg-transparent rounded-md md:hidden "
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <a
            href="#"
            className="nav_links flex items-center space-x-3 bg-[#58A0C8] text-[#EEEEEE]  hover:bg-[#78B9B5] px-4 py-3 rounded-lg transition-colors"
          >
            <span className="border border-[#EEEEEE] rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EEEEEE"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 13h8V3H3v10zM3 21h8v-6H3v6zM13 21h8v-10h-8v10zM13 3v6h8V3h-8z"
                />
              </svg>
            </span>
            <span>Dashboard</span>
          </a>

          <a
            href="#"
            className="nav_links flex items-center space-x-3 text-[#EEEEEE] px-4 hover:text-white hover:bg-gray-800 py-3 rounded-lg transition-colors"
          >
            <span className="border border-[#EEEEEE] rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EEEEEE"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5h6m-6 4h6m-6 4h6m2 6H7a2 2 0 01-2-2V5a2 2 0 012-2h3l1 1h4l1-1h3a2 2 0 012 2v14a2 2 0 01-2 2z"
                />
              </svg>
            </span>
            <span>All Tasks</span>
          </a>

          <a
            href="#"
            className="nav_links flex items-center space-x-3 text-[#EEEEEE] hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors"
          >
            <span className="border border-[#EEEEEE] rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EEEEEE"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span>Upcoming</span>
          </a>

          <a
            href="#"
            className="nav-links flex items-center space-x-3 text-[#EEEEEE] hover:text-white hover:bg-gray-800 px-4 py-3 rounded-lg font-semibold"
          >
            <span className="border border-[#EEEEEE] rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#EEEEEE"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span>Completed</span>
          </a>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
