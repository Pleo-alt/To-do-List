import SearchBar from "./SearchBar";
function Header({ toggleSidebar}) {
  return (
    <header>
      <nav className="flex bg-transparent p-4 items-center justify-between bg-black fixed top-0 left-0 w-full">
        <button className="md:hidden" onClick={toggleSidebar} >
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
