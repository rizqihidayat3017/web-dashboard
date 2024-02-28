import { useState, useEffect } from "react";
import axios from "axios";

function Datacgr() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://10.12.6.122:5000/CGR")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {/* KOLOM INPUT */}
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

      {/* KOLOM TABEL */}
      <div className="w-full overflow-x-scroll">
        <table>
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                ID CGR
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                Nama CGR
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                Provinsi
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                Kabupaten
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                Kecamatan
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                Nomor Rekening
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                NIK
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                Foto NPWP
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                Foto KTP
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                Foto Tabungan
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                Foto Diri
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                ID TS
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                Customer Code
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                Verifikasi Code
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                Waktu Pembuatan
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
                Waktu Pembaruan
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* Gunakan map untuk membuat baris tabel sesuai dengan data */}
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900">
                    {item.id_cgr}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {item.nama_cgr}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {item.provinsi}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {item.kabupaten}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {item.kecamatan}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {item.no_rek}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {item.no_nik}
                </td>
                <td className="px-6 py-4">
                  <div>
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={item.foto_npwp}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={item.foto_ktp}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={item.foto_tabungan}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={item.foto_diri}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {item.id_ts}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <span
                    className={`relative inline-block px-3 py-1 font-semibold text-${
                      item.status === "Unverified" ? "red" : "green"
                    }-900 leading-tight`}
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    />
                    <span className="relative text-xs">{item.status}</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {item.cust_code}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {item.vend_code}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {item.created_at}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {item.updated_at}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Datacgr;

// import { Link } from "react-router-dom";

// function Datacgr() {
//   const data = [
//     {
//       nama: "Damilare Anjorin",
//       kabupaten: "3521110238390",
//       kecamatan: "19287802871",
//       nomorRekening: "19287802871",
//       NIK: "19287802871",
//       customerCode: "19287802871",
//       vendor: "19287802871",
//       technicalService: "19287802871",
//       status: "active",
//       link: "/detailscgr",
//     },
//     {
//       nama: "Damilare Anjorin",
//       kabupaten: "3521110238390",
//       kecamatan: "19287802871",
//       nomorRekening: "19287802871",
//       NIK: "19287802871",
//       customerCode: "19287802871",
//       vendor: "19287802871",
//       technicalService: "19287802871",
//       status: "active",
//       link: "/detailscgr",
//     },
//     {
//       nama: "Damilare Anjorin",
//       kabupaten: "3521110238390",
//       kecamatan: "19287802871",
//       nomorRekening: "19287802871",
//       NIK: "19287802871",
//       customerCode: "19287802871",
//       vendor: "19287802871",
//       technicalService: "19287802871",
//       status: "active",
//       link: "/detailscgr",
//     },
//     {
//       nama: "Damilare Anjorin",
//       kabupaten: "3521110238390",
//       kecamatan: "19287802871",
//       nomorRekening: "19287802871",
//       NIK: "19287802871",
//       customerCode: "19287802871",
//       vendor: "19287802871",
//       technicalService: "19287802871",
//       status: "active",
//       link: "/detailscgr",
//     },
//     {
//       nama: "Damilare Anjorin",
//       kabupaten: "3521110238390",
//       kecamatan: "19287802871",
//       nomorRekening: "19287802871",
//       NIK: "19287802871",
//       customerCode: "19287802871",
//       vendor: "19287802871",
//       technicalService: "19287802871",
//       status: "active",
//       link: "/detailscgr",
//     },
//     {
//       nama: "Damilare Anjorin",
//       kabupaten: "3521110238390",
//       kecamatan: "19287802871",
//       nomorRekening: "19287802871",
//       NIK: "19287802871",
//       customerCode: "19287802871",
//       vendor: "19287802871",
//       technicalService: "19287802871",
//       status: "active",
//       link: "/detailscgr",
//     },

//     // Tambahkan data lainnya sesuai kebutuhan
//   ];
//   return (
//     <div>
//       {/* KOLOM INPUT */}
//       <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
//         <div className="flex justify-between">
//           <div className="inline-flex border rounded w-full px-2 lg:px-6 h-12 bg-transparent">
//             <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
//               <div className="flex">
//                 <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
//                   <svg
//                     width={18}
//                     height={18}
//                     className="w-4 lg:w-auto"
//                     viewBox="0 0 18 18"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
//                       stroke="#455A64"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M16.9993 16.9993L13.1328 13.1328"
//                       stroke="#455A64"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </span>
//               </div>
//               <input
//                 type="text"
//                 className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs  text-gray-500 font-thin"
//                 placeholder="Search"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* KOLOM TABEL */}
//       <div className="w-full overflow-x-scroll">
//         <table>
//           <thead>
//             <tr>
//               <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
//                 Nama Lengkap
//               </th>
//               <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
//                 Kabupaten
//               </th>
//               <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
//                 Kecamatan
//               </th>
//               <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
//                 Nomor Rekening
//               </th>
//               <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
//                 NIK
//               </th>
//               <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
//                 No.Customer Code
//               </th>
//               <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
//                 No. Vendor
//               </th>
//               <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
//                 Technical Service
//               </th>
//               <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
//                 Status
//               </th>
//               <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-500 tracking-wider">
//                 Details CGR
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white">
//             {/* Gunakan map untuk membuat baris tabel sesuai dengan data */}
//             {data.map((item, index) => (
//               <tr key={index}>
//                 <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
//                   <div className="text-sm leading-5 text-blue-900">
//                     {item.nama}
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
//                   {item.kabupaten}
//                 </td>
//                 <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
//                   {item.kecamatan}
//                 </td>
//                 <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
//                   {item.nomorRekening}
//                 </td>
//                 <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
//                   {item.NIK}
//                 </td>
//                 <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
//                   {item.customerCode}
//                 </td>
//                 <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
//                   {item.vendor}
//                 </td>
//                 <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
//                   {item.technicalService}
//                 </td>
//                 <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
//                   <span
//                     className={`relative inline-block px-3 py-1 font-semibold text-${
//                       item.status === "active" ? "green" : "red"
//                     }-900 leading-tight`}
//                   >
//                     <span
//                       aria-hidden
//                       className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
//                     />
//                     <span className="relative text-xs">{item.status}</span>
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
//                   <Link to={item.link}>
//                     <button className="px-5 py-2 border-customOrange border text-customOrange rounded transition duration-300 hover:bg-customOrange hover:text-white focus:outline-none">
//                       Details
//                     </button>
//                   </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Datacgr;
