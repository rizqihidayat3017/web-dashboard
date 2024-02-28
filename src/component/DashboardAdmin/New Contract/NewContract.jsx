import { useState } from "react";

function NewContractCGR() {
  const [data, setData] = useState([
    {
      id_cgr: "001",
      nama_cgr: "Rizqi Hidayat",
      status: "active",
      id_ts: "12345",
      cust_code: "12345",
      vend_code: "12345",
      luas_lahan: "12 Ha",
      lokasi_ttd: "",
      foto_kegitan: "",
      ttd_mou: "",
    },
    {
      id_cgr: "002",
      nama_cgr: "Rizqi Hidayat",
      status: "active",
      id_ts: "12345",
      cust_code: "12345",
      vend_code: "12345",
      luas_lahan: "12 Ha",
      lokasi_ttd: "",
      foto_kegitan: "",
      ttd_mou: "",
    },
    {
      id_cgr: "003",
      nama_cgr: "Rizqi Hidayat",
      status: "active",
      id_ts: "12345",
      cust_code: "12345",
      vend_code: "12345",
      luas_lahan: "12 Ha",
      lokasi_ttd: "",
      foto_kegitan: "",
      ttd_mou: "",
    },
    {
      id_cgr: "004",
      nama_cgr: "Rizqi Hidayat",
      status: "active",
      id_ts: "12345",
      cust_code: "12345",
      vend_code: "12345",
      luas_lahan: "12 Ha",
      lokasi_ttd: "",
      foto_kegitan: "",
      ttd_mou: "",
    },
    {
      id_cgr: "005",
      nama_cgr: "Rizqi Hidayat",
      status: "active",
      id_ts: "12345",
      cust_code: "12345",
      vend_code: "12345",
      luas_lahan: "12 Ha",
      lokasi_ttd: "",
      foto_kegitan: "",
      ttd_mou: "",
    },
  ]);

  const [editedIndex, setEditedIndex] = useState(-1);
  const [editedData, setEditedData] = useState({
    status: "",
    cust_code: "",
    vend_code: "",
    luas_lahan: "",
  });

  const handleEdit = (index) => {
    setEditedIndex(index);
    setEditedData({ ...data[index] });
  };

  const handleSave = () => {
    const newData = [...data];
    newData[editedIndex] = editedData;
    setData(newData);
    setEditedIndex(-1);
  };

  const handleInputChange = (e, field) => {
    setEditedData({
      ...editedData,
      [field]: e.target.value,
    });
  };

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
                ID CGR
              </th>
              <th scope="col" className="px-6 py-3">
                Nama CGR
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                ID TS
              </th>
              <th scope="col" className="px-6 py-3">
                Customer Code
              </th>
              <th scope="col" className="px-6 py-3">
                Verifikasi Code
              </th>
              <th scope="col" className="px-6 py-3">
                Luas Lahan
              </th>
              <th scope="col" className="px-6 py-3">
                lokasi TTD
              </th>
              <th scope="col" className="px-6 py-3">
                Foto Kegiatan
              </th>
              <th scope="col" className="px-6 py-3">
                TTD MOU
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.id_cgr}
                </th>
                <td className="px-6 py-4">{data.nama_cgr}</td>
                <td className="px-6 py-4">
                  {editedIndex === index ? (
                    <select
                      value={editedData.status}
                      onChange={(e) => handleInputChange(e, "status")}
                      className="px-2 py-1 border border-gray-300 rounded"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  ) : (
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
                          data.status === "active"
                            ? "bg-green-200"
                            : "bg-red-200"
                        } opacity-50 rounded-full`}
                      />
                      <span className="relative text-xs">{data.status}</span>
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">{data.id_ts}</td>
                <td className="px-6 py-4">
                  {editedIndex === index ? (
                    <input
                      type="text"
                      value={editedData.cust_code}
                      onChange={(e) => handleInputChange(e, "cust_code")}
                      className="px-2 py-1 border border-gray-300 rounded"
                    />
                  ) : (
                    data.cust_code
                  )}
                </td>
                <td className="px-6 py-4">
                  {editedIndex === index ? (
                    <input
                      type="text"
                      value={editedData.vend_code}
                      onChange={(e) => handleInputChange(e, "vend_code")}
                      className="px-2 py-1 border border-gray-300 rounded"
                    />
                  ) : (
                    data.vend_code
                  )}
                </td>
                <td className="px-6 py-4">
                  {editedIndex === index ? (
                    <input
                      type="text"
                      value={editedData.luas_lahan}
                      onChange={(e) => handleInputChange(e, "luas_lahan")}
                      className="px-2 py-1 border border-gray-300 rounded"
                    />
                  ) : (
                    data.luas_lahan
                  )}
                </td>
                <td className="px-6 py-4">
                  <div>
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={data.lokasi_ttd}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={data.foto_kegitan}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <img
                      className="h-16 w-16 rounded-lg"
                      src={data.ttd_mou}
                      alt=""
                    />
                  </div>
                </td>
                <td className="flex items-center px-6 py-4">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleSave(index)}
                    className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                  >
                    Save
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

export default NewContractCGR;
