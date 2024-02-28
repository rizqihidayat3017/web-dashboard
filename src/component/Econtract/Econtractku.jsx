import { Link } from "react-router-dom";
import { usePDF } from "react-to-pdf";

function Econtractku() {
  const { toPDF, targetRef } = usePDF({ filename: "contract.pdf" });
  return (
    <div>
      <div className="px-40 py-40" ref={targetRef}>
        {/* Lembar 1 */}
        <div className="border border-gray-300 print:p-0 print:border-none print:border-b">
          {/* Isi konten untuk lembar 1 */}
          <div>
            {/* Judul */}
            <h1 className="font-bold text-center font-serif text-base">
              PERJANJIAN KERJASAMA USAHA PERTANIAN
            </h1>
            <h1 className="text-center font-bold font-serif">DAN</h1>
            <p className="text-center font-bold font-serif underline">
              PENGIKATAN JUAL BELI JAGUNG
            </p>
            <p className="text-center font-bold font-serif">No. ...</p>
          </div>
          <div className="pt-10 text-justify">
            <p>
              Perjanjian Kerjasama Usaha Pertanian (yang selanjutnya disebut
              “Perjanjian”) ini dibuat pada hari ini, ............., tanggal
              ............................., oleh dan antara :
            </p>
          </div>
          <div className="pt-3 pl-10 text-justify">
            <p>
              <span className="font-bold">I. PT BISI International, Tbk.</span>,
              sebuah perusahaan terbuka yang didirikan dan melakukan kegiatan
              usaha berdasarkan pada Hukum Negara Republik Indonesia,
              berkedudukan dan beralamat di Jalan Raya Surabaya-Mojokerto Km 19,
              Desa Beringinbendo, Kecamatan Taman, Kabupaten Sidoarjo, dalam hal
              ini diwakili secara sah oleh .......................... yang
              bertindak selaku Kuasa berdasarkan Surat Kuasa tertanggal
              ................, dari dan oleh karenanya untuk dan atas nama PT
              BISI International, Tbk. selanjutnya disebut “BISI.”
            </p>
            <p className="pt-3">
              <span className="font-bold">II. Tuan/nyonya</span> …………….,
              Perseorangan swasta, Warga Negara Indonesia, beralamat di ……………..,
              Provinsi……….., Pemegang Kartu Tanda Penduduk dengan Nomor Induk
              Kependudukan (NIK) : ……………… dalam hal ini bertindak untuk dan atas
              nama diri sendiri, Untuk selanjutnya disebut sebagai{" "}
              <span className="font-bold">“Petani.”</span>
            </p>
            <p className="pt-3">
              <span className="font-bold">
                III. PT Charoen Pokphand Indonesia, Tbk.,
              </span>{" "}
              sebuah perusahaan yang didirikan dan menjalankan kegiatan usahanya
              berdasarkan pada Hukum Negara Republik Indonesia, beralamat di
              Jalan Ancol Barat VIII/ 1, Kelurahan Ancol, Kecamatan Pademangan,
              Jakarta Utara, dalam hal ini diwakili secara sah oleh………………. yang
              bertindak selaku Kuasa berdasarkan Surat Kuasa tertanggal
              ................, dari dan oleh karenanya untuk dan atas nama PT
              Charoen Pokphand Indonesia, Tbk. …………………., untuk selanjutnya
              disebut sebagai <span className="font-bold">“CPI.”</span>
            </p>
          </div>
          <div className="pt-3 text-justify">
            <p>
              BISI, Petani dan CPI selanjutnya secara bersama-sama disebut
              sebagai
              <span className="font-bold">“Para Pihak”.</span>
            </p>
            <p className="pt-3">
              Para Pihak dengan ini terlebih dahulu menerangkan hal-hal sebagai
              berikut:
            </p>
            <p className="pt-3">
              - Bahwa BISI adalah sebuah perusahaan yang bergerak dalam bidang
              usaha pertanian, baik yang dilakukan sendiri maupun melalui
              kerjasama usaha dengan pihak/pelaku usaha lain, serta bidang usaha
              perdagangan, yang meliputi perdagangan sarana produksi pertanian
              dan hasil-hasil pertanian.
            </p>
            <p>
              - Bahwa Petani adalah orang-perseorangan atau badan usaha yang
              menjalankan kegiatan usaha budidaya pertanian, baik secara
              langsung maupun melalui kelompok tani di bawah koordinasi Petani,
              dan dalam hal ini mengadakan kerjasama usaha budidaya pertanian
              dengan BISI, terutama dalam hal pengadaan sarana produksi
              pertanian, pelaksanaan budidaya pertanian serta penanganan pasca
              panen, seperti pengolahan dan pemasaran hasil-hasil pertanian.
            </p>
            <p>
              - Bahwa CPI adalah sebuah perusahaan yang salah satu usahanya
              bergerak di dalam bidang industri makanan ternak yang menggunakan
              jagung sebagai salah satu bahan bakunya.
            </p>
            <p>
              - Bahwa untuk saling mendukung dan bersinergi dalam memajukan
              usaha pertanian guna meningkatkan efisiensi, kualitas hasil
              budidaya dan daya saing di bidang usaha pertanian, BISI dan Petani
              telah bersepakat, membuat kerjasama usaha pertanian. Petani akan
              menanam jagung dan BISI akan memasok Sarana Produksi Pertanian
              (Saprotan) serta memberikan bimbingan sampai jagung siap dijual.
            </p>
            <p>
              - Bahwa CPI bermaksud membeli jagung dari Petani serta melakukan
              kerjasama dengan BISI dan Petani, dan setelah menyampaikan
              maksudnya, BISI dan Petani dapat menerima maksud CPI.
            </p>
            <p className="pt-3">
              Berdasarkan latar belakang dan pertimbangan-pertimbangan tersebut
              di atas dan dengan dilandasi prinsip-prinsip: saling memerlukan,
              saling mempercayai, saling memperkuat dan saling menguntungkan,
              Para Pihak secara sadar, bebas dan tanpa paksaan dan/atau tekanan
              dari Pihak manapun, dengan ini setuju satu sama lain untuk
              bekerjasama dalam hal jual beli jagung, oleh karenanya sepakat
              membuat Perjanjian Kerjasama Usaha Pertanian dan Pengikatan Jual
              Beli Jagung ini, dengan syarat-syarat dan ketentuan-ketentuan
              sebagai berikut :
            </p>
            <p className="font-bold pt-3">Pasal 1</p>
            <p className="underline">
              Kesepakatan Kerjasama Usaha Pertanian dan Pengikatan Jual Beli
              Jagung
            </p>
            <p className="pt-3">
              1.1. Para Pihak dengan ini bersepakat dan saling mengikatkan diri
              dalam hubungan kerjasama usaha pertanian dan jual beli jagung,
              dengan BISI sebagai pemasok Saprotan, Petani mengikatkan diri
              untuk menjual jagung kepada CPI dan CPI mengikatkan diri untuk
              membeli jagung dari Petani.{" "}
            </p>
            <p>
              1.2. BISI akan memasok (menjual) sarana produksi pertanian
              (Saprotan) kepada Petani secara kredit tanpa bunga, memberikan
              bimbingan teknis budidaya pertanian dan manajemen usaha, mendorong
              peningkatan efisiensi dan produktivitas, memberikan solusi bagi
              pemasaran hasil-hasil budidaya; sedangkan Petani akan menyediakan
              lahan pertanian, tenaga kerja, peralatan/perlengkapan budidaya dan
              melakukan pengadaan Saprotan, dan CPI akan membeli jagung hasil
              panen dari Petani.
            </p>
            <p>
              1.3. BISI akan menerima pembayaran dari Petani melalui CPI
              berdasarkan kuasa dari Petani dengan memotong sejumlah uang untuk
              dibayarkan kepada BISI terkait pembelian Sarana Produksi Pertanian
              (Saprotan) oleh Petani.
            </p>
            <p>
              1.4. Sehubungan dengan pasal 1.3 di atas, pada saat CPI akan
              melakukan pembayaran kepada Petani, BISI akan memberikan informasi
              kepada CPI mengenai sejumlah uang yang akan dipotong untuk
              pembayaran hutang atau kredit Petani kepada BISI.
            </p>
            <p>
              1.5. <span></span>Kerjasama usaha pertanian dan pengikatan jual
              beli jagung berdasarkan Perjanjian ini berlaku untuk jangka waktu
              sebagaimana ditetapkan dalam{" "}
              <span className="font-bold">Lampiran I</span> (“Jangka Waktu
              Kerjasama dan Pengikatan Jual Beli”
            </p>
          </div>
        </div>

        {/* Lembar 2 */}
        <div className="mt-80 border border-gray-300 print:p-0 print:border-none print:border-b">
          {/* Isi konten untuk lembar 3 */}
          <div className="text-justify">
            <p className="font-bold">Pasal 2</p>
            <p className="underline">Kewajiban Masing-masing Pihak</p>
            <p>Dalam perjanjian ini,</p>
            <div className="pl-10">
              <p>2.1 BISI berkewajiban untuk :</p>
              <p>
                a. memasok (menjual) Saprotan, berupa benih, pestisida, ZPT, dan
                lain-lain, seperti, apabila diperlukan, peralatan pertanian,
                kepada Petani menurut syarat-syarat dan ketentuan-ketentuan yang
                akan disepakati pada waktunya;
              </p>
              <p>
                b. memberikan bimbingan teknis budidaya pertanian dan manajemen
                usaha;
              </p>
              <p>c. mengajarkan penerapan teknologi budidaya pertanian;</p>
              <p>
                d. memastikan terlaksananya tata cara budidaya yang baik bagi
                peningkatan efisiensi dan produktivitas;
              </p>
              <p>
                e. memberikan bimbingan tata cara panen, penggunaan teknologi,
                dan pengelolaan pascapanen;
              </p>
              <p>
                f. memberikan solusi bagi masalah pemasaran hasil-hasil
                budidaya;
              </p>
              <p>
                g. memberikan informasi kepada CPI mengenai sejumlah uang yang
                akan dipotong dari hutang atau kredit Petani kepada BISI untuk
                memudahkan CPI melakukan pemotongan pada saat pembayaran
                pembelian jagung.
              </p>
              {/* PAGE 2 */}
              <p className="pt-3">2.2. Petani berkewajiban untuk:</p>
              <p>
                a. dengan biaya sendiri atau kelompok tani, menyediakan lahan
                budidaya pertanian untuk digunakan dalam kerjasama usaha
                pertanian berdasarkan perjanjian ini;
              </p>
              <p>b. membeli Saprotan dari BISI;</p>
              <p>c. menyediakan tenaga kerja;</p>
              <p>d. menyediakan pupuk;</p>
              <p>
                e. melakukan budidaya menurut tata cara budidaya yang baik
                sesuai petunjuk-petunjuk BISI;
              </p>
              <p>f. menerapkan teknologi budidaya;</p>
              <p>g. melaksanakan tata cara panen yang ditetapkan;</p>
              <p>h. melakukan pengelolaan pascapanen;</p>
              <p>
                i. memberikan ijin kepada CPI untuk turut melakukan peninjauan
                apabila CPI ingin mengetahui kondisi jagung yang ditanam di
                lahan yang telah ditentukan sampai dengan saatnya panen;
              </p>
              <p>
                j. menjual jagung hasil panen dari lahan yang telah ditentukan
                (sesuai <span className="font-bold">Lampiran II</span>) kepada
                CPI.
              </p>
              <p className="pt-3">2.3 CPI mengikatkan diri untuk :</p>
              <p>
                a. Membeli jagung yang ditanam pada lahan yang beralamat di
                lokasi sebagaimana disebutkan dalam{" "}
                <span className="font-bold">Lampiran II</span> mengenai Data
                Lokasi dan Lahan, sesuai dengan spesifikasi mutu, harga pada
                saat penyerahan dan tabel rafaksi yang diterbitkan oleh CPI dari
                waktu ke waktu;
              </p>
              <p>
                b. Melakukan pembayaran kepada Petani atas pembelian jagung dan
                selanjutnya membayarkan sejumlah uang yang dipotong dari harga
                pembelian jagung Petani tersebut untuk pembayaran hutang atau
                kredit Petani kepada BISI.
              </p>
            </div>
            <div>
              <p className="font-bold pt-3">Pasal 3</p>
              <p className="underline">Lokasi dan Lahan</p>
              <p>
                3.1. Untuk kerjasama usaha pertanian ini, Petani menyediakan
                lahan budidaya yang berlokasi di:
                .......................................
              </p>
              <p>
                3.2. Pendataan lahan akan dilakukan dengan menggunakan aplikasi
                dan divalidasi dengan{" "}
                <span className="italic">polygon geotagging</span>. Data lahan,
                titik-titik koordinat, dan luas lahan hasil pendataan dinyatakan
                dalam <span className="font-bold">Lampiran II</span> (Data
                Lokasi dan Lahan).
              </p>
              <p>
                3.3. Petani menyatakan dan menjamin bahwa lahan yang digunakan
                adalah milik Petani atau pemilik lahan budidaya dalam koordinasi
                Petani, dan tidak ada pihak lain yang turut memiliki lahan, atau
                turut berhak atas penggunaan lahan, dan bahwa lahan tidak dalam
                sengketa kepemilikan atau pemanfaatannya, dan dapat digunakan
                dengan aman untuk kerjasama berdasarkan Perjanjian ini.
              </p>
              <p>
                3.4. Sehubungan dengan pernyataan dan jaminan dalam Ayat 3.3,
                Petani berjanji akan menunjukkan, kepada BISI dan CPI, surat
                pernyataan asli dari setiap pemilik lahan budidaya, dalam
                substansi dan format sesuai{" "}
                <span className="font-bold">Lampiran III</span> (Format Surat
                Pernyataan).
              </p>
              <p className="pt-3 font-bold">Pasal 4</p>
              <p className="underline">
                Pengadaan Saprotan Dan Penjualan Jagung
              </p>
              <p>
                4.1. Pengadaan Saprotan oleh Petani dilakukan setiap awal
                periode/musim tanam sesuai dengan kebutuhan atau standar yang
                tercantum pada <span className="font-bold">Lampiran V</span>{" "}
                (Teknik Budidaya Jagung Hibrida BISI).
              </p>
              <p>
                4.2. Petani akan membeli Saprotan dari BISI, dan BISI akan
                menjual Saprotan kepada Petani, selanjutnya jagung hasil
                budidaya Petani akan dijual kepada CPI.
              </p>
              <p>
                4.3. Jual beli Saprotan yang dimaksud dalam pasal ini dilakukan
                secara kredit tanpa bunga untuk jangka waktu satu periode tanam.
              </p>
              <p>
                4.4. Harga Saprotan akan disepakati dari waktu ke waktu dengan
                mempertimbangkan harga pasar dan akan ditetapkan dalam{" "}
                <span className="font-bold">Lampiran IV</span>
                (Daftar Saprotan dan Harga Jual).
              </p>
              <p>
                4.5. Jatuh tempo pembayaran pembelian Saprotan oleh Petani
                adalah pada setiap akhir periode/musim tanam, yaitu ketika hasil
                budidaya dijual.
              </p>
              <p>
                4.6. Atas jagung hasil budidaya Petani yang dijual kepada CPI,
                maka Petani dengan ini memberi kuasa kepada CPI untuk dan atas
                nama Petani memotong atau dengan cara lain menggunakan sebagian
                uang dari penjualan hasil budidaya, sebesar jumlah hutang Petani
                kepada BISI, untuk melunasi hutang tersebut.
              </p>
              <p>
                4.7. Untuk tiap-tiap pembayaran hutang oleh Petani melalui CPI,
                BISI memberikan kwitansi atau tanda terima yang sah kepada
                Petani
              </p>
              <div>
                <p className="font-bold pt-3">Pasal 5</p>
                <p className="underline">
                  Spesifikasi dan Standar Mutu Saprotan
                </p>
                <p>
                  Saprotan yang dipasok oleh BISI kepada Petani dalam kerjasama
                  usaha ini meliputi dan memenuhi standar mutu sebagai berikut :
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lembar 3 */}
        <div className="mt-80 border border-gray-300 print:p-0 print:border-none print:border-b">
          {/* Isi konten untuk lembar 4 */}
          <div>
            <div className="overflow-x-auto items-start">
              <table className="table-auto border-collapse border border-gray-400">
                <tbody>
                  <tr>
                    <td className="border border-gray-400 p-4">a.</td>
                    <td className="border border-gray-400 p-4">
                      Benih Jagung Hibrida BISI
                    </td>
                    <td className="border border-gray-400 p-4">
                      - bersertifikat (atau memenuhi persyaratan sertifikasi);
                      <p>- berlabel</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-4">b.</td>
                    <td className="border border-gray-400 p-4">Pestisida</td>
                    <td className="border border-gray-400 p-4">
                      - bersertifikat ISO 9000 Tahun 2008
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-4">c.</td>
                    <td className="border border-gray-400 p-4">ZPT</td>
                    <td className="border border-gray-400 p-4">
                      - bersertifikat ISO 9000 Tahun 2008
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p className="pt-3 font-bold">Pasal 6</p>
            <p className="underline">Penyerahan Saprotan</p>
            <p>
              6.1. Penyerahan Saprotan dilakukan di lahan budidaya yang
              dinyatakan dalam Pasal 3 Perjanjian ini.
            </p>
            <p>
              6.2. Pada saat penyerahan Saprotan, Para Pihak menandatangani
              Delivery Order (surat jalan) yang berlaku sebagai bukti serah
              terima Saprotan.
            </p>
            <p>
              6.3. Penyerahan Saprotan menandai peralihan kepemilikan dan
              tanggung jawab atas Saprotan dari BISI kepada Petani.
            </p>
          </div>
          <div>
            <p className="font-bold pt-3">Pasal 7</p>
            <p className="underline">Pelaksanaan Budidaya</p>
            <p>
              7.1. Petani wajib menyiapkan lahan budidaya sesuai
              petunjuk-petunjuk BISI agar lahan menjadi siap tanam.
            </p>
            <p>
              7.2. Budidaya dilakukan menurut tata cara budidaya yang baik,
              sekurang-kurangnya sesuai tata cara yang ditetapkan dalam Lampiran
              V (Teknik Budidaya Jagung Hibrida BISI).
            </p>
            <p>
              7.3. BISI sewaktu-waktu dapat memasuki lahan budidaya untuk
              memastikan pelaksanaan budidaya yang baik dan memberikan
              petunjuk-petunjuk teknis pelaksanaan budidaya.
            </p>
            <p>
              7.4. CPI diperbolehkan untuk turut melakukan peninjauan apabila
              CPI ingin mengetahui kondisi jagung yang ditanam oleh Petani atas
              bimbingan BISI, sampai dengan jagung siap dipanen.
            </p>
          </div>
          <div>
            <p className="font-bold pt-3">Pasal 8</p>
            <p className="underline">Pelaksanaan Panen dan Pasca-panen</p>
            <p>
              8.1. Petani akan memberikan akses data dan informasi panen;
              meliputi lokasi panen, luas lahan panen, dan estimasi tonase hasil
              panen, kepada BISI dan CPI.
            </p>
            <p>
              8.2. Berdasarkan data dan informasi panen yang diperoleh
              sebagaimana dimaksud dalam Pasal 8.1, pada usia budidaya ke-100
              hari, staf administrasi BISI menerbitkan Laporan Rencana Panen
              (LRP) dan Surat Informasi Panen (SIP), dan menyampaikannya kepada
              Petani.
            </p>
            <p>
              8.3. Panen jagung hasil budidaya Petani dilakukan secara mekanis
              pada usia budidaya ke-120 hari, dan selanjutnya dilakukan
              penanganan pasca-panen.
            </p>
          </div>
          <div>
            <p className="font-bold pt-3">Pasal 9</p>
            <p className="underline">Pembayaran dan Harga Jagung</p>
            <p>
              9.1. Sebagaimana dalam Pasal 2.3 huruf (b) Perjanjian ini, CPI
              melakukan pembayaran kepada Petani atas pembelian jagung dan
              selanjutnya membayarkan sejumlah uang yang dipotong dari harga
              pembelian jagung Petani tersebut untuk pembayaran hutang atau
              kredit Petani kepada BISI.
            </p>
            <p>
              9.2. Harga jagung berlaku sesuai dengan spesifikasi mutu, harga
              pada saat penyerahan dan tabel rafaksi yang diterbitkan oleh CPI
              dari waktu ke waktu.
            </p>
            <p>
              9.3. Dalam hal pembelian jagung petani, Pihak CPI memberikan
              jaminan harga terendah Rp 3.500/kg jagung dengan KA 15%, sehingga
              apabila harga di pasar dibawah Rp 3.500/kg, maka harga yang
              digunakan adalah harga jaminan terendah.
            </p>
          </div>
          <div>
            <p className="font-bold pt-3">Pasal 10</p>
            <p className="underline">
              Kewajiban Perpajakan dan Perizinan Berusaha
            </p>
            <p>
              10.1. Masing-masing dari Para Pihak wajib memenuhi
              kewajiban-kewajiban perpajakannya sesuai dengan peraturan
              perundang-undangan perpajakan yang berlaku
            </p>
            <p>
              10.2. Masing-masing dari Para Pihak wajib memenuhi peraturan
              perundang-undangan yang berlaku, terutama yang terkait dengan
              ketentuan-ketentuan perizinan berusaha sehubungan dengan
              pelaksanaan kerjasama ini.
            </p>
          </div>
          <div>
            <p className="font-bold pt-3">Pasal 11</p>
            <p className="underline">Hukum yang Berlaku</p>
            <p>
              Perjanjian ini tunduk dan ditafsirkan berdasarkan hukum Negara
              Republik Indonesia
            </p>
          </div>
          <div>
            <p className="font-bold pt-3">Pasal 12</p>
            <p className="underline">Perwakilan Para Pihak</p>
            <p>
              Para Pihak memahami sepenuhnya bahwa yang dimaksud dengan BISI
              meliputi pimpinan, pegawai, karyawan, dan/atau wakil-wakil yang
              sah dari BISI; demikian pula halnya yang dimaksud dengan CPI
              meliputi pimpinan, pegawai, karyawan/staf, dan/atau wakil-wakil
              yang sah dari CPI. Yang dimaksud dengan Petani meliputi Petani,
              pemilik lahan budidaya, pekerja budidaya, ahli waris pemilik
              lahan, dan wakil-wakil yang sah dari Petani dan/atau pemilik lahan
              budidaya.
            </p>
          </div>
          <div>
            <p className="font-bold pt-3">Pasal 13</p>
            <p className="underline">Hubungan sebagai Entitas Terpisah</p>
          </div>
        </div>

        {/* Lembar 4 */}
        <div className="mt-80 border border-gray-300 print:p-0 print:border-none print:border-b">
          {/* Isi konten untuk lembar 5 */}
          <div>
            <p>
              13.1. Perjanjian ataupun hubungan kerjasama ini tidak membentuk
              hubungan-hubungan prinsipal-agen, prinsipal-kuasa, pemberi
              kerja-karyawan/pekerja, dan sejenisnya.
            </p>
            <p>
              13.2. Para Pihak menegaskan dan menyatakan bahwa masing-masing
              Pihak merupakan badan hukum/pribadi hukum atau entitas yang
              terpisah sehingga tindakan atau perbuatan salah satu dari Para
              Pihak merupakan tanggung jawab Pihak itu sendiri, dan bukan
              tanggung jawab Pihak lainnya.
            </p>
          </div>
          <div>
            <p className="font-bold pt-3">Pasal 14</p>
            <p className="underline">Tanggung Jawab atas Kerugian</p>
            <p>
              14.1. Petani dengan ini menyatakan bahwa Petani akan mematuhi
              Perjanjian ini, dan bahwa perbuatan-perbuatan Petani yang di luar
              ketentuan Perjanjian ini merupakan tanggung jawab Petani sendiri,
              dan dengan ini membebaskan BISI dan CPI dari tanggung jawab, baik
              pidana maupun perdata, serta dari segala kerugian yang mungkin
              timbul dari perbuatan-perbuatan Petani.
            </p>
            <p>
              14.2. Petani berjanji dan menyatakan akan mengganti kerugian yang
              mungkin timbul pada BISI dan atau CPI sebagai akibat
              perbuatan-perbuatan Petani sebagaimana dimaksud pada Pasal 14.1.
            </p>
          </div>
          <div>
            <p className="font-bold pt-3">Pasal 15</p>
            <p className="underline">Penyelesaian Sengketa</p>
            <p>
              Apabila dalam pelaksanaan Perjanjian ini terjadi perbedaan
              penafsiran terhadap ketentuan-ketentuan Perjanjian ini dan/ataupun
              timbul sengketa dalam pelaksanaannya, Para Pihak dengan ini
              bersepakat untuk bermusyawarah mencari penyelesaian; tetapi
              apabila cara tersebut tidak dapat ditempuh atau tidak mencapai
              kesepakatan penyelesaian, maka Para Pihak akan menyelesaikannya
              melalui Pengadilan Negeri Kabupaten Sidoarjo.
            </p>
          </div>
          <div>
            <p className="font-bold pt-3">Pasal 16</p>
            <p className="underline">Pengakhiran Perjanjian</p>
            <p>
              16.1. Kerjasama Usaha Pertanian dan Pengikatan Jual Beli Jagung
              ini tidak dapat diakhiri lebih dahulu sebelum berakhir menurut
              Jangka Waktu Kerjasama dan Pengikatan Jual Beli, namun dapat
              diperpanjang dengan syarat-syarat dan ketentuan-ketentuan yang
              disepakati oleh Para Pihak.
            </p>
            <p>
              16.2. Pengakhiran kerjasama secara sepihak oleh Petani memberikan
              hak kepada BISI untuk menuntut pelunasan atau pembayaran segala
              tunggakan uang Petani kepada BISI dalam tempo 14 (empat belas)
              hari sejak tanggal pengakhiran.
            </p>
            <p>
              16.3. Kelalaian Petani untuk memenuhi kewajiban pembayaran utang
              sebagaimana ditentukan dalam Pasal 16.2 di atas, mewajibkan Petani
              membayar tambahan berupa denda sebesar 1 (satu) persen per hari
              dikalikan jumlah utang.
            </p>
            <p>
              16.4. BISI setiap saat dapat menempuh tindakan-tindakan hukum yang
              berguna bagi pemenuhan kewajiban Petani apabila perlu dengan
              menggunakan alat-alat kekuasaan Negara dan/atau menempuh tindakan
              hukum pidana maupun perdata.
            </p>
          </div>
          <div>
            <p className="font-bold pt-3">Pasal 17</p>
            <p className="underline italic">Force Majeure</p>
            <p>
              17.1. Jika terjadi keadaan memaksa (force majeure), Petani wajib
              melaporkan kepada BISI Pihak-Pihak lainnya mengenai keadaan atau
              kejadian tersebut dalam waktu paling lambat 12 (dua belas) jam
              sejak terjadinya keadaan itu, agar para Pihak, utamanya BISI
              bersama-sama dengan Petani, dapat dengan segera mengambil
              tindakan-tindakan yang dianggap perlu dan berguna untuk mengurangi
              kerugian/risiko keadaan memaksa yang terjadi.
            </p>
            <p>
              17.2. Yang termasuk dalam force majeure menurut pasal ini
              meliputi: bencana alam, huru-hara, banjir, kebakaran, wabah
              penyakit tanaman yang serius, perubahan iklim/cuaca secara
              ekstrim, perubahan mendadak/drastis suatu peraturan perundangan
              yang berkaitan langsung dengan keberlangsungan usaha budidaya
              pertanian dan pengikatan jual beli, dan lain-lain, yang semuanya
              secara langsung mempengaruhi atau berdampak pada kerjasama usaha
              pertanian dan pengikatan jual beli berdasarkan Perjanjian ini.
            </p>
          </div>
          <div>
            <p className="font-bold pt-3">Pasal 18</p>
            <p className="underline italic">Lain-Lain</p>
            <p>
              18.1. Perjanjian ini merupakan keseluruhan kesepakatan Para Pihak
              dan mengatasi semua kesepakatan terdahulu oleh Para Pihak, baik
              secara tertulis maupun secara lisan, mengenai hal-hal yang
              disepakati dalam Perjanjian ini
            </p>
            <p>
              18.2. Apabila di kemudian hari ada suatu ketentuan dalam
              Perjanjian ini menjadi tidak sesuai dengan peraturan
              perundang-undangan yang berlaku atau menjadi tidak berlaku karena
              hukum, maka ketentuan-ketentuan lain tetap berlaku dan mengikat
              Para Pihak sebagaimana mestinya, dan dalam hal demikian, Para
              Pihak akan segera berunding untuk membahas ketentuan yang tidak
              berlaku tersebut.
            </p>
            <p>
              18.3. Hal-hal yang belum atau belum cukup diatur dalam Perjanjian
              ini, akan diatur berdasarkan kesepakatan tertulis Para Pihak dalam
              suatu addendum atau amandemen atas Perjanjian ini.
            </p>
            <p>
              18.4. Lampiran-lampiran Perjanjian ini dapat diubah atau
              disesuaikan dari waktu ke waktu tanpa mempengaruhi keberlakuan
              Perjanjian ini.
            </p>
            <p>
              18.5. Lampiran, addendum, amandemen, ataupun ketentuan-ketentuan
              yang ditetapkan berdasarkan Perjanjian ini merupakan bagian yang
              tidak dapat dipisahkan dari Perjanjian ini.
            </p>
            <p className="pt-6">
              Demikian Perjanjian ini dibuat pada hari dan tanggal yang
              dinyatakan pada bagian awal Perjanjian. Naskah Perjanjian ini
              dibuat dalam 3 (tiga) rangkap, masing-masing bermaterai cukup dan
              memiliki kekuatan hukum yang sama.
            </p>
          </div>
        </div>

        {/* Lembar 5 */}
        <div className="mt-96 border border-gray-300 print:p-0 print:border-none print:border-b">
          {/* Isi konten untuk lembar 5 */}
          <div className="pt-5 text-justify">
            <p>LAMPIRAN I</p>
            <p>
              Perjanjian Kerjasama Usaha Pertanian Dan Pengikatan Jual Beli
              Jagung
            </p>
            <p>Nomor: …………………………………..</p>
            <p className="font-bold">
              JANGKA WAKTU KERJASAMA DAN PENGIKATAN JUAL BELI
            </p>
            <p className="pt-3">
              Jangka Waktu Kerjasama adalah 1 (satu) periode/musim tanam
              terhitung sejak penyerahan Saprotan untuk pertama kali, yaitu pada
              tanggal …………………. sampai dengan panen yang diestimasi pada tanggal
              ………………..{" "}
              <span className="font-bold">
                (minimal 120 hari setelah tanggal tanam dimusim kemarau, dan 135
                hari setelah tanggal tanam dimusim penghujan)
              </span>
            </p>
          </div>

          {/* Lampiran 2 */}
          <div className="pt-10 text-justify">
            <p>LAMPIRAN II</p>
            <p>
              Perjanjian Kerjasama Usaha Pertanian Dan Pengikatan Jual Beli
              Jagung
            </p>
            <p>Nomor: …………………………………..</p>
            <p className="font-bold pt-3">DATA LOKASI DAN LAHAN</p>
            <div className="container mx-auto">
              <div className="overflow-x-auto items-start pt-6">
                <table className="table-auto border-collapse border border-gray-400">
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 p-4">No.</td>
                      <td className="border border-gray-400 p-4">
                        Nama Petani
                        <p>Pemilik Lahan</p>
                      </td>
                      <td className="border border-gray-400 p-4">Dusun</td>
                      <td className="border border-gray-400 p-4">Desa</td>
                      <td className="border border-gray-400 p-4">Kecamatan</td>
                      <td className="border border-gray-400 p-4">Kabupaten</td>
                      <td className="border border-gray-400 p-4">Provinsi</td>
                      <td className="border border-gray-400 p-4">
                        Koordinat Lahan
                      </td>
                      <td className="border border-gray-400 p-4">
                        Luas Lahan (Ha)
                        <p>Hasil Polygon</p>
                        <p>Geotagging</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">No.</td>
                      <td className="border border-gray-400 p-4">Ali</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Trenggalek</td>
                      <td className="border border-gray-400 p-4">Jawa Timur</td>
                      <td className="border border-gray-400 p-4">
                        -78632876874
                      </td>
                      <td className="border border-gray-400 p-4">0,75</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">No.</td>
                      <td className="border border-gray-400 p-4">Ali</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Trenggalek</td>
                      <td className="border border-gray-400 p-4">Jawa Timur</td>
                      <td className="border border-gray-400 p-4">
                        -78632876874
                      </td>
                      <td className="border border-gray-400 p-4">0,75</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">No.</td>
                      <td className="border border-gray-400 p-4">Ali</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Trenggalek</td>
                      <td className="border border-gray-400 p-4">Jawa Timur</td>
                      <td className="border border-gray-400 p-4">
                        -78632876874
                      </td>
                      <td className="border border-gray-400 p-4">0,75</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="pt-3">
              Data lokasi dan lahan terlampir di atas telah didata dengan
              menggunakan aplikasi dan telah divalidasi dengan menggunakan
              sistem <span className="italic">polygon geotagging</span>
            </p>
          </div>

          {/* Lampiran 3 */}
          <div className="pt-10 text-justify">
            <div>
              <p>LAMPIRAN III</p>
              <p>
                Perjanjian Kerjasama Usaha Pertanian Dan Pengikatan Jual Beli
                Jagung
              </p>
              <p>Nomor: …………………………………..</p>
              <p className="font-bold pt-3">FORMAT SURAT PERNYATAAN</p>
              <p className="pt-6 text-center font-bold underline">
                Surat Pernyataan
              </p>
              <p className="text-center font-bold underline">
                Kepemilikan/Penguasaan Lahan
              </p>
              <p className="pt-6">Kami, yang bertanda tangan di bawah ini:</p>
              <div className="overflow-x-auto items-start pt-6">
                <table className="table-auto border-collapse border border-gray-400">
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 p-4">No.</td>
                      <td className="border border-gray-400 p-4">
                        Nama Petani
                        <p>Pemilik Lahan</p>
                      </td>
                      <td className="border border-gray-400 p-4">Dusun</td>
                      <td className="border border-gray-400 p-4">Desa</td>
                      <td className="border border-gray-400 p-4">Kecamatan</td>
                      <td className="border border-gray-400 p-4">Kabupaten</td>
                      <td className="border border-gray-400 p-4">Provinsi</td>
                      <td className="border border-gray-400 p-4">
                        Koordinat Lahan
                      </td>
                      <td className="border border-gray-400 p-4">
                        Luas Lahan (Ha) Hasil Polygon Geotagging
                      </td>
                      <td className="border border-gray-400 p-4">
                        TTD Petani
                        <p>Pemilik Lahan</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">No.</td>
                      <td className="border border-gray-400 p-4">Ali</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Trenggalek</td>
                      <td className="border border-gray-400 p-4">Jawa Timur</td>
                      <td className="border border-gray-400 p-4">
                        -78632876874
                      </td>
                      <td className="border border-gray-400 p-4">0,75</td>
                      <td className="border border-gray-400 p-4"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">No.</td>
                      <td className="border border-gray-400 p-4">Ali</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Trenggalek</td>
                      <td className="border border-gray-400 p-4">Jawa Timur</td>
                      <td className="border border-gray-400 p-4">
                        -78632876874
                      </td>
                      <td className="border border-gray-400 p-4">0,75</td>
                      <td className="border border-gray-400 p-4"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">No.</td>
                      <td className="border border-gray-400 p-4">Ali</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Suruh</td>
                      <td className="border border-gray-400 p-4">Trenggalek</td>
                      <td className="border border-gray-400 p-4">Jawa Timur</td>
                      <td className="border border-gray-400 p-4">
                        -78632876874
                      </td>
                      <td className="border border-gray-400 p-4">0,75</td>
                      <td className="border border-gray-400 p-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Lembar 6 */}
        <div className="mt-80 border border-gray-300 print:p-0 print:border-none print:border-b">
          {/* Isi konten untuk lembar 5 */}
          <div>
            <p>
              dengan ini menyatakan bahwa benar kami memiliki dan menguasai
              lahan budidaya pertanian dengan alamat dan luasan lahan seperti
              tersebut di atas.
            </p>
            <p className="pt-3">
              Kami menyatakan dan menjamin bahwa tidak ada pihak lain yang turut
              memiliki lahan, atau turut berhak atas penggunaan lahan tersebut,
              dan bahwa lahan tidak dalam sengketa kepemilikan atau
              pemanfaatannya, dan dapat digunakan dengan aman untuk kerja
              samadengan BISI
            </p>
            <p className="pt-3">
              Demikian pernyataan ini kami buat dengan sebenarnya, tanpa paksaan
              atau tekanan dari pihak manapun dan dalam bentuk apapun.
            </p>
            <div className="pb-10">
              <p className="pt-5">26 Oktober 2024</p>
              <p>Yang Membuat Pernyataan,</p>
              <p className="pt-24">Nama : </p>
            </div>
          </div>
          {/* Lampiran 4 */}
          <div className="pt-10 text-justify">
            <div>
              <p>LAMPIRAN IV</p>
              <p>
                Perjanjian Kerjasama Usaha Pertanian Dan Pengikatan Jual Beli
                Jagung
              </p>
              <p>Nomor: …………………………………..</p>
              <p className="font-bold pt-3">DAFTAR SAPROTAN DAN HARGA JUAL</p>
              <div className="overflow-x-auto items-start pt-6">
                <table className="table-auto border-collapse border border-gray-400">
                  <tbody>
                    <tr>
                      <th className="border border-gray-400 p-4"></th>
                      <th className="border border-gray-400 p-4">
                        Jenis Produk Saprotan
                      </th>
                      <th className="border border-gray-400 p-4">Kemasan</th>
                      <th className="border border-gray-400 p-4">
                        Harga Jual/Kemasan Include PPN (Rp)
                      </th>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4"></td>
                      <th className="border border-gray-400 p-4">
                        A. Benih Jagung Hibridia
                      </th>
                      <td className="border border-gray-400 p-4"></td>
                      <td className="border border-gray-400 p-4"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">1</td>
                      <td className="border border-gray-400 p-4">Bisi-2</td>
                      <td className="border border-gray-400 p-4">1</td>
                      <td className="border border-gray-400 p-4">Rp. 78.000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">2</td>
                      <td className="border border-gray-400 p-4">Bisi-816</td>
                      <td className="border border-gray-400 p-4">1</td>
                      <td className="border border-gray-400 p-4">Rp. 53.000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">3</td>
                      <td className="border border-gray-400 p-4">Bisi-816</td>
                      <td className="border border-gray-400 p-4">1</td>
                      <td className="border border-gray-400 p-4">Rp. 53.000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">4</td>
                      <td className="border border-gray-400 p-4">Bisi-816</td>
                      <td className="border border-gray-400 p-4">1</td>
                      <td className="border border-gray-400 p-4">Rp. 53.000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">5</td>
                      <td className="border border-gray-400 p-4">Bisi-816</td>
                      <td className="border border-gray-400 p-4">1</td>
                      <td className="border border-gray-400 p-4">Rp. 53.000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">6</td>
                      <td className="border border-gray-400 p-4">Bisi-816</td>
                      <td className="border border-gray-400 p-4">1</td>
                      <td className="border border-gray-400 p-4">Rp. 53.000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">7</td>
                      <td className="border border-gray-400 p-4">Bisi-816</td>
                      <td className="border border-gray-400 p-4">1</td>
                      <td className="border border-gray-400 p-4">Rp. 53.000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">8</td>
                      <td className="border border-gray-400 p-4">Bisi-816</td>
                      <td className="border border-gray-400 p-4">1</td>
                      <td className="border border-gray-400 p-4">Rp. 53.000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">9</td>
                      <td className="border border-gray-400 p-4">Bisi-816</td>
                      <td className="border border-gray-400 p-4">1</td>
                      <td className="border border-gray-400 p-4">Rp. 53.000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">10</td>
                      <td className="border border-gray-400 p-4">Bisi-816</td>
                      <td className="border border-gray-400 p-4">1</td>
                      <td className="border border-gray-400 p-4">Rp. 53.000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">11</td>
                      <td className="border border-gray-400 p-4">Bisi-816</td>
                      <td className="border border-gray-400 p-4">1</td>
                      <td className="border border-gray-400 p-4">Rp. 53.000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">12</td>
                      <td className="border border-gray-400 p-4">Bisi-816</td>
                      <td className="border border-gray-400 p-4">1</td>
                      <td className="border border-gray-400 p-4">Rp. 53.000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4"></td>
                      <td className="border border-gray-400 p-4"></td>
                      <td className="border border-gray-400 p-4"></td>
                      <td className="border border-gray-400 p-4"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4"></td>
                      <th className="border border-gray-400 p-4">
                        B. PESTISIDA DAN ZPT
                      </th>
                      <td className="border border-gray-400 p-4"></td>
                      <td className="border border-gray-400 p-4"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4">1</td>
                      <td className="border border-gray-400 p-4">
                        Amandy 865 SL
                      </td>
                      <td className="border border-gray-400 p-4">1 lt</td>
                      <td className="border border-gray-400 p-4">
                        Rp. 126.100
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Lembar 7 */}
        <div className="mt-80 border border-gray-300 print:p-0 print:border-none print:border-b">
          {/* Isi konten untuk lembar 5 */}
          <div>
            <div className="overflow-x-auto items-start">
              <table className="table-auto border-collapse border border-gray-400">
                <tbody>
                  <tr>
                    <td className="border border-gray-400 p-4">1</td>
                    <td className="border border-gray-400 p-4">
                      Brodirat 0.005 BB
                    </td>
                    <td className="border border-gray-400 p-4">100 Gram</td>
                    <td className="border border-gray-400 p-4">Rp. 4.600</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-4">2</td>
                    <td className="border border-gray-400 p-4">
                      Brodirat 0.005 BB
                    </td>
                    <td className="border border-gray-400 p-4">100 Gram</td>
                    <td className="border border-gray-400 p-4">Rp. 4.600</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-4">3</td>
                    <td className="border border-gray-400 p-4">
                      Brodirat 0.005 BB
                    </td>
                    <td className="border border-gray-400 p-4">100 Gram</td>
                    <td className="border border-gray-400 p-4">Rp. 4.600</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-4">4</td>
                    <td className="border border-gray-400 p-4">
                      Brodirat 0.005 BB
                    </td>
                    <td className="border border-gray-400 p-4">100 Gram</td>
                    <td className="border border-gray-400 p-4">Rp. 4.600</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-4">5</td>
                    <td className="border border-gray-400 p-4">
                      Brodirat 0.005 BB
                    </td>
                    <td className="border border-gray-400 p-4">100 Gram</td>
                    <td className="border border-gray-400 p-4">Rp. 4.600</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-4">6</td>
                    <td className="border border-gray-400 p-4">
                      Brodirat 0.005 BB
                    </td>
                    <td className="border border-gray-400 p-4">100 Gram</td>
                    <td className="border border-gray-400 p-4">Rp. 4.600</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-4">7</td>
                    <td className="border border-gray-400 p-4">
                      Brodirat 0.005 BB
                    </td>
                    <td className="border border-gray-400 p-4">100 Gram</td>
                    <td className="border border-gray-400 p-4">Rp. 4.600</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-4">8</td>
                    <td className="border border-gray-400 p-4">
                      Brodirat 0.005 BB
                    </td>
                    <td className="border border-gray-400 p-4">100 Gram</td>
                    <td className="border border-gray-400 p-4">Rp. 4.600</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-4">9</td>
                    <td className="border border-gray-400 p-4">
                      Brodirat 0.005 BB
                    </td>
                    <td className="border border-gray-400 p-4">100 Gram</td>
                    <td className="border border-gray-400 p-4">Rp. 4.600</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 p-4">10</td>
                    <td className="border border-gray-400 p-4">
                      Brodirat 0.005 BB
                    </td>
                    <td className="border border-gray-400 p-4">100 Gram</td>
                    <td className="border border-gray-400 p-4">Rp. 4.600</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pl-10 pr-20 mt-10 text-justify">
              <div>
                <p>LAMPIRAN V</p>
                <p>
                  Perjanjian Kerjasama Usaha Pertanian Dan Pengikatan Jual Beli
                  Jagung
                </p>
                <p>Nomor: …………………………………..</p>
                <p className="font-bold pt-3">
                  TEKNIK BUDIDAYA JAGUNG HIBRIDA BISI
                </p>
                <div className="pl-10">
                  <p>1. Kode varietas : ………….</p>
                  <p>2. Kebutuhan benih : ………</p>
                  <p>
                    3. Jarak Tanam : 75 x 25 cm dengan jumlah benih 1 (satu)
                    atau 2 (dua) biji per lubang
                  </p>
                  <p>4. Formula pupuk dan waktu pemupukan : </p>
                </div>
                <div className="pt-3 pl-10 overflow-x-auto items-start">
                  <table className="table-auto border-collapse border border-gray-400">
                    <tbody>
                      <tr>
                        <th className="border border-gray-400 p-4">
                          Jenis Pupuk
                        </th>
                        <th className="border border-gray-400 p-4">
                          Bersamaan Tanam
                        </th>
                        <th className="border border-gray-400 p-4">
                          10-15 HST
                        </th>
                        <th className="border border-gray-400 p-4">
                          25-30 HST
                        </th>
                      </tr>
                      <tr>
                        <th className="border border-gray-400 p-4">NPK</th>
                        <th className="border border-gray-400 p-4">
                          200 kg/ha
                        </th>
                        <td className="border border-gray-400 p-4">-</td>
                        <td className="border border-gray-400 p-4">-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 p-4">UREA</td>
                        <td className="border border-gray-400 p-4">-</td>
                        <td className="border border-gray-400 p-4">
                          200 kg/ha
                        </td>
                        <td className="border border-gray-400 p-4">
                          200 kg/ha
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div>
                  <p className="pl-10 pt-3">
                    5. Penyemprotan Paket Anti Gulma (PAG)
                  </p>
                  <div className="pt-3 pl-10 overflow-x-auto items-start">
                    <table className="table-auto border-collapse border border-gray-400">
                      <tbody>
                        <tr>
                          <th className="border border-gray-400 p-4">
                            Paket Anti Gulma
                          </th>
                          <th className="border border-gray-400 p-4">
                            Waktu Pemberian 15-18 HST
                          </th>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 p-4"> Dosis</td>
                          <td className="border border-gray-400 p-4">
                            7 paket kecil/ha
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <p className="pl-10 pt-3">6. Pupuk daun (jika diperlukan)</p>
                  <div className="pl-10 pt-3 overflow-x-auto items-start">
                    <table className="table-auto border-collapse border border-gray-400">
                      <tbody>
                        <tr>
                          <th className="border border-gray-400 p-4">
                            Pupuk Daun
                          </th>
                          <th className="border border-gray-400 p-4">
                            Waktu Pemberian 15-30 HST
                          </th>
                        </tr>
                        <tr>
                          <td className="border border-gray-400 p-4"> Dosis</td>
                          <td className="border border-gray-400 p-4">
                            7 paket kecil/ha
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <p className="pl-10 pt-3">7. Insektisida (jika diperlukan)</p>
                  <div className="pl-10 pt-3 overflow-x-auto items-start">
                    <table className="table-auto border-collapse border border-gray-400">
                      <tbody>
                        <tr>
                          <th className="border border-gray-400 p-4">
                            Insektisida (Karbofuran)
                          </th>
                          <th className="border border-gray-400 p-4">
                            Waktu Pemberian Tanam -25 HST
                          </th>
                        </tr>
                        <tr>
                          <th className="border border-gray-400 p-4"> Dosis</th>
                          <td className="border border-gray-400 p-4">
                            35 kg/ha
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lembar 8 */}
        <div className="mt-80 border border-gray-300 print:p-0 print:border-none print:border-b">
          {/* Isi konten untuk lembar 5 */}
          <div>
            <div>
              <p className="pl-10 pt-3">8. Penyemprotan Boom Jagung</p>
              <div className="pl-10 pt-3 overflow-x-auto items-start">
                <table className="table-auto border-collapse border border-gray-400">
                  <tbody>
                    <tr>
                      <th className="border border-gray-400 p-4">
                        Boom Jagung
                      </th>
                      <th className="border border-gray-400 p-4">
                        Waktu Pemberian 45 HST
                      </th>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-4"> Dosis</td>
                      <td className="border border-gray-400 p-4">
                        7 paket kecil/ha
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <p className="pl-10 pt-3">9. Jadwal kegiatan</p>
              <div className="pl-10 pt-3 overflow-x-auto items-start">
                <table className="table-auto border-collapse border border-gray-400 mb-20">
                  <tbody>
                    <tr>
                      <th className="border border-gray-400 p-2">
                        Jadwal Kegiatan
                      </th>
                      <th className="border border-gray-400 p-2">Waktu</th>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-2">
                        {" "}
                        Penanaman & Pemupukan Dasar
                      </td>
                      <td className="border border-gray-400 p-2">2 - 3 HST</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-2">
                        {" "}
                        Penanaman 1
                      </td>
                      <td className="border border-gray-400 p-2">
                        10 - 15 HST
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-2">
                        {" "}
                        Semprot PAG
                      </td>
                      <td className="border border-gray-400 p-2">
                        15 - 18 HST
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-2">
                        Semprot Insektisida (jika diperlukan)
                      </td>
                      <td className="border border-gray-400 p-2">20 HST</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-2">
                        {" "}
                        Pemupukan 2
                      </td>
                      <td className="border border-gray-400 p-2">25-30 HST</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-2">
                        {" "}
                        Semprot Boom Jagung
                      </td>
                      <td className="border border-gray-400 p-2">55 HST</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-2"> Panen</td>
                      <td className="border border-gray-400 p-2">120 HST</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-2">
                        Pasca Panen
                      </td>
                      <td className="border border-gray-400 p-2">120 HST</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unduh PDF */}
      <div className="pr-96 pb-20 pt-30 flex justify-end gap-x-3">
        <Link
          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          to="#"
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
          Print
        </Link>
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
          Unduh PDF
        </button>
      </div>
    </div>
  );
}

export default Econtractku;
