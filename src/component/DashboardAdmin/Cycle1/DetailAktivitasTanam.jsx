import { Link } from "react-router-dom";

function DetailAktivitasTanam() {
  const activitasTanam = [
    {
      nama: "Rizqi Hidayat",
      status: "Berhasil",
      noContract: "32291023",
      luasAreapENGAJUAN: "1500 HA",
      tglCycle: "2 Desember 2024",
      tipeTumbuhan: "BISI-18",
      alamat: "Sepanjang, Sidoarjo",
      luasAreaTanam: "1500 HA",
      banyakBenih: "1 Ton",
      pemupukan: "Urea",
      catatan: "Aman Terkendali",
      fotoGeotag: "/images/Polygon.png",
      fotoBenih: "/images/benih.jpg",
      fotoKegiatan: "/images/demplot.jpg",
      fotoKondisiTanam: "/images/kondisilahan.jpg",
      linkDetails: "/demsprey",
    },
    // Tambahkan data kontrak lainnya di sini sesuai kebutuhan
  ];
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
        <table className="w-full justify-items-center text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama CGR
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Nomor Contract
              </th>
              <th scope="col" className="px-6 py-3">
                Luas Area Pengajuan
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3">
                Tipe Tumbuhan
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                Luas Area tanam
              </th>
              <th scope="col" className="px-6 py-3">
                Banyak Benih
              </th>
              <th scope="col" className="px-6 py-3">
                Pemupukan
              </th>
              <th scope="col" className="px-6 py-3">
                Catatan
              </th>
              <th scope="col" className="px-8 py-3">
                Foto Geotag
              </th>
              <th scope="col" className="px-8 py-3">
                Foto Bungkus Benih
              </th>
              <th scope="col" className="px-8 py-3">
                Foto kegiatan
              </th>
              <th scope="col" className="px-8 py-3">
                foto kondisi Tanam
              </th>
              <th scope="col" className="pl-44 pr-14 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {activitasTanam.map((contract, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {contract.nama}
                </th>
                <td className="px-6 py-4">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    />
                    <span className="relative text-xs">{contract.status}</span>
                  </span>
                </td>
                <td className="px-6 py-4">{contract.noContract}</td>
                <td className="px-6 py-4">{contract.luasAreapENGAJUAN}</td>
                <td className="px-6 py-4">{contract.tglCycle}</td>
                <td className="px-6 py-4">{contract.tipeTumbuhan}</td>
                <td className="px-6 py-4">{contract.alamat}</td>
                <td className="px-6 py-4">{contract.luasAreaTanam}</td>
                <td className="px-6 py-4">{contract.banyakBenih}</td>
                <td className="px-6 py-4">{contract.pemupukan}</td>
                <td className="px-6 py-4">{contract.catatan}</td>
                <td className="px-6 py-4">
                  <div>
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={contract.fotoGeotag}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={contract.fotoBenih}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={contract.fotoKegiatan}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4 flex justify-start">
                  <div className="flex flex-row">
                    <img
                      className="h-16 w-16 rounded-lg mr-2"
                      src={contract.fotoKondisiTanam}
                      alt=""
                    />
                    <img
                      className="h-16 w-16 rounded-lg mr-2"
                      src={contract.fotoKondisiTanam}
                      alt=""
                    />
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={contract.fotoKondisiTanam}
                      alt=""
                    />
                  </div>
                </td>
                <td className="pl-44 pr-14 py-4">
                  <Link to={contract.linkDetails}>
                    <button className="px-5 py-2 border-customOrange border text-customOrange rounded transition duration-300 hover:bg-customOrange hover:text-white focus:outline-none">
                      Ubah Jadwal
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetailAktivitasTanam;
