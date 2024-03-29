function Detailspetani() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
        <div className="flex justify-between">
          <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
            <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
              <div className="flex">
                <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                  <svg
                    width={18}
                    height={18}
                    className="w-4 lg:w-auto"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                      stroke="#455A64"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.9993 16.9993L13.1328 13.1328"
                      stroke="#455A64"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Tecnical Service
            </th>
            <th scope="col" className="px-6 py-3">
              No CGR
            </th>
            <th scope="col" className="px-6 py-3">
              No Contract
            </th>
            <th scope="col" className="px-6 py-3">
              Nama Petani
            </th>
            <th scope="col" className="px-6 py-3">
              Varietas
            </th>
            <th scope="col" className="px-6 py-3">
              Luas Lahan
            </th>
            <th scope="col" className="px-6 py-3">
              Lokasi
            </th>
            <th scope="col" className="px-6 py-3">
              Planning Tanam
            </th>
            <th scope="col" className="px-6 py-3">
              Polygon
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Rizqi Hidayat
            </th>
            <td className="px-6 py-4">001</td>
            <td className="px-6 py-4">002</td>
            <td className="px-6 py-4">Suyatno</td>
            <td className="px-6 py-4">BISI-18</td>
            <td className="px-6 py-4">5 HA</td>
            <td className="px-6 py-4">Jawa Tengah</td>
            <td className="px-6 py-4">1 Januari 2024 - 1 Desember 2024 </td>
            <td className="px-6 py-4">
              <div>
                <img
                  className="h-16 w-16 rounded-lg"
                  src="/images/Polygon.png"
                  alt=""
                />
              </div>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Rizqi Hidayat
            </th>
            <td className="px-6 py-4">001</td>
            <td className="px-6 py-4">002</td>
            <td className="px-6 py-4">Suyatno</td>
            <td className="px-6 py-4">BISI-18</td>
            <td className="px-6 py-4">5 HA</td>
            <td className="px-6 py-4">Jawa Tengah</td>
            <td className="px-6 py-4">1 Januari 2024 - 1 Desember 2024 </td>
            <td className="px-6 py-4">
              <div>
                <img
                  className="h-16 w-16 rounded-lg"
                  src="/images/Polygon.png"
                  alt=""
                />
              </div>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Rizqi Hidayat
            </th>
            <td className="px-6 py-4">001</td>
            <td className="px-6 py-4">002</td>
            <td className="px-6 py-4">Suyatno</td>
            <td className="px-6 py-4">BISI-18</td>
            <td className="px-6 py-4">5 HA</td>
            <td className="px-6 py-4">Jawa Tengah</td>
            <td className="px-6 py-4">1 Januari 2024 - 1 Desember 2024 </td>
            <td className="px-6 py-4">
              <div>
                <img
                  className="h-16 w-16 rounded-lg"
                  src="/images/Polygon.png"
                  alt=""
                />
              </div>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Rizqi Hidayat
            </th>
            <td className="px-6 py-4">001</td>
            <td className="px-6 py-4">002</td>
            <td className="px-6 py-4">Suyatno</td>
            <td className="px-6 py-4">BISI-18</td>
            <td className="px-6 py-4">5 HA</td>
            <td className="px-6 py-4">Jawa Tengah</td>
            <td className="px-6 py-4">1 Januari 2024 - 1 Desember 2024 </td>
            <td className="px-6 py-4">
              <div>
                <img
                  className="h-16 w-16 rounded-lg"
                  src="/images/Polygon.png"
                  alt=""
                />
              </div>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Rizqi Hidayat
            </th>
            <td className="px-6 py-4">001</td>
            <td className="px-6 py-4">002</td>
            <td className="px-6 py-4">Suyatno</td>
            <td className="px-6 py-4">BISI-18</td>
            <td className="px-6 py-4">5 HA</td>
            <td className="px-6 py-4">Jawa Tengah</td>
            <td className="px-6 py-4">1 Januari 2024 - 1 Desember 2024 </td>
            <td className="px-6 py-4">
              <div>
                <img
                  className="h-16 w-16 rounded-lg"
                  src="/images/Polygon.png"
                  alt=""
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Detailspetani;
