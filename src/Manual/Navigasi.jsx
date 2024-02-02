function Navigasi() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <span className="ml-16 text-xl font-black leading-none text-customOrange">
            FAMS
          </span>
        </div>
        <div className="flex md:order-2">
          <ul className="text-sm mr-4 flex flex-col md:p-0 mt-4 font-thin border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block text-gray-500 bg-blue-700 rounded md:bg-transparent md:hover:text-customOrange md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Feedback
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-customOrange md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Preference
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-customOrange md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Change Role
              </a>
            </li>
          </ul>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-400 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        ></div>
      </div>
    </nav>
  );
}

export default Navigasi;
