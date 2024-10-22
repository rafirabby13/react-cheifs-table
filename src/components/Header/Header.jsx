const Header = () => {
  return (
    <div className="navbar bg-base-100 py-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Recipe Calories</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Search</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <div className="flex items-center md:gap-4 ">
          <div className="px-4 border-2  items-center gap-4 rounded-lg hidden md:flex">
            <i className="fa-solid fa-magnifying-glass "></i>
            <input className="p-4 outline-none placeholder:text-2xl" type="text" placeholder="search" />
          </div>
          <div className="rounded-full border-2 bg-green-500 px-5 py-4">
            <i  className="fa-solid fa-user text-white"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
