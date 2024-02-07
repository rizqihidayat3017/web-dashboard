function Petanidetails() {
  const data = [
    {
      technicalService: "Rizqi Hidayat",
      noCGR: "001",
      noContract: "002",
      namaPetani: "Suyatno",
      varietas: "BISI-18",
      luasLahan: "5 HA",
      lokasi: "Jawa Tengah",
      planningTanam: "1 Januari 2024 - 1 Desember 2024",
      polygonSrc: "/images/Polygon.png",
    },
    {
      technicalService: "Rizqi Hidayat",
      noCGR: "001",
      noContract: "002",
      namaPetani: "Suyatno",
      varietas: "BISI-18",
      luasLahan: "5 HA",
      lokasi: "Jawa Tengah",
      planningTanam: "1 Januari 2024 - 1 Desember 2024",
      polygonSrc: "/images/Polygon.png",
    },
    {
      technicalService: "Rizqi Hidayat",
      noCGR: "001",
      noContract: "002",
      namaPetani: "Suyatno",
      varietas: "BISI-18",
      luasLahan: "5 HA",
      lokasi: "Jawa Tengah",
      planningTanam: "1 Januari 2024 - 1 Desember 2024",
      polygonSrc: "/images/Polygon.png",
    },
    {
      technicalService: "Rizqi Hidayat",
      noCGR: "001",
      noContract: "002",
      namaPetani: "Suyatno",
      varietas: "BISI-18",
      luasLahan: "5 HA",
      lokasi: "Jawa Tengah",
      planningTanam: "1 Januari 2024 - 1 Desember 2024",
      polygonSrc: "/images/Polygon.png",
    },
    {
      technicalService: "Rizqi Hidayat",
      noCGR: "001",
      noContract: "002",
      namaPetani: "Suyatno",
      varietas: "BISI-18",
      luasLahan: "5 HA",
      lokasi: "Jawa Tengah",
      planningTanam: "1 Januari 2024 - 1 Desember 2024",
      polygonSrc: "/images/Polygon.png",
    },
    // data lainnya
  ];
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
        <div className="flex justify-between">
          <div className="inline-flex border rounded w-full px-2 lg:px-6 h-12 bg-transparent">
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
                className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs  text-gray-500 font-thin"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              Tecnical Service
            </th>
            <th scope="col" className="px-4 py-3">
              No CGR
            </th>
            <th scope="col" className="px-4 py-3">
              No Contract
            </th>
            <th scope="col" className="px-4 py-3">
              Nama Petani
            </th>
            <th scope="col" className="px-4 py-3">
              Varietas
            </th>
            <th scope="col" className="px-4 py-3">
              Luas Lahan
            </th>
            <th scope="col" className="px-4 py-3">
              Lokasi
            </th>
            <th scope="col" className="px-4 py-3">
              Planning Tanam
            </th>
            <th scope="col" className="px-4 py-3">
              Polygon
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-4 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                {item.technicalService}
              </td>
              <td className="px-4 py-4">{item.noCGR}</td>
              <td className="px-4 py-4">{item.noContract}</td>
              <td className="px-4 py-4">{item.namaPetani}</td>
              <td className="px-4 py-4">{item.varietas}</td>
              <td className="px-4 py-4">{item.luasLahan}</td>
              <td className="px-4 py-4">{item.lokasi}</td>
              <td className="px-4 py-4">{item.planningTanam}</td>
              <td className="px-4 py-4">
                <div>
                  <img
                    className="h-16 w-16 rounded-lg"
                    src={item.polygonSrc}
                    alt=""
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Petanidetails;
