import { Link } from "react-router-dom";

function Demspray() {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 pt-10 pb-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="w-full md:w-1/2 p-2">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-customOrange text-white mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Tanam dan Pemupukan Dasar (Cycle 1)
              </h2>
              <p className="leading-relaxed text-base">
                Tanam dan pemupukan dasar pada jagung (corn) adalah langkah awal
                dalam budidaya tanaman jagung di lapangan
              </p>
              <Link to="/aktivitastanam">
                <button className="mx-auto mt-5 text-white bg-customOrange border-0 py-2 px-8 focus:outline-none hover:bg-customOrangeplus rounded text-lg">
                  Details
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-customOrange text-white mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Pemupukan Tahap 1 (Cycle 2)
              </h2>
              <p className="leading-relaxed text-base">
                Pemupukan tahap 1 pada jagung adalah proses aplikasi pupuk yang
                dilakukan pada tahap awal pertumbuhan tanaman jagung setelah
                tanam.
              </p>
              <Link to="/cycle2">
                <button className="mx-auto mt-5 text-white bg-customOrange border-0 py-2 px-8 focus:outline-none hover:bg-customOrangeplus rounded text-lg">
                  Details
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-customOrange text-white mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Penggunaan PAG dan Pestisida (Cycle 3)
              </h2>
              <p className="leading-relaxed text-base">
                Penggunaan PAG (Pupuk Anorganik Granular) dan pestisida dalam
                pertanian jagung memiliki tujuan yang spesifik untuk
                meningkatkan pertumbuhan, kesehatan tanaman, dan hasil panen
                jagung
              </p>
              <Link>
                <button className="mx-auto mt-5 text-white bg-customOrange border-0 py-2 px-8 focus:outline-none hover:bg-customOrangeplus rounded text-lg">
                  Details
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-customOrange text-white mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Pemupukan tahap 2 dan boom jagung (Cycle 4)
              </h2>
              <p className="leading-relaxed text-base">
                Pemupukan tahap 2 dalam budidaya jagung merujuk pada pemberian
                pupuk tambahan yang dilakukan setelah masa pemupukan dasar atau
                pemupukan awal.
              </p>
              <Link>
                <button className="mx-auto mt-5 text-white bg-customOrange border-0 py-2 px-8 focus:outline-none hover:bg-customOrangeplus rounded text-lg">
                  Details
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-customOrange text-white mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Pra Panen (Cycle 5)
              </h2>
              <p className="leading-relaxed text-base">
                Pra panen dalam konteks budidaya jagung merujuk pada serangkaian
                kegiatan persiapan yang dilakukan sebelum melakukan panen atau
                pemanenan hasil jagung.
              </p>
              <Link>
                <button className="mx-auto mt-5 text-white bg-customOrange border-0 py-2 px-8 focus:outline-none hover:bg-customOrangeplus rounded text-lg">
                  Details
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-customOrange text-white mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Panen dan Pascapanen (Cycle 6)
              </h2>
              <p className="leading-relaxed text-base">
                Panen dan pascapanen dalam konteks budidaya jagung merujuk pada
                dua tahap penting dalam siklus pertanian yang melibatkan
                pemanenan, pengolahan, dan penyiapan hasil panen jagung untuk
                kegiatan selanjutnya
              </p>
              <Link>
                <button className="mx-auto mt-5 text-white bg-customOrange border-0 py-2 px-8 focus:outline-none hover:bg-customOrangeplus rounded text-lg">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Demspray;
