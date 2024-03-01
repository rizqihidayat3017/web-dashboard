import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ children }) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    // Ambil path dari URL saat ini dan tentukan submenu yang aktif
    const currentPath = location.pathname;
    setActiveMenu(currentPath);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/";
  };

  return (
    <div className="h-[95vh] grid grid-cols-12 bg-gray-100 overflow-hidden">
      <div className="hidden sm:flex flex-col bg-white col-span-2">
        <ul className="flex flex-col">
          <li>
            <Link
              to="/dashboardv2"
              className={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 ${
                activeMenu === "/dashboardv2"
                  ? "bg-customOrange text-white rounded-sm"
                  : "text-gray-500"
              } hover:text-gray-900`}
            >
              <span className="text-sm font-medium">
                <i className="inline-flex items-center justify-center h-12 w-12 text-lg bx bx-home px-1" />
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/pengajuancgrv2"
              className={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 ${
                activeMenu === "/pengajuancgrv2"
                  ? "bg-customOrange text-white rounded-sm"
                  : "text-gray-500"
              } hover:text-gray-900`}
            >
              <span className="text-sm font-medium">
                <i className="inline-flex items-center justify-center h-12 w-12 text-lg bx bx-user-check px-1" />
                Pengajuan CGR
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/datacgrv2"
              className={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 ${
                activeMenu === "/datacgrv2"
                  ? "bg-customOrange text-white rounded-sm"
                  : "text-gray-500"
              } hover:text-gray-900`}
            >
              <span className="text-sm font-medium">
                <i className="inline-flex items-center justify-center h-12 w-12 text-lg bx bx-user px-1" />
                Data CGR
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/contractcgrv2"
              className={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 ${
                activeMenu === "/contractcgrv2"
                  ? "bg-customOrange text-white rounded-sm"
                  : "text-gray-500"
              } hover:text-gray-900`}
            >
              <span className="text-sm font-medium">
                <i className="inline-flex items-center justify-center h-12 w-12 text-lg bx bx-shopping-bag px-1" />
                Contract CGR
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              onClick={handleLogout}
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-log-out" />
              </span>
              <span className="text-sm font-medium">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-screen overflow-y-scroll border border-customOrangeplus col-span-10">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
