import { usePDF } from "react-to-pdf";

function Invoice() {
  const { toPDF, targetRef } = usePDF({ filename: "contract.pdf" });
  return (
    <div>
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
        <div className="sm:w-11/12 lg:w-3/4 mx-auto">
          {/* Card */}
          <div
            className="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-gray-800"
            ref={targetRef}
          >
            {/* Grid */}
            <div className="flex justify-between">
              <div className="h-20 w-20">
                <img src="/images/logoFAMS.png" alt="Placeholder Image" />
                <h1 className="mt-2 text-lg md:text-xl font-semibold text-customOrange dark:text-white">
                  FAMS Contract
                </h1>
              </div>
              {/* Col */}
              <div className="text-end">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                  E-Contract
                </h2>
                <input
                  type="teks"
                  placeholder="Masukkan kode contract"
                  id="teks"
                  className="mt-3 h-10 bg-white rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-customOrange transition duration-500"
                />
                {/* <address className="mt-4 not-italic text-gray-800 dark:text-gray-200">
                  45 Roker Terrace
                  <br />
                  Latheronwheel
                  <br />
                  KW5 8NW, London
                  <br />
                  United Kingdom
                  <br />
                </address> */}
              </div>
              {/* Col */}
            </div>
            {/* End Grid */}
            {/* Grid */}
            <div className="mt-16 grid sm:grid-cols-2 gap-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  NAMA:
                </h3>
                <input
                  className="h-12 w-52 mt-3 bg-white appearance-none border-2 border-gray-200 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-customOrange"
                  id="inline-full-name"
                  type="text"
                ></input>
                <address className="mt-2 not-italic text-gray-500">
                  PT BISI INTERNATIONAL,
                  <br />
                  Sidoarjo,
                  <br />
                  Jawa Timur
                  <br />
                </address>
              </div>
              {/* Col */}
              <div className="sm:text-end space-y-2">
                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                      Contract date:
                    </dt>
                    <input
                      className="h-10 bg-white w-28 appearance-none border-2 border-gray-200 roundedtext-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-customOrange"
                      id="date"
                      type="date"
                    ></input>
                  </dl>
                  <dl className="h-10 grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                      Due date:
                    </dt>
                    <input
                      className="bg-white border-md w-28 appearance-none border-2 border-gray-200 roundedtext-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-customOrange"
                      id="date"
                      type="date"
                    ></input>
                  </dl>
                </div>
              </div>
            </div>
            {/* Table */}
            <div>
              <h3 className="text-lg text-center font-semibold mb-2 mt-5">
                PERJANJIAN KERJASAMA USAHA PERTANIAN DAN PENGIKATAN JUAL BELI
                JAGUNG
              </h3>
              <p className="text-sm leading-relaxed">
                Perjanjian Kerjasama Usaha Pertanian (yang selanjutnya disebut
                “Perjanjian”) ini dibuat pada hari ini, ............., tanggal
                ........................, oleh dan antara :
              </p>
              <p className="mt-3 text-sm leading-relaxed">
                I. PT BISI International, Tbk., sebuah perusahaan terbuka yang
                didirikan dan melakukan kegiatan usaha berdasarkan pada Hukum
                Negara Republik Indonesia, berkedudukan dan beralamat di Jalan
                Raya Surabaya-Mojokerto Km 19, Desa Beringinbendo, Kecamatan
                Taman, Kabupaten Sidoarjo, dalam hal ini diwakili secara sah
                oleh .......................... yang bertindak selaku Kuasa
                berdasarkan Surat Kuasa tertanggal ................, dari dan
                oleh karenanya untuk dan atas nama PT BISI International, Tbk.
                selanjutnya disebut “BISI.”
              </p>
              <p className="mt-3 text-sm leading-relaxed">
                II. Tuan/nyonya ……………., Perseorangan swasta, Warga Negara
                Indonesia, beralamat di …………….., Provinsi……….., Pemegang Kartu
                Tanda Penduduk dengan Nomor Induk Kependudukan (NIK) : ………………
                dalam hal ini bertindak untuk dan atas nama diri sendiri, Untuk
                selanjutnya disebut sebagai “Petani.”
              </p>
              <p className="mt-3 text-sm leading-relaxed">
                III. PT Charoen Pokphand Indonesia, Tbk., sebuah perusahaan yang
                didirikan dan menjalankan kegiatan usahanya berdasarkan pada
                Hukum Negara Republik Indonesia, beralamat di Jalan Ancol Barat
                VIII/ 1, Kelurahan Ancol, Kecamatan Pademangan, Jakarta Utara,
                dalam hal ini diwakili secara sah oleh………………. yang bertindak
                selaku Kuasa berdasarkan Surat Kuasa tertanggal
                ................, dari dan oleh karenanya untuk dan atas nama PT
                Charoen Pokphand Indonesia, Tbk. …………………., untuk selanjutnya
                disebut sebagai “CPI.”
              </p>
            </div>
            <div className="mt-8 sm:mt-12">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Thank you!
              </h4>
              <p className="text-gray-500">
                If you have any questions concerning this invoice, use the
                following contact information:
              </p>
              <div className="mt-2">
                <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  Rizqihidayat@gmail.com
                </p>
                <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  +62 822-3109-9222
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm text-gray-500">© Fams.</p>
          </div>
          {/* End Card */}
          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-x-3">
            <a
              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              href="#"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1={12} x2={12} y1={15} y2={3} />
              </svg>
              Invoice PDF
            </a>
            <button
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={() => toPDF()}
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect width={12} height={8} x={6} y={14} />
              </svg>
              Print
            </button>
          </div>
          {/* End Buttons */}
        </div>
      </div>
    </div>
  );
}

export default Invoice;
