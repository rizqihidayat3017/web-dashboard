const data = [
  {
    namaLengkap: "Rizqi Hidayat",
    kabupaten: "Ngawi",
    kecamatan: "Geneng",
    noRekening: "08227362728",
    nik: "35216181818",
    noCustomerCode: "000120",
    noVendor: "002899",
    technicalService: "Suyanto",
    status: "active",
    fotoKTPSrc: "/images/ktp.png",
    fotoNPWPSrc: "/images/npwp.png",
    fotoBukuTabunganSrc: "/images/tabungan.png",
    fotoCGRSrc: "/images/cgr.jpg",
    polygonSrc: "/images/Polygon.png",
  },
  // Tambahkan data lainnya sesuai kebutuhan
];
function Detailscgr() {
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
      <div className="w-screen overflow-x-scroll">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama Lengkap
              </th>
              <th scope="col" className="px-6 py-3">
                Kabupaten
              </th>
              <th scope="col" className="px-6 py-3">
                Kecamatan
              </th>
              <th scope="col" className="px-6 py-3">
                No Rekening
              </th>
              <th scope="col" className="px-6 py-3">
                NIK
              </th>
              <th scope="col" className="px-6 py-3">
                No.Customer Code
              </th>
              <th scope="col" className="px-6 py-3">
                No. Vendor
              </th>
              <th scope="col" className="px-6 py-3">
                Technical Service
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-10 py-3">
                Foto KTP
              </th>
              <th scope="col" className="px-10 py-3">
                Foto NPWP
              </th>
              <th scope="col" className="px-10 py-3">
                Foto Buku Tabungan
              </th>
              <th scope="col" className="px-10 py-3">
                Foto CGR
              </th>
              <th scope="col" className="px-6 py-3">
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
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.namaLengkap}
                </th>
                <td className="px-6 py-4">{item.kabupaten}</td>
                <td className="px-6 py-4">{item.kecamatan}</td>
                <td className="px-6 py-4">{item.noRekening}</td>
                <td className="px-6 py-4">{item.nik}</td>
                <td className="px-6 py-4">{item.noCustomerCode}</td>
                <td className="px-6 py-4">{item.noVendor}</td>
                <td className="px-6 py-4">{item.technicalService}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className={`absolute inset-0 bg-${
                        item.status === "active" ? "green" : "red"
                      }-200 opacity-50 rounded-full`}
                    />
                    <span className="relative text-xs">{item.status}</span>
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={item.fotoKTPSrc}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={item.fotoNPWPSrc}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={item.fotoBukuTabunganSrc}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={item.fotoCGRSrc}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
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
    </div>
  );
}

export default Detailscgr;