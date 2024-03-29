import { useState } from "react";
import { Link } from "react-router-dom";

function PengajuanCGR() {
  const [pengajuanData, setPengajuanData] = useState([
    {
      namaLengkap: "Rizqi Hidayat",
      kabupaten: "Ngawi",
      kecamatan: "Geneng",
      noRekening: "35215628299",
      NIK: "35215628299",
      status: "active",
    },
    {
      namaLengkap: "Rizqi Hidayat",
      kabupaten: "Ngawi",
      kecamatan: "Geneng",
      noRekening: "35215628299",
      NIK: "35215628299",
      status: "inactive",
    },
    {
      namaLengkap: "Rizqi Hidayat",
      kabupaten: "Ngawi",
      kecamatan: "Geneng",
      noRekening: "35215628299",
      NIK: "35215628299",
      status: "active",
    },
    {
      namaLengkap: "Rizqi Hidayat",
      kabupaten: "Ngawi",
      kecamatan: "Geneng",
      noRekening: "35215628299",
      NIK: "35215628299",
      status: "inactive",
    },
    {
      namaLengkap: "Rizqi Hidayat",
      kabupaten: "Ngawi",
      kecamatan: "Geneng",
      noRekening: "35215628299",
      NIK: "35215628299",
      status: "active",
    },
    
    // Masukkan data pengajuan lainnya di sini jika ada
  ]);

  const handleDelete = (index) => {
    const updatedData = [...pengajuanData];
    updatedData.splice(index, 1);
    setPengajuanData(updatedData);
  };

  // const handleApprove = (index) => {
  //   const updatedData = [...pengajuanData];
  //   updatedData[index].status = "approved";
  //   setPengajuanData(updatedData);
  // };

  return (
    <div>
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
      <div className="w-full overflow-x-scroll">
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
                No. Rekening
              </th>
              <th scope="col" className="px-6 py-3">
                NIK
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                View
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping data pengajuan menggunakan map */}
            {pengajuanData.map((data, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.namaLengkap}
                </th>
                <td className="px-6 py-4">{data.kabupaten}</td>
                <td className="px-6 py-4">{data.kecamatan}</td>
                <td className="px-6 py-4">{data.noRekening}</td>
                <td className="px-6 py-4">{data.NIK}</td>
                <td className="px-6 py-4">
                  <span
                    className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                      data.status === "active"
                        ? "text-green-900"
                        : "text-red-900"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute inset-0 ${
                        data.status === "active" ? "bg-green-200" : "bg-red-200"
                      } opacity-50 rounded-full`}
                    />
                    <span className="relative text-xs">{data.status}</span>
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Link to="/detailspengajuancgrv2">
                    <button className="px-5 py-2 border-customOrange border text-customOrange rounded transition duration-300 hover:bg-customOrange hover:text-white focus:outline-none">
                      Details
                    </button>
                  </Link>
                </td>
                <td className="flex items-center px-6 py-4">
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded mr-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PengajuanCGR;
