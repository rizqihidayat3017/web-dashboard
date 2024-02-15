import { useState } from "react";

const email = localStorage.getItem("email");

function NavbarV2() {
  // State untuk mengontrol status dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk menangani klik pada dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-customOrange border-gray-200 dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="flex justify-between ml-2">
        <div className="flex">
          <div className="h-12 w-12 pt-2">
            <img src="/images/logoFAMS.png" alt="Placeholder Image" />
          </div>
          <div className="pt-5">
            <span className="text-xl font-black leading-none text-white">
              FAMS
            </span>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-between mx-auto p-4">
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
            <div className="relative dropdown pl-6 pr-6">
              <button
                onClick={toggleDropdown}
                className="dropdown-toggle flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src="/images/cgr.jpg"
                  alt="user photo"
                />
              </button>
              {isOpen && (
                <ul
                  className="absolute -right-5 top-14 h-20 w-56 border-customOrange bg-white rounded-lg z-50"
                  aria-labelledby="user-menu-button"
                >
                  <span className="block text-sm text-gray-900">{email}</span>
                  <span className="block text-sm text-gray-500">
                    Marketing Executive
                  </span>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarV2;
