function DetailCycle3() {
  const detailCycle3 = [
    {
      nama: "Rizqi Hidayat",
      status: "Berhasil",
      noContract: "32291023",
      luasArea: "1500 HA",
      tglCycle: "2 Desember 2024",
      tipeTanaman: "BISI-18",
      alamat: "Sepanjang, Sidoarjo",
      luasAreaTanam: "1500 HA",
      kematianTanaman: "50%",
      penyemprotanPAG: "-",
      jenisPAG: "Paket A",
      semprotPestisida: "-",
      jenisPestisida: "Urea",
      jenisproduk: "-",
      satuan: "-",
      catatan: "Aman Terkendali",
      fotoGeotag: "/images/Polygon.png",
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
                Luas Area
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3">
                Tipe Tanaman
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                Luas Area tanam
              </th>
              <th scope="col" className="px-6 py-3">
                Kematian tanaman
              </th>
              <th scope="col" className="px-6 py-3">
                Penyemprotan PAG
              </th>
              <th scope="col" className="px-6 py-3">
                Jenis Paket PAG
              </th>
              <th scope="col" className="px-6 py-3">
                Penyemprotan Pestisida
              </th>
              <th scope="col" className="px-6 py-3">
                Jenis Pestisida
              </th>
              <th scope="col" className="px-6 py-3">
                Jenis Produk
              </th>
              <th scope="col" className="px-6 py-3">
                Satuan
              </th>
              <th scope="col" className="px-6 py-3">
                Catatan
              </th>
              <th scope="col" className="px-8 py-3">
                Foto Geotag
              </th>
            </tr>
          </thead>
          <tbody>
            {detailCycle3.map((cycle, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {cycle.nama}
                </th>
                <td className="px-6 py-4">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    />
                    <span className="relative text-xs">{cycle.status}</span>
                  </span>
                </td>
                <td className="px-6 py-4">{cycle.noContract}</td>
                <td className="px-6 py-4">{cycle.luasArea}</td>
                <td className="px-6 py-4">{cycle.tglCycle}</td>
                <td className="px-6 py-4">{cycle.tipeTanaman}</td>
                <td className="px-6 py-4">{cycle.alamat}</td>
                <td className="px-6 py-4">{cycle.luasAreaTanam}</td>
                <td className="px-6 py-4">{cycle.kematianTanaman}</td>
                <td className="px-6 py-4">{cycle.penyemprotanPAG}</td>
                <td className="px-6 py-4">{cycle.jenisPAG}</td>
                <td className="px-6 py-4">{cycle.semprotPestisida}</td>
                <td className="px-6 py-4">{cycle.jenisPestisida}</td>
                <td className="px-6 py-4">{cycle.jenisproduk}</td>
                <td className="px-6 py-4">{cycle.satuan}</td>
                <td className="px-6 py-4">{cycle.catatan}</td>
                <td className="px-6 py-4">
                  <div>
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={cycle.fotoGeotag}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={cycle.fotoKegiatan}
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

export default DetailCycle3;
