import SearchBar from "./SearchBar";
function Header({ toggleSidebar}) {
  return (
    <header>
      <nav className="flex bg-slate-900 p-4 items-center justify-between bg-black fixed top-0 left-0 w-full shadow-xl">
        <button className="md:hidden text-white" onClick={toggleSidebar} >
          &#9776;
        </button>
        <div className="relative ml-auto">
            <SearchBar />
        </div>
      </nav>
    </header>
  );
}
export default Header;
