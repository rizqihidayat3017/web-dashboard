const handleLogout = () => {
  localStorage.removeItem('email');
  localStorage.removeItem('password');
  window.location.href = '/signin';
};
// eslint-disable-next-line react/prop-types
const Sidebar = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-cols-12 bg-gray-100 overflow-hidden">
      <div className="flex flex-col  bg-white col-span-2">
        <ul className="flex flex-col">
          <li>
            <a
              href="/dashboardv2"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-home" />
              </span>
              <span className="text-sm font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="/pengajuancgrv2"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-user-check" />
              </span>
              <span className="text-sm font-medium">Pengajuan CGR</span>
            </a>
          </li>
          <li>
            <a
              href="/datacgrv2"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-user" />
              </span>
              <span className="text-sm font-medium">Data CGR</span>
            </a>
          </li>
          <li>
            <a
              href="/contractcgrv2"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-shopping-bag" />
              </span>
              <span className="text-sm font-medium">Contract CGR</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-drink" />
              </span>
              <span className="text-sm font-medium">Aktivitas</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-chat" />
              </span>
              <span className="text-sm font-medium">Surat jalan</span>
            </a>
          </li>
          <li>
            <a
              href="/invoice"
              className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-bell" />
              </span>
              <span className="text-sm font-medium">Memo pemotongan</span>
            </a>
          </li>
          <li>
            <a className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                <i className="bx bx-log-out" />
              </span>
              <span className="text-sm font-medium" onClick={handleLogout}>
                Logout
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full border border-customOrangeplus col-span-10">{children}</div>
    </div>
  );
};

export default Sidebar;