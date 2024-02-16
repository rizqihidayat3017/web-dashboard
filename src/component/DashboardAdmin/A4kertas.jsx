import { usePDF } from "react-to-pdf";

function A4kertas() {
  const { toPDF, targetRef } = usePDF({ filename: "contract.pdf" });
  return (
    <div className="container mx-auto p-4 bg-white shadow-lg print:mb-16">
      <div
        className="w-full h-full bg-white border border-gray-300 px-20 py-20"
        ref={targetRef}
      >
        <div className="p-4">
          {/* Konten di sini */}
          <div>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>file_1707972528709</title>
            <meta name="author" content="Windows User" />
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  ' * {margin:0; padding:0; text-indent:0; }\n .h2, h2 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 12pt; }\n .s1 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: underline; font-size: 12pt; }\n .p, p { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; margin:0pt; }\n .s2 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: underline; font-size: 12pt; }\n .s4 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n .s5 { color: black; font-family:Arial, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n .s6 { color: black; font-family:"Times New Roman", serif; font-style: italic; font-weight: normal; text-decoration: underline; font-size: 12pt; }\n .s7 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 1pt; }\n .s8 { color: black; font-family:Arial, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }\n .h1 { color: #F00; font-family:Arial, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 14pt; }\n h3 { color: black; font-family:Arial, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 11pt; }\n .s9 { color: #F00; font-family:Arial, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 11pt; }\n .s10 { color: #F00; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }\n .s12 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: underline; font-size: 11pt; }\n .s13 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 11pt; }\n .s14 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }\n .s15 { color: black; font-family:Arial, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 5pt; }\n .s16 { color: black; font-family:Arial, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 6.5pt; }\n .s17 { color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 6.5pt; }\n .s18 { color: #F00; font-family:Calibri, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 11pt; }\n .s19 { color: black; font-family:Arial, sans-serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 11pt; }\n .s20 { color: black; font-family:Arial, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }\n .s21 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 10pt; }\n .s22 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 10pt; }\n li {display: block; }\n #l1 {padding-left: 0pt;counter-reset: c1 1; }\n #l1> li>*:first-child:before {counter-increment: c1; content: counter(c1, upper-roman)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l1> li:first-child>*:first-child:before {counter-increment: c1 0;  }\n li {display: block; }\n #l2 {padding-left: 0pt; }\n #l2> li>*:first-child:before {content: "- "; color: black; font-family:Arial, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n li {display: block; }\n #l3 {padding-left: 0pt;counter-reset: e1 1; }\n #l3> li>*:first-child:before {counter-increment: e1; content: counter(e1, decimal)" "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l3> li:first-child>*:first-child:before {counter-increment: e1 0;  }\n #l4 {padding-left: 0pt;counter-reset: e2 1; }\n #l4> li>*:first-child:before {counter-increment: e2; content: counter(e1, decimal)"."counter(e2, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l4> li:first-child>*:first-child:before {counter-increment: e2 0;  }\n li {display: block; }\n #l5 {padding-left: 0pt;counter-reset: f1 2; }\n #l5> li>*:first-child:before {counter-increment: f1; content: counter(f1, decimal)" "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l5> li:first-child>*:first-child:before {counter-increment: f1 0;  }\n #l6 {padding-left: 0pt;counter-reset: f2 1; }\n #l6> li>*:first-child:before {counter-increment: f2; content: counter(f1, decimal)"."counter(f2, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l6> li:first-child>*:first-child:before {counter-increment: f2 0;  }\n #l7 {padding-left: 0pt;counter-reset: f3 1; }\n #l7> li>*:first-child:before {counter-increment: f3; content: counter(f3, lower-latin)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l7> li:first-child>*:first-child:before {counter-increment: f3 0;  }\n #l8 {padding-left: 0pt;counter-reset: f3 1; }\n #l8> li>*:first-child:before {counter-increment: f3; content: counter(f3, lower-latin)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l8> li:first-child>*:first-child:before {counter-increment: f3 0;  }\n li {display: block; }\n #l9 {padding-left: 0pt;counter-reset: g1 2; }\n #l9> li>*:first-child:before {counter-increment: g1; content: counter(g1, decimal)" "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l9> li:first-child>*:first-child:before {counter-increment: g1 0;  }\n #l10 {padding-left: 0pt;counter-reset: g2 3; }\n #l10> li>*:first-child:before {counter-increment: g2; content: counter(g1, decimal)"."counter(g2, decimal)" "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l10> li:first-child>*:first-child:before {counter-increment: g2 0;  }\n #l11 {padding-left: 0pt;counter-reset: g3 1; }\n #l11> li>*:first-child:before {counter-increment: g3; content: counter(g3, lower-latin)". "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l11> li:first-child>*:first-child:before {counter-increment: g3 0;  }\n li {display: block; }\n #l12 {padding-left: 0pt;counter-reset: h1 3; }\n #l12> li>*:first-child:before {counter-increment: h1; content: counter(h1, decimal)" "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l12> li:first-child>*:first-child:before {counter-increment: h1 0;  }\n #l13 {padding-left: 0pt;counter-reset: h2 1; }\n #l13> li>*:first-child:before {counter-increment: h2; content: counter(h1, decimal)"."counter(h2, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l13> li:first-child>*:first-child:before {counter-increment: h2 0;  }\n li {display: block; }\n #l14 {padding-left: 0pt;counter-reset: i1 4; }\n #l14> li>*:first-child:before {counter-increment: i1; content: counter(i1, decimal)" "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l14> li:first-child>*:first-child:before {counter-increment: i1 0;  }\n #l15 {padding-left: 0pt;counter-reset: i2 1; }\n #l15> li>*:first-child:before {counter-increment: i2; content: counter(i1, decimal)"."counter(i2, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l15> li:first-child>*:first-child:before {counter-increment: i2 0;  }\n li {display: block; }\n #l16 {padding-left: 0pt; }\n #l16> li>*:first-child:before {content: "- "; color: black; font-family:Arial, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n li {display: block; }\n #l17 {padding-left: 0pt;counter-reset: k1 6; }\n #l17> li>*:first-child:before {counter-increment: k1; content: counter(k1, decimal)" "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l17> li:first-child>*:first-child:before {counter-increment: k1 0;  }\n #l18 {padding-left: 0pt;counter-reset: k2 1; }\n #l18> li>*:first-child:before {counter-increment: k2; content: counter(k1, decimal)"."counter(k2, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l18> li:first-child>*:first-child:before {counter-increment: k2 0;  }\n li {display: block; }\n #l19 {padding-left: 0pt;counter-reset: l1 7; }\n #l19> li>*:first-child:before {counter-increment: l1; content: counter(l1, decimal)" "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l19> li:first-child>*:first-child:before {counter-increment: l1 0;  }\n #l20 {padding-left: 0pt;counter-reset: l2 1; }\n #l20> li>*:first-child:before {counter-increment: l2; content: counter(l1, decimal)"."counter(l2, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l20> li:first-child>*:first-child:before {counter-increment: l2 0;  }\n li {display: block; }\n #l21 {padding-left: 0pt;counter-reset: m1 8; }\n #l21> li>*:first-child:before {counter-increment: m1; content: counter(m1, decimal)" "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l21> li:first-child>*:first-child:before {counter-increment: m1 0;  }\n #l22 {padding-left: 0pt;counter-reset: m2 1; }\n #l22> li>*:first-child:before {counter-increment: m2; content: counter(m1, decimal)"."counter(m2, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l22> li:first-child>*:first-child:before {counter-increment: m2 0;  }\n li {display: block; }\n #l23 {padding-left: 0pt;counter-reset: n1 9; }\n #l23> li>*:first-child:before {counter-increment: n1; content: counter(n1, decimal)" "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l23> li:first-child>*:first-child:before {counter-increment: n1 0;  }\n #l24 {padding-left: 0pt;counter-reset: n2 1; }\n #l24> li>*:first-child:before {counter-increment: n2; content: counter(n1, decimal)"."counter(n2, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l24> li:first-child>*:first-child:before {counter-increment: n2 0;  }\n li {display: block; }\n #l25 {padding-left: 0pt;counter-reset: o1 10; }\n #l25> li>*:first-child:before {counter-increment: o1; content: counter(o1, decimal)" "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l25> li:first-child>*:first-child:before {counter-increment: o1 0;  }\n #l26 {padding-left: 0pt;counter-reset: o2 1; }\n #l26> li>*:first-child:before {counter-increment: o2; content: counter(o1, decimal)"."counter(o2, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l26> li:first-child>*:first-child:before {counter-increment: o2 0;  }\n li {display: block; }\n #l27 {padding-left: 0pt;counter-reset: p1 13; }\n #l27> li>*:first-child:before {counter-increment: p1; content: counter(p1, decimal)" "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l27> li:first-child>*:first-child:before {counter-increment: p1 0;  }\n #l28 {padding-left: 0pt;counter-reset: p2 1; }\n #l28> li>*:first-child:before {counter-increment: p2; content: counter(p1, decimal)"."counter(p2, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l28> li:first-child>*:first-child:before {counter-increment: p2 0;  }\n li {display: block; }\n #l29 {padding-left: 0pt;counter-reset: q1 14; }\n #l29> li>*:first-child:before {counter-increment: q1; content: counter(q1, decimal)" "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l29> li:first-child>*:first-child:before {counter-increment: q1 0;  }\n #l30 {padding-left: 0pt;counter-reset: q2 1; }\n #l30> li>*:first-child:before {counter-increment: q2; content: counter(q1, decimal)"."counter(q2, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l30> li:first-child>*:first-child:before {counter-increment: q2 0;  }\n li {display: block; }\n #l31 {padding-left: 0pt;counter-reset: r1 16; }\n #l31> li>*:first-child:before {counter-increment: r1; content: counter(r1, decimal)" "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l31> li:first-child>*:first-child:before {counter-increment: r1 0;  }\n #l32 {padding-left: 0pt;counter-reset: r2 1; }\n #l32> li>*:first-child:before {counter-increment: r2; content: counter(r1, decimal)"."counter(r2, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l32> li:first-child>*:first-child:before {counter-increment: r2 0;  }\n li {display: block; }\n #l33 {padding-left: 0pt;counter-reset: s1 17; }\n #l33> li>*:first-child:before {counter-increment: s1; content: counter(s1, decimal)" "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l33> li:first-child>*:first-child:before {counter-increment: s1 0;  }\n #l34 {padding-left: 0pt;counter-reset: s2 1; }\n #l34> li>*:first-child:before {counter-increment: s2; content: counter(s1, decimal)"."counter(s2, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l34> li:first-child>*:first-child:before {counter-increment: s2 0;  }\n li {display: block; }\n #l35 {padding-left: 0pt;counter-reset: t1 18; }\n #l35> li>*:first-child:before {counter-increment: t1; content: counter(t1, decimal)" "; color: black; font-style: normal; font-weight: normal; text-decoration: none; }\n #l35> li:first-child>*:first-child:before {counter-increment: t1 0;  }\n #l36 {padding-left: 0pt;counter-reset: t2 1; }\n #l36> li>*:first-child:before {counter-increment: t2; content: counter(t1, decimal)"."counter(t2, decimal)". "; color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }\n #l36> li:first-child>*:first-child:before {counter-increment: t2 0;  }\n #l37 {padding-left: 0pt;counter-reset: t3 1; }\n #l37> li>*:first-child:before {counter-increment: t3; content: counter(t3, decimal)". "; color: black; font-family:Calibri, sans-serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }\n #l37> li:first-child>*:first-child:before {counter-increment: t3 0;  }\n table, tbody {vertical-align: top; overflow: visible; }\n',
              }}
            />
            <h2
              style={{
                paddingTop: "3pt",
                paddingLeft: "116pt",
                textIndent: "0pt",
                textAlign: "center",
              }}
            >
              PERJANJIAN KERJASAMA USAHA PERTANIAN
            </h2>
            <h2
              style={{
                paddingLeft: "81pt",
                textIndent: "0pt",
                textAlign: "center",
              }}
            >
              DAN
            </h2>
            <p
              className="s1"
              style={{
                paddingLeft: "136pt",
                textIndent: "0pt",
                textAlign: "center",
              }}
            >
              PENGIKATAN JUAL BELI JAGUNG<span className="h2"> No. ....</span>
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
              <br />
            </p>
            <p
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                textAlign: "left",
              }}
            >
              Perjanjian Kerjasama Usaha Pertanian (yang selanjutnya disebut
              “Perjanjian”) ini dibuat pada hari ini, ............., tanggal ,
              oleh dan antara :
            </p>
            <ol id="l1">
              <li data-list-text="I.">
                <h2
                  style={{
                    paddingTop: "9pt",
                    paddingLeft: "39pt",
                    textIndent: "-14pt",
                    textAlign: "justify",
                  }}
                >
                  PT BISI International, Tbk.
                  <span className="p">
                    , sebuah perusahaan terbuka yang didirikan dan melakukan
                    kegiatan usaha berdasarkan pada Hukum Negara Republik
                    Indonesia, berkedudukan dan beralamat di Jalan Raya
                    Surabaya-Mojokerto Km 19, Desa Beringinbendo, Kecamatan
                    Taman, Kabupaten Sidoarjo, dalam hal ini diwakili secara sah
                    oleh .......................... yang bertindak selaku Kuasa
                    berdasarkan Surat Kuasa tertanggal ................, dari
                    dan oleh karenanya untuk dan atas nama PT BISI
                    International, Tbk. selanjutnya disebut “BISI.”
                  </span>
                </h2>
                <p style={{ textIndent: "0pt", textAlign: "left" }}>
                  <br />
                </p>
              </li>
              <li data-list-text="II.">
                <h2
                  style={{
                    paddingLeft: "39pt",
                    textIndent: "-18pt",
                    textAlign: "justify",
                  }}
                >
                  Tuan/nyonya{" "}
                  <span className="p">
                    , Perseorangan swasta, Warga Negara Indonesia, beralamat
                  </span>
                </h2>
                <p
                  style={{
                    paddingLeft: "39pt",
                    textIndent: "0pt",
                    textAlign: "justify",
                  }}
                >
                  di …………….., Provinsi……….., Pemegang Kartu Tanda Penduduk
                  dengan Nomor Induk Kependudukan (NIK) : ……………… dalam hal ini
                  bertindak untuk dan atas nama diri sendiri, Untuk selanjutnya
                  disebut sebagai <b>“Petani.”</b>
                </p>
                <p style={{ textIndent: "0pt", textAlign: "left" }}>
                  <br />
                </p>
              </li>
              <li data-list-text="III.">
                <h2
                  style={{
                    paddingLeft: "39pt",
                    textIndent: "-22pt",
                    textAlign: "justify",
                  }}
                >
                  PT Charoen Pokphand Indonesia, Tbk.
                  <span className="p">
                    , sebuah perusahaan yang didirikan dan menjalankan kegiatan
                    usahanya berdasarkan pada Hukum Negara Republik Indonesia,
                    beralamat di Jalan Ancol Barat VIII/ 1, Kelurahan Ancol,
                    Kecamatan Pademangan, Jakarta Utara, dalam hal ini diwakili
                    secara sah oleh………………. yang bertindak selaku Kuasa
                    berdasarkan Surat Kuasa tertanggal ................, dari
                    dan oleh karenanya untuk dan atas nama PT Charoen Pokphand
                    Indonesia, Tbk. …………………., untuk selanjutnya disebut sebagai{" "}
                  </span>
                  “CPI.”
                </h2>
              </li>
            </ol>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
              <br />
            </p>
            <p
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "202%",
                textAlign: "left",
              }}
            >
              BISI, Petani dan CPI selanjutnya secara bersama-sama disebut
              sebagai <b>“Para Pihak”</b>. Para Pihak dengan ini terlebih dahulu
              menerangkan hal-hal sebagai berikut:
            </p>
            <ul id="l2">
              <li data-list-text="-">
                <p
                  style={{
                    paddingLeft: "29pt",
                    textIndent: "-18pt",
                    textAlign: "justify",
                  }}
                >
                  Bahwa BISI adalah sebuah perusahaan yang bergerak dalam bidang
                  usaha pertanian, baik yang dilakukan sendiri maupun melalui
                  kerjasama usaha dengan pihak/pelaku usaha lain, serta bidang
                  usaha perdagangan, yang meliputi perdagangan sarana produksi
                  pertanian dan hasil-hasil pertanian.
                </p>
              </li>
              <li data-list-text="-">
                <p
                  style={{
                    paddingLeft: "29pt",
                    textIndent: "-18pt",
                    textAlign: "justify",
                  }}
                >
                  Bahwa Petani adalah orang-perseorangan atau badan usaha yang
                  menjalankan kegiatan usaha budidaya pertanian, baik secara
                  langsung maupun melalui kelompok tani di bawah koordinasi
                  Petani, dan dalam hal ini mengadakan kerjasama usaha budidaya
                  pertanian dengan BISI, terutama dalam hal pengadaan sarana
                  produksi pertanian, pelaksanaan budidaya pertanian serta
                  penanganan pasca panen, seperti pengolahan dan pemasaran
                  hasil-hasil pertanian.
                </p>
              </li>
              <li data-list-text="-">
                <p
                  style={{
                    paddingLeft: "29pt",
                    textIndent: "-18pt",
                    textAlign: "justify",
                  }}
                >
                  Bahwa CPI adalah sebuah perusahaan yang salah satu usahanya
                  bergerak di dalam bidang industri makanan ternak yang
                  menggunakan jagung sebagai salah satu bahan bakunya.
                </p>
              </li>
              <li data-list-text="-">
                <p
                  style={{
                    paddingLeft: "29pt",
                    textIndent: "-18pt",
                    textAlign: "justify",
                  }}
                >
                  Bahwa untuk saling mendukung dan bersinergi dalam memajukan
                  usaha pertanian guna meningkatkan efisiensi, kualitas hasil
                  budidaya dan daya saing di bidang usaha pertanian, BISI dan
                  Petani telah bersepakat, membuat kerjasama usaha pertanian.
                  Petani akan
                </p>
                <p
                  style={{
                    paddingTop: "3pt",
                    paddingLeft: "29pt",
                    textIndent: "0pt",
                    textAlign: "justify",
                  }}
                >
                  menanam jagung dan BISI akan memasok Sarana Produksi Pertanian
                  (Saprotan) serta memberikan bimbingan sampai jagung siap
                  dijual.
                </p>
              </li>
              <li data-list-text="-">
                <p
                  style={{
                    paddingLeft: "29pt",
                    textIndent: "-18pt",
                    textAlign: "justify",
                  }}
                >
                  Bahwa CPI bermaksud membeli jagung dari Petani serta melakukan
                  kerjasama dengan BISI dan Petani, dan setelah menyampaikan
                  maksudnya, BISI dan Petani dapat menerima maksud CPI.
                </p>
              </li>
            </ul>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
              <br />
            </p>
            <p
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "114%",
                textAlign: "justify",
              }}
            >
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
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
              <br />
            </p>
            <h2
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pasal 1
            </h2>
            <p
              className="s2"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Kesepakatan Kerjasama Usaha Pertanian dan Pengikatan Jual Beli
              Jagung
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
              <br />
            </p>
            <ol id="l3">
              <ol id="l4">
                <li data-list-text="1.1.">
                  <p
                    style={{
                      paddingTop: "4pt",
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Para Pihak dengan ini bersepakat dan saling mengikatkan diri
                    dalam hubungan kerjasama usaha pertanian dan jual beli
                    jagung, dengan BISI sebagai pemasok Saprotan, Petani
                    mengikatkan diri untuk menjual jagung kepada CPI dan CPI
                    mengikatkan diri untuk membeli jagung dari Petani.
                  </p>
                </li>
                <li data-list-text="1.2.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    BISI akan memasok (menjual) sarana produksi pertanian
                    (Saprotan) kepada Petani secara kredit tanpa bunga,
                    memberikan bimbingan teknis budidaya pertanian dan manajemen
                    usaha, mendorong peningkatan efisiensi dan produktivitas,
                    memberikan solusi bagi pemasaran hasil-hasil budidaya;
                    sedangkan Petani akan menyediakan lahan pertanian, tenaga
                    kerja, peralatan/perlengkapan budidaya dan melakukan
                    pengadaan Saprotan, dan CPI akan membeli jagung hasil panen
                    dari Petani.
                  </p>
                </li>
                <li data-list-text="1.3.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    BISI akan menerima pembayaran dari Petani melalui CPI
                    berdasarkan kuasa dari Petani dengan memotong sejumlah uang
                    untuk dibayarkan kepada BISI terkait pembelian Sarana
                    Produksi Pertanian (Saprotan) oleh Petani.
                  </p>
                </li>
                <li data-list-text="1.4.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Sehubungan dengan pasal 1.3 di atas, pada saat CPI akan
                    melakukan pembayaran kepada Petani, BISI akan memberikan
                    informasi kepada CPI mengenai sejumlah uang yang akan
                    dipotong untuk pembayaran hutang atau kredit Petani kepada
                    BISI.
                  </p>
                </li>
                <li data-list-text="1.5.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Kerjasama usaha pertanian dan pengikatan jual beli jagung
                    berdasarkan Perjanjian ini berlaku untuk jangka waktu
                    sebagaimana ditetapkan dalam <b>Lampiran I </b>(“Jangka
                    Waktu Kerjasama dan Pengikatan Jual Beli”).
                  </p>
                </li>
              </ol>
            </ol>
            <h2
              style={{
                paddingTop: "10pt",
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pasal 2
            </h2>
            <p
              className="s2"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                textAlign: "justify",
              }}
            >
              Kewajiban Masing-masing Pihak
              <span className="p"> Dalam perjanjian ini,</span>
            </p>
            <ol id="l5">
              <ol id="l6">
                <li data-list-text="2.1.">
                  <p
                    style={{
                      paddingLeft: "53pt",
                      textIndent: "-32pt",
                      textAlign: "justify",
                    }}
                  >
                    BISI berkewajiban untuk:
                  </p>
                  <ol id="l7">
                    <li data-list-text="a.">
                      <p
                        style={{
                          paddingLeft: "71pt",
                          textIndent: "-18pt",
                          textAlign: "justify",
                        }}
                      >
                        memasok (menjual) Saprotan, berupa benih, pestisida,
                        ZPT, dan lain-lain, seperti, apabila diperlukan,
                        peralatan pertanian, kepada Petani menurut syarat-syarat
                        dan ketentuan-ketentuan yang akan disepakati pada
                        waktunya;
                      </p>
                    </li>
                    <li data-list-text="b.">
                      <p
                        style={{
                          paddingLeft: "71pt",
                          textIndent: "-18pt",
                          textAlign: "justify",
                        }}
                      >
                        memberikan bimbingan teknis budidaya pertanian dan
                        manajemen usaha;
                      </p>
                    </li>
                    <li data-list-text="c.">
                      <p
                        style={{
                          paddingLeft: "71pt",
                          textIndent: "-18pt",
                          textAlign: "justify",
                        }}
                      >
                        mengajarkan penerapan teknologi budidaya pertanian;
                      </p>
                    </li>
                    <li data-list-text="d.">
                      <p
                        style={{
                          paddingLeft: "71pt",
                          textIndent: "-18pt",
                          textAlign: "justify",
                        }}
                      >
                        memastikan terlaksananya tata cara budidaya yang baik
                        bagi peningkatan efisiensi dan produktivitas;
                      </p>
                    </li>
                    <li data-list-text="e.">
                      <p
                        style={{
                          paddingTop: "3pt",
                          paddingLeft: "71pt",
                          textIndent: "-18pt",
                          textAlign: "justify",
                        }}
                      >
                        memberikan bimbingan tata cara panen, penggunaan
                        teknologi, dan pengelolaan pascapanen;
                      </p>
                    </li>
                    <li data-list-text="f.">
                      <p
                        style={{
                          paddingLeft: "71pt",
                          textIndent: "-18pt",
                          textAlign: "justify",
                        }}
                      >
                        memberikan solusi bagi masalah pemasaran hasil-hasil
                        budidaya;
                      </p>
                    </li>
                    <li data-list-text="g.">
                      <p
                        style={{
                          paddingLeft: "71pt",
                          textIndent: "-18pt",
                          textAlign: "justify",
                        }}
                      >
                        memberikan informasi kepada CPI mengenai sejumlah uang
                        yang akan dipotong dari hutang atau kredit Petani kepada
                        BISI untuk memudahkan CPI melakukan pemotongan pada saat
                        pembayaran pembelian jagung.
                      </p>
                      <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                      </p>
                    </li>
                  </ol>
                </li>
                <li data-list-text="2.2.">
                  <p
                    style={{
                      paddingLeft: "53pt",
                      textIndent: "-32pt",
                      textAlign: "left",
                    }}
                  >
                    Petani berkewajiban untuk:
                  </p>
                  <ol id="l8">
                    <li data-list-text="a.">
                      <p
                        style={{
                          paddingLeft: "71pt",
                          textIndent: "-18pt",
                          textAlign: "left",
                        }}
                      >
                        dengan biaya sendiri atau kelompok tani, menyediakan
                        lahan budidaya pertanian untuk digunakan dalam kerjasama
                        usaha pertanian berdasarkan perjanjian ini;
                      </p>
                    </li>
                    <li data-list-text="b.">
                      <p
                        style={{
                          paddingLeft: "71pt",
                          textIndent: "-18pt",
                          textAlign: "left",
                        }}
                      >
                        membeli Saprotan dari BISI;
                      </p>
                    </li>
                    <li data-list-text="c.">
                      <p
                        style={{
                          paddingLeft: "71pt",
                          textIndent: "-18pt",
                          textAlign: "left",
                        }}
                      >
                        menyediakan tenaga kerja;
                      </p>
                    </li>
                    <li data-list-text="d.">
                      <p
                        style={{
                          paddingLeft: "71pt",
                          textIndent: "-18pt",
                          textAlign: "left",
                        }}
                      >
                        menyediakan pupuk;
                      </p>
                    </li>
                    <li data-list-text="e.">
                      <p
                        style={{
                          paddingLeft: "71pt",
                          textIndent: "-18pt",
                          textAlign: "left",
                        }}
                      >
                        melakukan budidaya menurut tata cara budidaya yang baik
                        sesuai petunjuk-petunjuk BISI;
                      </p>
                    </li>
                    <li data-list-text="f.">
                      <p
                        style={{
                          paddingLeft: "71pt",
                          textIndent: "-18pt",
                          textAlign: "left",
                        }}
                      >
                        menerapkan teknologi budidaya;
                      </p>
                    </li>
                    <li data-list-text="g.">
                      <p
                        style={{
                          paddingLeft: "71pt",
                          textIndent: "-18pt",
                          textAlign: "left",
                        }}
                      >
                        melaksanakan tata cara panen yang ditetapkan;
                      </p>
                    </li>
                    <li data-list-text="h.">
                      <p
                        style={{
                          paddingLeft: "71pt",
                          textIndent: "-17pt",
                          textAlign: "left",
                        }}
                      >
                        melakukan pengelolaan pascapanen;
                      </p>
                    </li>
                    <li data-list-text="i.">
                      <p
                        style={{
                          paddingLeft: "71pt",
                          textIndent: "-18pt",
                          textAlign: "justify",
                        }}
                      >
                        memberikan ijin kepada CPI untuk turut melakukan
                        peninjauan apabila CPI ingin mengetahui kondisi jagung
                        yang ditanam di lahan yang telah ditentukan sampai
                        dengan saatnya panen;
                      </p>
                    </li>
                    <li data-list-text="j.">
                      <p
                        style={{
                          paddingLeft: "71pt",
                          textIndent: "-17pt",
                          textAlign: "justify",
                        }}
                      >
                        menjual jagung hasil panen dari lahan yang telah
                        ditentukan (sesuai <b>Lampiran II</b>) kepada CPI.
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </ol>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
              <br />
            </p>
            <ol id="l9">
              <ol id="l10">
                <li data-list-text="2.3">
                  <p
                    style={{
                      paddingLeft: "53pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    CPI mengikatkan diri untuk :
                  </p>
                  <ol id="l11">
                    <li data-list-text="a.">
                      <p
                        style={{
                          paddingLeft: "74pt",
                          textIndent: "-21pt",
                          textAlign: "justify",
                        }}
                      >
                        Membeli jagung yang ditanam pada lahan yang beralamat di
                        lokasi sebagaimana disebutkan dalam <b>Lampiran II </b>
                        mengenai Data Lokasi dan Lahan, sesuai dengan
                        spesifikasi mutu, harga pada saat penyerahan dan tabel
                        rafaksi yang diterbitkan oleh CPI dari waktu ke waktu;
                      </p>
                    </li>
                    <li data-list-text="b.">
                      <p
                        style={{
                          paddingLeft: "74pt",
                          textIndent: "-21pt",
                          lineHeight: "92%",
                          textAlign: "justify",
                        }}
                      >
                        Melakukan pembayaran kepada Petani atas pembelian jagung
                        dan selanjutnya membayarkan sejumlah uang yang dipotong
                        dari harga pembelian jagung Petani tersebut untuk
                        pembayaran hutang atau kredit Petani kepada BISI.
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </ol>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
              <br />
            </p>
            <h2
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                textAlign: "justify",
              }}
            >
              Pasal 3
            </h2>
            <p
              className="s2"
              style={{
                paddingTop: "1pt",
                paddingLeft: "11pt",
                textIndent: "0pt",
                textAlign: "justify",
              }}
            >
              Lokasi dan Lahan
            </p>
            <ol id="l12">
              <ol id="l13">
                <li data-list-text="3.1.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Untuk kerjasama usaha pertanian ini, Petani menyediakan
                    lahan budidaya yang berlokasi di:
                    .......................................
                  </p>
                </li>
                <li data-list-text="3.2.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Pendataan lahan akan dilakukan dengan menggunakan aplikasi
                    dan divalidasi dengan <i>polygon geotagging</i>. Data lahan,
                    titik-titik koordinat, dan luas lahan hasil pendataan
                    dinyatakan dalam <b>Lampiran II </b>(Data Lokasi dan Lahan).
                  </p>
                </li>
                <li data-list-text="3.3.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Petani menyatakan dan menjamin bahwa lahan yang digunakan
                    adalah milik Petani atau pemilik lahan budidaya dalam
                    koordinasi Petani, dan tidak ada pihak lain yang turut
                    memiliki lahan, atau turut berhak atas penggunaan lahan, dan
                    bahwa lahan tidak dalam sengketa kepemilikan atau
                    pemanfaatannya, dan dapat digunakan dengan aman untuk
                    kerjasama berdasarkan Perjanjian ini.
                  </p>
                </li>
                <li data-list-text="3.4.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Sehubungan dengan pernyataan dan jaminan dalam Ayat 3.3,
                    Petani berjanji akan menunjukkan, kepada BISI dan CPI, surat
                    pernyataan asli dari setiap pemilik lahan budidaya, dalam
                    substansi dan format sesuai <b>Lampiran III </b>(Format
                    Surat Pernyataan).
                  </p>
                </li>
              </ol>
            </ol>
            <h2
              style={{
                paddingTop: "3pt",
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pasal 4
            </h2>
            <p
              className="s2"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pengadaan Saprotan Dan Penjualan Jagung
            </p>
            <ol id="l14">
              <ol id="l15">
                <li data-list-text="4.1.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Pengadaan Saprotan oleh Petani dilakukan setiap awal
                    periode/musim tanam sesuai dengan kebutuhan atau standar
                    yang tercantum pada <b>Lampiran V </b>(Teknik Budidaya
                    Jagung Hibrida BISI).
                  </p>
                </li>
                <li data-list-text="4.2.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Petani akan membeli Saprotan dari BISI, dan BISI akan
                    menjual Saprotan kepada Petani, selanjutnya jagung hasil
                    budidaya Petani akan dijual kepada CPI.
                  </p>
                </li>
                <li data-list-text="4.3.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Jual beli Saprotan yang dimaksud dalam pasal ini dilakukan
                    secara kredit tanpa bunga untuk jangka waktu satu periode
                    tanam.
                  </p>
                </li>
                <li data-list-text="4.4.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Harga Saprotan akan disepakati dari waktu ke waktu dengan
                    mempertimbangkan harga pasar dan akan ditetapkan dalam{" "}
                    <b>Lampiran IV </b>(Daftar Saprotan dan Harga Jual).
                  </p>
                </li>
                <li data-list-text="4.5.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Jatuh tempo pembayaran pembelian Saprotan oleh Petani adalah
                    pada setiap akhir periode/musim tanam, yaitu ketika hasil
                    budidaya dijual.
                  </p>
                </li>
                <li data-list-text="4.6.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Atas jagung hasil budidaya Petani yang dijual kepada CPI,
                    maka Petani dengan ini memberi kuasa kepada CPI untuk dan
                    atas nama Petani memotong atau dengan cara lain menggunakan
                    sebagian uang dari penjualan hasil budidaya, sebesar jumlah
                    hutang Petani kepada BISI, untuk melunasi hutang tersebut.
                  </p>
                </li>
                <li data-list-text="4.7.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Untuk tiap-tiap pembayaran hutang oleh Petani melalui CPI,
                    BISI memberikan kwitansi atau tanda terima yang sah kepada
                    Petani.
                  </p>
                </li>
              </ol>
            </ol>
            <h2
              style={{
                paddingTop: "9pt",
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "left",
              }}
            >
              Pasal 5
            </h2>
            <p
              className="s2"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "left",
              }}
            >
              Spesifikasi dan Standar Mutu Saprotan
            </p>
            <p
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                textAlign: "left",
              }}
            >
              Saprotan yang dipasok oleh BISI kepada Petani dalam kerjasama
              usaha ini meliputi dan memenuhi standar mutu sebagai berikut :
            </p>
            <table
              style={{ borderCollapse: "collapse", marginLeft: "5.63398pt" }}
              cellSpacing={0}
            >
              <tbody>
                <tr style={{ height: "42pt" }}>
                  <td
                    style={{
                      width: "20pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s4"
                      style={{
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        lineHeight: "13pt",
                        textAlign: "left",
                      }}
                    >
                      a.
                    </p>
                  </td>
                  <td
                    style={{
                      width: "184pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s4"
                      style={{
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        lineHeight: "13pt",
                        textAlign: "left",
                      }}
                    >
                      Benih Jagung Hibrida BISI
                    </p>
                  </td>
                  <td
                    style={{
                      width: "258pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <ul id="l16">
                      <li data-list-text="-">
                        <p
                          className="s4"
                          style={{
                            paddingLeft: "28pt",
                            paddingRight: "32pt",
                            textIndent: "-14pt",
                            textAlign: "left",
                          }}
                        >
                          bersertifikat (atau memenuhi persyaratan sertifikasi);
                        </p>
                      </li>
                      <li data-list-text="-">
                        <p
                          className="s4"
                          style={{
                            paddingLeft: "28pt",
                            textIndent: "-14pt",
                            lineHeight: "13pt",
                            textAlign: "left",
                          }}
                        >
                          berlabel
                        </p>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                  <td
                    style={{
                      width: "20pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s4"
                      style={{
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        lineHeight: "13pt",
                        textAlign: "left",
                      }}
                    >
                      b.
                    </p>
                  </td>
                  <td
                    style={{
                      width: "184pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s4"
                      style={{
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        lineHeight: "13pt",
                        textAlign: "left",
                      }}
                    >
                      Pestisida
                    </p>
                  </td>
                  <td
                    style={{
                      width: "258pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingLeft: "14pt",
                        textIndent: "0pt",
                        lineHeight: "13pt",
                        textAlign: "left",
                      }}
                    >
                      -{" "}
                      <span className="s4">
                        bersertifikat ISO 9000 Tahun 2008
                      </span>
                    </p>
                  </td>
                </tr>
                <tr style={{ height: "14pt" }}>
                  <td
                    style={{
                      width: "20pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s4"
                      style={{
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        lineHeight: "13pt",
                        textAlign: "left",
                      }}
                    >
                      c.
                    </p>
                  </td>
                  <td
                    style={{
                      width: "184pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s4"
                      style={{
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        lineHeight: "13pt",
                        textAlign: "left",
                      }}
                    >
                      ZPT
                    </p>
                  </td>
                  <td
                    style={{
                      width: "258pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s5"
                      style={{
                        paddingLeft: "14pt",
                        textIndent: "0pt",
                        lineHeight: "13pt",
                        textAlign: "left",
                      }}
                    >
                      -{" "}
                      <span className="s4">
                        bersertifikat ISO 9000 Tahun 2008
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
              <br />
            </p>
            <h2
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "left",
              }}
            >
              Pasal 6
            </h2>
            <p
              className="s2"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "left",
              }}
            >
              Penyerahan Saprotan
            </p>
            <ol id="l17">
              <ol id="l18">
                <li data-list-text="6.1.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "left",
                    }}
                  >
                    Penyerahan Saprotan dilakukan di lahan budidaya yang
                    dinyatakan dalam Pasal 3 Perjanjian ini.
                  </p>
                </li>
                <li data-list-text="6.2.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "left",
                    }}
                  >
                    Pada saat penyerahan Saprotan, Para Pihak menandatangani{" "}
                    <i>Delivery Order </i>(surat jalan) yang berlaku sebagai
                    bukti serah terima Saprotan.
                  </p>
                </li>
                <li data-list-text="6.3.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "left",
                    }}
                  >
                    Penyerahan Saprotan menandai peralihan kepemilikan dan
                    tanggung jawab atas Saprotan dari BISI kepada Petani.
                  </p>
                </li>
              </ol>
            </ol>
            <h2
              style={{
                paddingTop: "9pt",
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pasal 7
            </h2>
            <p
              className="s2"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pelaksanaan Budidaya
            </p>
            <ol id="l19">
              <ol id="l20">
                <li data-list-text="7.1.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Petani wajib menyiapkan lahan budidaya sesuai
                    petunjuk-petunjuk BISI agar lahan menjadi siap tanam.
                  </p>
                </li>
                <li data-list-text="7.2.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Budidaya dilakukan menurut tata cara budidaya yang baik,
                    sekurang-kurangnya sesuai tata cara yang ditetapkan dalam{" "}
                    <b>Lampiran V </b>(Teknik Budidaya Jagung Hibrida BISI).
                  </p>
                </li>
                <li data-list-text="7.3.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    BISI sewaktu-waktu dapat memasuki lahan budidaya untuk
                    memastikan pelaksanaan budidaya yang baik dan memberikan
                    petunjuk-petunjuk teknis pelaksanaan budidaya.
                  </p>
                </li>
                <li data-list-text="7.4.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    CPI diperbolehkan untuk turut melakukan peninjauan apabila
                    CPI ingin mengetahui kondisi jagung yang ditanam oleh Petani
                    atas bimbingan BISI, sampai dengan jagung siap dipanen.
                  </p>
                </li>
              </ol>
            </ol>
            <h2
              style={{
                paddingTop: "3pt",
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pasal 8
            </h2>
            <p
              className="s2"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pelaksanaan Panen dan Pasca-panen
            </p>
            <ol id="l21">
              <ol id="l22">
                <li data-list-text="8.1.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Petani akan memberikan akses data dan informasi panen;
                    meliputi lokasi panen, luas lahan panen, dan estimasi tonase
                    hasil panen, kepada BISI dan CPI.
                  </p>
                </li>
                <li data-list-text="8.2.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Berdasarkan data dan informasi panen yang diperoleh
                    sebagaimana dimaksud dalam Pasal 8.1, pada usia budidaya
                    ke-100 hari, staf administrasi BISI menerbitkan Laporan
                    Rencana Panen (LRP) dan Surat Informasi Panen (SIP), dan
                    menyampaikannya kepada Petani.
                  </p>
                </li>
                <li data-list-text="8.3.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Panen jagung hasil budidaya Petani dilakukan secara mekanis
                    pada usia budidaya ke-120 hari, dan selanjutnya dilakukan
                    penanganan pasca-panen.
                  </p>
                </li>
              </ol>
            </ol>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
              <br />
            </p>
            <h2
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pasal 9
            </h2>
            <p
              className="s2"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pembayaran dan Harga Jagung
            </p>
            <ol id="l23">
              <ol id="l24">
                <li data-list-text="9.1.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Sebagaimana dalam Pasal 2.3 huruf (b) Perjanjian ini, CPI
                    melakukan pembayaran kepada Petani atas pembelian jagung dan
                    selanjutnya membayarkan sejumlah uang yang dipotong dari
                    harga pembelian jagung Petani tersebut untuk pembayaran
                    hutang atau kredit Petani kepada BISI.
                  </p>
                </li>
                <li data-list-text="9.2.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Harga jagung berlaku sesuai dengan spesifikasi mutu, harga
                    pada saat penyerahan dan tabel rafaksi yang diterbitkan oleh
                    CPI dari waktu ke waktu.
                  </p>
                </li>
                <li data-list-text="9.3.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Dalam hal pembelian jagung petani, Pihak CPI memberikan
                    jaminan harga terendah Rp 3.500/kg jagung dengan KA 15%,
                    sehingga apabila harga di pasar dibawah Rp 3.500/kg, maka
                    harga yang digunakan adalah harga jaminan terendah.
                  </p>
                </li>
              </ol>
            </ol>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
              <br />
            </p>
            <h2
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pasal 10
            </h2>
            <p
              className="s2"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Kewajiban Perpajakan dan Perizinan Berusaha
            </p>
            <ol id="l25">
              <ol id="l26">
                <li data-list-text="10.1.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Masing-masing dari Para Pihak wajib memenuhi
                    kewajiban-kewajiban perpajakannya sesuai dengan peraturan
                    perundang-undangan perpajakan yang berlaku.
                  </p>
                </li>
                <li data-list-text="10.2.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Masing-masing dari Para Pihak wajib memenuhi peraturan
                    perundang-undangan yang berlaku, terutama yang terkait
                    dengan ketentuan-ketentuan perizinan berusaha sehubungan
                    dengan pelaksanaan kerjasama ini.
                  </p>
                </li>
              </ol>
            </ol>
            <h2
              style={{
                paddingTop: "10pt",
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "left",
              }}
            >
              Pasal 11
            </h2>
            <p
              className="s2"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "left",
              }}
            >
              Hukum yang Berlaku
            </p>
            <p
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                textAlign: "left",
              }}
            >
              Perjanjian ini tunduk dan ditafsirkan berdasarkan hukum Negara
              Republik Indonesia.
            </p>
            <h2
              style={{
                paddingTop: "10pt",
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pasal 12
            </h2>
            <p
              className="s2"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Perwakilan Para Pihak
            </p>
            <p
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                textAlign: "justify",
              }}
            >
              Para Pihak memahami sepenuhnya bahwa yang dimaksud dengan BISI
              meliputi pimpinan, pegawai, karyawan, dan/atau wakil-wakil yang
              sah dari BISI; demikian pula halnya yang dimaksud dengan CPI
              meliputi pimpinan, pegawai, karyawan/staf, dan/atau wakil-wakil
              yang sah dari CPI. Yang dimaksud dengan Petani meliputi Petani,
              pemilik lahan budidaya, pekerja budidaya, ahli waris pemilik
              lahan, dan wakil-wakil yang sah dari Petani dan/atau pemilik lahan
              budidaya.
            </p>
            <h2
              style={{
                paddingTop: "10pt",
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "left",
              }}
            >
              Pasal 13
            </h2>
            <p
              className="s2"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "left",
              }}
            >
              Hubungan sebagai Entitas Terpisah
            </p>
            <ol id="l27">
              <ol id="l28">
                <li data-list-text="13.1.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "left",
                    }}
                  >
                    Perjanjian ataupun hubungan kerjasama ini tidak membentuk
                    hubungan-hubungan prinsipal-agen, prinsipal-kuasa, pemberi
                    kerja-karyawan/pekerja, dan sejenisnya.
                  </p>
                </li>
                <li data-list-text="13.2.">
                  <p
                    style={{
                      paddingTop: "3pt",
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Para Pihak menegaskan dan menyatakan bahwa masing-masing
                    Pihak merupakan badan hukum/pribadi hukum atau entitas yang
                    terpisah sehingga tindakan atau perbuatan salah satu dari
                    Para Pihak merupakan tanggung jawab Pihak itu sendiri, dan
                    bukan tanggung jawab Pihak lainnya.
                  </p>
                </li>
              </ol>
            </ol>
            <h2
              style={{
                paddingTop: "10pt",
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pasal 14
            </h2>
            <p
              className="s2"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Tanggung Jawab atas Kerugian
            </p>
            <ol id="l29">
              <ol id="l30">
                <li data-list-text="14.1.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Petani dengan ini menyatakan bahwa Petani akan mematuhi
                    Perjanjian ini, dan bahwa perbuatan-perbuatan Petani yang di
                    luar ketentuan Perjanjian ini merupakan tanggung jawab
                    Petani sendiri, dan dengan ini membebaskan BISI dan CPI dari
                    tanggung jawab, baik pidana maupun perdata, serta dari
                    segala kerugian yang mungkin timbul dari perbuatan-perbuatan
                    Petani.
                  </p>
                </li>
                <li data-list-text="14.2.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Petani berjanji dan menyatakan akan mengganti kerugian yang
                    mungkin timbul pada BISI dan atau CPI sebagai akibat
                    perbuatan-perbuatan Petani sebagaimana dimaksud pada Pasal
                    14.1.
                  </p>
                </li>
              </ol>
            </ol>
            <h2
              style={{
                paddingTop: "10pt",
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pasal 15
            </h2>
            <p
              className="s2"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Penyelesaian Sengketa
            </p>
            <p
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                textAlign: "justify",
              }}
            >
              Apabila dalam pelaksanaan Perjanjian ini terjadi perbedaan
              penafsiran terhadap ketentuan-ketentuan Perjanjian ini dan/ataupun
              timbul sengketa dalam pelaksanaannya, Para Pihak dengan ini
              bersepakat untuk bermusyawarah mencari penyelesaian; tetapi
              apabila cara tersebut tidak dapat ditempuh atau tidak mencapai
              kesepakatan penyelesaian, maka Para Pihak akan menyelesaikannya
              melalui Pengadilan Negeri Kabupaten Sidoarjo.
            </p>
            <h2
              style={{
                paddingTop: "10pt",
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pasal 16
            </h2>
            <p
              className="s2"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pengakhiran Perjanjian
            </p>
            <ol id="l31">
              <ol id="l32">
                <li data-list-text="16.1.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Kerjasama Usaha Pertanian dan Pengikatan Jual Beli Jagung
                    ini tidak dapat diakhiri lebih dahulu sebelum berakhir
                    menurut Jangka Waktu Kerjasama dan Pengikatan Jual Beli,
                    namun dapat diperpanjang dengan syarat-syarat dan
                    ketentuan-ketentuan yang disepakati oleh Para Pihak.
                  </p>
                </li>
                <li data-list-text="16.2.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Pengakhiran kerjasama secara sepihak oleh Petani memberikan
                    hak kepada BISI untuk menuntut pelunasan atau pembayaran
                    segala tunggakan uang Petani kepada BISI dalam tempo 14
                    (empat belas) hari sejak tanggal pengakhiran.
                  </p>
                </li>
                <li data-list-text="16.3.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Kelalaian Petani untuk memenuhi kewajiban pembayaran utang
                    sebagaimana ditentukan dalam Pasal 16.2 di atas, mewajibkan
                    Petani membayar tambahan berupa denda sebesar 1 (satu)
                    persen per hari dikalikan jumlah utang.
                  </p>
                </li>
                <li data-list-text="16.4.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    BISI setiap saat dapat menempuh tindakan-tindakan hukum yang
                    berguna bagi pemenuhan kewajiban Petani apabila perlu dengan
                    menggunakan alat-alat kekuasaan Negara dan/atau menempuh
                    tindakan hukum pidana maupun perdata.
                  </p>
                </li>
              </ol>
            </ol>
            <h2
              style={{
                paddingTop: "10pt",
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Pasal 17
            </h2>
            <p
              className="s6"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "justify",
              }}
            >
              Force Majeure
            </p>
            <ol id="l33">
              <ol id="l34">
                <li data-list-text="17.1.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Jika terjadi keadaan memaksa (<i>force majeure</i>), Petani
                    wajib melaporkan kepada BISI Pihak-Pihak lainnya mengenai
                    keadaan atau kejadian tersebut dalam waktu paling lambat 12
                    (dua belas) jam sejak terjadinya keadaan itu, agar para
                    Pihak, utamanya BISI bersama-sama dengan Petani, dapat
                    dengan segera mengambil tindakan-tindakan yang dianggap
                    perlu dan berguna untuk mengurangi kerugian/risiko keadaan
                    memaksa yang terjadi.
                  </p>
                </li>
                <li data-list-text="17.2.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Yang termasuk dalam <i>force majeure </i>menurut pasal ini
                    meliputi: bencana alam, huru-hara, banjir, kebakaran, wabah
                    penyakit tanaman yang serius, perubahan iklim/cuaca secara
                    ekstrim, perubahan mendadak/drastis suatu peraturan
                    perundangan yang
                  </p>
                </li>
              </ol>
            </ol>
            <p
              style={{
                paddingTop: "3pt",
                paddingLeft: "39pt",
                textIndent: "0pt",
                textAlign: "justify",
              }}
            >
              berkaitan langsung dengan keberlangsungan usaha budidaya pertanian
              dan pengikatan jual beli, dan lain-lain, yang semuanya secara
              langsung mempengaruhi atau berdampak pada kerjasama usaha
              pertanian dan pengikatan jual beli berdasarkan Perjanjian ini.
            </p>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
              <br />
            </p>
            <h2
              style={{
                paddingTop: "9pt",
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "left",
              }}
            >
              Pasal 18
            </h2>
            <p
              className="s2"
              style={{
                paddingLeft: "11pt",
                textIndent: "0pt",
                lineHeight: "14pt",
                textAlign: "left",
              }}
            >
              Lain-lain
            </p>
            <ol id="l35">
              <ol id="l36">
                <li data-list-text="18.1.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Perjanjian ini merupakan keseluruhan kesepakatan Para Pihak
                    dan mengatasi semua kesepakatan terdahulu oleh Para Pihak,
                    baik secara tertulis maupun secara lisan, mengenai hal-hal
                    yang disepakati dalam Perjanjian ini.
                  </p>
                </li>
                <li data-list-text="18.2.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Apabila di kemudian hari ada suatu ketentuan dalam
                    Perjanjian ini menjadi tidak sesuai dengan peraturan
                    perundang-undangan yang berlaku atau menjadi tidak berlaku
                    karena hukum, maka ketentuan-ketentuan lain tetap berlaku
                    dan mengikat Para Pihak sebagaimana mestinya, dan dalam hal
                    demikian, Para Pihak akan segera berunding untuk membahas
                    ketentuan yang tidak berlaku tersebut.
                  </p>
                </li>
                <li data-list-text="18.3.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Hal-hal yang belum atau belum cukup diatur dalam Perjanjian
                    ini, akan diatur berdasarkan kesepakatan tertulis Para Pihak
                    dalam suatu addendum atau amandemen atas Perjanjian ini.
                  </p>
                </li>
                <li data-list-text="18.4.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Lampiran-lampiran Perjanjian ini dapat diubah atau
                    disesuaikan dari waktu ke waktu tanpa mempengaruhi
                    keberlakuan Perjanjian ini.
                  </p>
                </li>
                <li data-list-text="18.5.">
                  <p
                    style={{
                      paddingLeft: "39pt",
                      textIndent: "-28pt",
                      textAlign: "justify",
                    }}
                  >
                    Lampiran, addendum, amandemen, ataupun ketentuan-ketentuan
                    yang ditetapkan berdasarkan Perjanjian ini merupakan bagian
                    yang tidak dapat dipisahkan dari Perjanjian ini.
                  </p>
                  <p
                    style={{
                      paddingTop: "9pt",
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      textAlign: "justify",
                    }}
                  >
                    Demikian Perjanjian ini dibuat pada hari dan tanggal yang
                    dinyatakan pada bagian awal Perjanjian. Naskah Perjanjian
                    ini dibuat dalam 3 (tiga) rangkap, masing-masing bermaterai
                    cukup dan memiliki kekuatan hukum yang sama.
                  </p>
                  <p
                    style={{
                      paddingTop: "3pt",
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Ditandatangani oleh Para Pihak:
                  </p>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    style={{
                      paddingLeft: "333pt",
                      textIndent: "-323pt",
                      textAlign: "left",
                    }}
                  >
                    PT BISI International, Tbk. Petani, PT Charoen Pokphand
                    Indonesia, Tbk.
                  </p>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    className="s7"
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "1pt",
                      textAlign: "left",
                    }}
                  >
                    {" "}
                  </p>
                  <h2
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "14pt",
                      textAlign: "left",
                    }}
                  >
                    Nama: ... Nama: ... Nama: ...
                  </h2>
                  <p
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "14pt",
                      textAlign: "left",
                    }}
                  >
                    Jabatan: ... NIK: ... Jabatan: ...
                  </p>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    style={{
                      paddingLeft: "10pt",
                      textIndent: "0pt",
                      textAlign: "center",
                    }}
                  >
                    Saksi – saksi :
                  </p>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Pihak BISI Petani Pihak CPI
                  </p>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    className="s7"
                    style={{
                      paddingLeft: "163pt",
                      textIndent: "0pt",
                      lineHeight: "1pt",
                      textAlign: "left",
                    }}
                  >
                    {" "}
                  </p>
                  <p
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "1pt",
                      textAlign: "left",
                    }}
                  />
                  <h2
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "14pt",
                      textAlign: "left",
                    }}
                  >
                    Nama: ... Nama: ... Nama: ...
                  </h2>
                  <p
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "14pt",
                      textAlign: "left",
                    }}
                  >
                    Jabatan: ... NIK: ... Jabatan: ...
                  </p>
                  <p
                    className="s8"
                    style={{
                      paddingTop: "3pt",
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    LAMPIRAN I
                  </p>
                  <p
                    className="s8"
                    style={{
                      paddingTop: "1pt",
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "113%",
                      textAlign: "left",
                    }}
                  >
                    Perjanjian Kerjasama Usaha Pertanian Dan Pengikatan Jual
                    Beli Jagung Nomor:{" "}
                    <span className="h1">…………………………………..</span>
                  </p>
                  <h3
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    JANGKA WAKTU KERJASAMA DAN PENGIKATAN JUAL BELI
                  </h3>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    className="s8"
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "114%",
                      textAlign: "left",
                    }}
                  >
                    Jangka Waktu Kerjasama adalah 1 (satu) periode/musim tanam
                    terhitung sejak penyerahan Saprotan untuk pertama kali,
                    yaitu pada tanggal <span className="s9">…………………. </span>
                    sampai dengan panen yang diestimasi pada tanggal
                  </p>
                  <p
                    className="s9"
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "13pt",
                      textAlign: "left",
                    }}
                  >
                    …<span className="s10"> </span>
                    <span style={{ color: "#000" }}>
                      (minimal 120 hari setelah tanggal tanam dimusim kemarau,
                      dan 135 hari setelah tanggal
                    </span>
                  </p>
                  <h3
                    style={{
                      paddingTop: "1pt",
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    tanam dimusim penghujan)
                  </h3>
                  <p
                    className="s8"
                    style={{
                      paddingTop: "3pt",
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "13pt",
                      textAlign: "left",
                    }}
                  >
                    LAMPIRAN II
                  </p>
                  <p
                    className="s8"
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "115%",
                      textAlign: "left",
                    }}
                  >
                    Perjanjian Kerjasama Usaha Pertanian Dan Pengikatan Jual
                    Beli Jagung Nomor:{" "}
                    <span className="s9">…………………………………...</span>
                  </p>
                  <h3
                    style={{
                      paddingTop: "10pt",
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    DATA LOKASI DAN LAHAN
                  </h3>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    style={{
                      paddingLeft: "13pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    <span />
                  </p>
                  <table border={0} cellSpacing={0} cellPadding={0}>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            width={603}
                            height={107}
                            src="data:image/jpg;base64,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"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p />
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    className="s8"
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "114%",
                      textAlign: "left",
                    }}
                  >
                    Data lokasi dan lahan terlampir di atas telah didata dengan
                    menggunakan aplikasi dan telah divalidasi dengan menggunakan
                    sistem <i>polygon geotagging</i>
                  </p>
                  <p
                    className="s8"
                    style={{
                      paddingTop: "3pt",
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    LAMPIRAN III
                  </p>
                  <p
                    className="s8"
                    style={{
                      paddingTop: "1pt",
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "114%",
                      textAlign: "left",
                    }}
                  >
                    Perjanjian Kerjasama Usaha Pertanian Dan Pengikatan Jual
                    Beli Jagung Nomor:{" "}
                    <span className="s9">………………………………….</span>
                  </p>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <h3
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    FORMAT SURAT PERNYATAAN
                  </h3>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    className="s12"
                    style={{
                      paddingLeft: "164pt",
                      textIndent: "33pt",
                      lineHeight: "113%",
                      textAlign: "left",
                    }}
                  >
                    Surat Pernyataan<span className="s13"> </span>
                    Kepemilikan/Penguasaan Lahan
                  </p>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    className="s14"
                    style={{
                      paddingTop: "2pt",
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      textAlign: "justify",
                    }}
                  >
                    Kami, yang bertanda tangan di bawah ini:
                  </p>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <table
                    style={{
                      borderCollapse: "collapse",
                      marginLeft: "12.509pt",
                    }}
                    cellSpacing={0}
                  >
                    <tbody>
                      <tr style={{ height: "38pt" }}>
                        <td
                          style={{
                            width: "17pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                          <p
                            className="s15"
                            style={{
                              paddingTop: "3pt",
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              textAlign: "center",
                            }}
                          >
                            No.
                          </p>
                        </td>
                        <td
                          style={{
                            width: "63pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                          <p
                            className="s15"
                            style={{
                              paddingTop: "3pt",
                              paddingLeft: "3pt",
                              textIndent: "0pt",
                              textAlign: "left",
                            }}
                          >
                            Nama Petani Pemilik Lahan
                          </p>
                        </td>
                        <td
                          style={{
                            width: "57pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                          <p
                            className="s15"
                            style={{
                              paddingTop: "3pt",
                              paddingLeft: "20pt",
                              paddingRight: "19pt",
                              textIndent: "0pt",
                              textAlign: "center",
                            }}
                          >
                            Dusun
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                          <p
                            className="s15"
                            style={{
                              paddingTop: "3pt",
                              paddingLeft: "22pt",
                              paddingRight: "20pt",
                              textIndent: "0pt",
                              textAlign: "center",
                            }}
                          >
                            Desa
                          </p>
                        </td>
                        <td
                          style={{
                            width: "51pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                          <p
                            className="s15"
                            style={{
                              paddingTop: "3pt",
                              paddingLeft: "14pt",
                              textIndent: "0pt",
                              textAlign: "left",
                            }}
                          >
                            Kecamatan
                          </p>
                        </td>
                        <td
                          style={{
                            width: "42pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                          <p
                            className="s15"
                            style={{
                              paddingTop: "3pt",
                              paddingRight: "9pt",
                              textIndent: "0pt",
                              textAlign: "right",
                            }}
                          >
                            Kabupaten
                          </p>
                        </td>
                        <td
                          style={{
                            width: "42pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                          <p
                            className="s15"
                            style={{
                              paddingTop: "3pt",
                              paddingLeft: "12pt",
                              textIndent: "0pt",
                              textAlign: "left",
                            }}
                          >
                            Prov insi
                          </p>
                        </td>
                        <td
                          style={{
                            width: "80pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                          <p
                            className="s15"
                            style={{
                              paddingTop: "3pt",
                              paddingLeft: "24pt",
                              textIndent: "0pt",
                              textAlign: "left",
                            }}
                          >
                            Koordinat Lahan
                          </p>
                        </td>
                        <td
                          style={{
                            width: "39pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                          <p
                            className="s15"
                            style={{
                              paddingLeft: "3pt",
                              paddingRight: "1pt",
                              textIndent: "0pt",
                              lineHeight: "133%",
                              textAlign: "center",
                            }}
                          >
                            Luas Lahan (Ha) Hasil Poly gon Geotagging
                          </p>
                        </td>
                        <td
                          style={{
                            width: "34pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                          <p
                            className="s15"
                            style={{
                              paddingLeft: "2pt",
                              paddingRight: "1pt",
                              textIndent: "0pt",
                              lineHeight: "133%",
                              textAlign: "center",
                            }}
                          >
                            Tanda Tangan Petani Pemilik Lahan
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "10pt" }}>
                        <td
                          style={{
                            width: "17pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s15"
                            style={{
                              paddingTop: "2pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              textAlign: "center",
                            }}
                          >
                            1
                          </p>
                        </td>
                        <td
                          style={{
                            width: "63pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Ali
                          </p>
                        </td>
                        <td
                          style={{
                            width: "57pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Suruh
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Suruh
                          </p>
                        </td>
                        <td
                          style={{
                            width: "51pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Suruh
                          </p>
                        </td>
                        <td
                          style={{
                            width: "42pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingRight: "8pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "right",
                            }}
                          >
                            Trenggalek
                          </p>
                        </td>
                        <td
                          style={{
                            width: "42pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Jawa Timur
                          </p>
                        </td>
                        <td
                          style={{
                            width: "80pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s17"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            -8,115644° 111,598045°
                          </p>
                        </td>
                        <td
                          style={{
                            width: "39pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "right",
                            }}
                          >
                            0,75
                          </p>
                        </td>
                        <td
                          style={{
                            width: "34pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "9pt" }}>
                        <td
                          style={{
                            width: "17pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s15"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              textAlign: "center",
                            }}
                          >
                            2
                          </p>
                        </td>
                        <td
                          style={{
                            width: "63pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Gani
                          </p>
                        </td>
                        <td
                          style={{
                            width: "57pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Suruh
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Suruh
                          </p>
                        </td>
                        <td
                          style={{
                            width: "51pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Suruh
                          </p>
                        </td>
                        <td
                          style={{
                            width: "42pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingRight: "8pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "right",
                            }}
                          >
                            Trenggalek
                          </p>
                        </td>
                        <td
                          style={{
                            width: "42pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Jawa Timur
                          </p>
                        </td>
                        <td
                          style={{
                            width: "80pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s17"
                            style={{
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            -8,115644° 111,598045°
                          </p>
                        </td>
                        <td
                          style={{
                            width: "39pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "right",
                            }}
                          >
                            0,25
                          </p>
                        </td>
                        <td
                          style={{
                            width: "34pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "10pt" }}>
                        <td
                          style={{
                            width: "17pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s15"
                            style={{
                              paddingTop: "2pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              textAlign: "center",
                            }}
                          >
                            3
                          </p>
                        </td>
                        <td
                          style={{
                            width: "63pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Samijan
                          </p>
                        </td>
                        <td
                          style={{
                            width: "57pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Suruh
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Suruh
                          </p>
                        </td>
                        <td
                          style={{
                            width: "51pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Suruh
                          </p>
                        </td>
                        <td
                          style={{
                            width: "42pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingRight: "8pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "right",
                            }}
                          >
                            Trenggalek
                          </p>
                        </td>
                        <td
                          style={{
                            width: "42pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Jawa Timur
                          </p>
                        </td>
                        <td
                          style={{
                            width: "80pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s17"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            -8,115644° 111,598045°
                          </p>
                        </td>
                        <td
                          style={{
                            width: "39pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "right",
                            }}
                          >
                            0,80
                          </p>
                        </td>
                        <td
                          style={{
                            width: "34pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "10pt" }}>
                        <td
                          style={{
                            width: "17pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s15"
                            style={{
                              paddingTop: "2pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              textAlign: "center",
                            }}
                          >
                            4
                          </p>
                        </td>
                        <td
                          style={{
                            width: "63pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Sadar
                          </p>
                        </td>
                        <td
                          style={{
                            width: "57pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Suruh
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Suruh
                          </p>
                        </td>
                        <td
                          style={{
                            width: "51pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Suruh
                          </p>
                        </td>
                        <td
                          style={{
                            width: "42pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingRight: "8pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "right",
                            }}
                          >
                            Trenggalek
                          </p>
                        </td>
                        <td
                          style={{
                            width: "42pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            Jawa Timur
                          </p>
                        </td>
                        <td
                          style={{
                            width: "80pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s17"
                            style={{
                              paddingTop: "1pt",
                              paddingLeft: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "left",
                            }}
                          >
                            -8,115644° 111,598045°
                          </p>
                        </td>
                        <td
                          style={{
                            width: "39pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s16"
                            style={{
                              paddingTop: "1pt",
                              textIndent: "0pt",
                              lineHeight: "7pt",
                              textAlign: "right",
                            }}
                          >
                            0,20
                          </p>
                        </td>
                        <td
                          style={{
                            width: "34pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p
                    className="s14"
                    style={{
                      paddingTop: "2pt",
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "113%",
                      textAlign: "justify",
                    }}
                  >
                    dengan ini menyatakan bahwa benar kami memiliki dan
                    menguasai lahan budidaya pertanian dengan alamat dan luasan
                    lahan seperti tersebut di atas.
                  </p>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    className="s14"
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "114%",
                      textAlign: "justify",
                    }}
                  >
                    Kami menyatakan dan menjamin bahwa tidak ada pihak lain yang
                    turut memiliki lahan, atau turut berhak atas penggunaan
                    lahan tersebut, dan bahwa lahan tidak dalam sengketa
                    kepemilikan atau pemanfaatannya, dan dapat digunakan dengan
                    aman untuk kerja samadengan BISI.
                  </p>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    className="s14"
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "113%",
                      textAlign: "justify",
                    }}
                  >
                    Demikian pernyataan ini kami buat dengan sebenarnya, tanpa
                    paksaan atau tekanan dari pihak manapun dan dalam bentuk
                    apapun.
                  </p>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    className="s18"
                    style={{
                      paddingLeft: "299pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    ………….. <span className="s14">, </span>………………
                  </p>
                  <p
                    className="s14"
                    style={{
                      paddingTop: "1pt",
                      paddingLeft: "299pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Yang membuat pernyataan,
                  </p>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    style={{
                      paddingLeft: "299pt",
                      textIndent: "0pt",
                      lineHeight: "1pt",
                      textAlign: "left",
                    }}
                  />
                  <p
                    className="s14"
                    style={{
                      paddingTop: "2pt",
                      paddingLeft: "299pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Nama : <span className="s18">……………………</span>
                  </p>
                  <p
                    className="s8"
                    style={{
                      paddingTop: "3pt",
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    LAMPIRAN IV
                  </p>
                  <p
                    className="s8"
                    style={{
                      paddingTop: "1pt",
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "114%",
                      textAlign: "left",
                    }}
                  >
                    Perjanjian Kerjasama Usaha Pertanian Dan Pengikatan Jual
                    Beli Jagung Nomor:{" "}
                    <span className="s9">…………………………………..</span>
                  </p>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <h3
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    DAFTAR SAPROTAN DAN HARGA JUAL
                  </h3>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <table
                    style={{
                      borderCollapse: "collapse",
                      marginLeft: "5.634pt",
                    }}
                    cellSpacing={0}
                  >
                    <tbody>
                      <tr style={{ height: "38pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                          <p
                            className="s19"
                            style={{
                              paddingLeft: "66pt",
                              textIndent: "0pt",
                              textAlign: "left",
                            }}
                          >
                            Jenis Produk Saprotan
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                          <p
                            className="s19"
                            style={{
                              paddingRight: "7pt",
                              textIndent: "0pt",
                              textAlign: "right",
                            }}
                          >
                            Kemasan
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s19"
                            style={{
                              paddingLeft: "8pt",
                              paddingRight: "8pt",
                              textIndent: "0pt",
                              lineHeight: "13pt",
                              textAlign: "center",
                            }}
                          >
                            Harga Jual/Kemasan Include PPN (Rp)
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s19"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            A. Benih Jagung Hibrida
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            BISI-2
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 kg
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            78.000,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            2
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            BISI-816
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 kg
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            53.000,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            3
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            BISI-18
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 kg
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            94.000,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            4
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            BISI-226
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 kg
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            48.000,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            5
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            BISI-228
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 kg
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            50.000,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            6
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            BISI-220
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 kg
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            63.000,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            7
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            BISI-99
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 kg
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            74.500,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            8
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            BISI-79
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 kg
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            63.000,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            9
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            BISI-77
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 kg
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            73.000,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            10
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            BISI-959
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 kg
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            73.000,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            11
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            BISI-321
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 kg
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            81.000,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            12
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            BISI-322
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 kg
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            83.000,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s19"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            B. PESTISIDA dan ZPT
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Amandy 865 SL
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 lt
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            126.100,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            2
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Brodirat 0.005 BB
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "15pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            100 gr
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            4.600,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            3
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Centro 75 WP
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "15pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            500 gr
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            89.300,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            4
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Copcide 77
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "15pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            400 gr
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            101.400,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            5
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Copcide 77
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 kg
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            242.600,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            6
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Crumble 100 EC
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "14pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            100 ml
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            93.700,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            7
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Crumble 100 EC
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "14pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            250 ml
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            231.500,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            8
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Demorf 60 WP
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            5 gr
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            5.000,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            9
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Demorf 60 WP
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "17pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            50 gr
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            38.600,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            10
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Divaxone 243 SL
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 lt
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            81.600,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            11
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Greta 500 EC
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "14pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            250 ml
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            27.600,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            12
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Greta 500 EC
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "14pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            500 ml
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            46.300,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            13
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Noxone 297 SL
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "14pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            500 ml
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            49.200,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            14
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Noxone 297 SL
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 lt
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            96.000,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            15
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Paket Anti Gulma
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            Paket kecil
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            93.700,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            16
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Paket Boom Jagung
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "16pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Paket
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            95.900,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            17
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Promaneb 80 WP
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 kg
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            81.600,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            18
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Promefon 250 EC
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "10pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            1.000 ml
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            165.400,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            19
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Rambo Gold 480 SL
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "14pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            500 ml
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            59.500,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            20
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Rambo Gold 480 SL
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 lt
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            112.800,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            21
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Randy 240/140 SL
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 lt
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            94.900,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            22
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Raydock 55 EC
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "14pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            100 ml
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            17.600,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            23
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Raydock 55 EC
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "14pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            250 ml
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            39.700,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            24
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Recor 300 EC
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "14pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            250 ml
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            112.500,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            25
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Recor 300 EC
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "14pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            500 ml
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            220.500,-
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    style={{
                      borderCollapse: "collapse",
                      marginLeft: "5.634pt",
                    }}
                    cellSpacing={0}
                  >
                    <tbody>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            26
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Recor Plus 300 EC
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            250 ml
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            145.500,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "38pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                          <p
                            className="s19"
                            style={{
                              paddingLeft: "66pt",
                              textIndent: "0pt",
                              textAlign: "left",
                            }}
                          >
                            Jenis Produk Saprotan
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                          <p
                            className="s19"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              textAlign: "center",
                            }}
                          >
                            Kemasan
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s19"
                            style={{
                              paddingLeft: "8pt",
                              paddingRight: "8pt",
                              textIndent: "0pt",
                              lineHeight: "13pt",
                              textAlign: "center",
                            }}
                          >
                            Harga Jual/Kemasan Inculde PPN (Rp)
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s19"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            B. PESTISIDA dan ZPT (lanjutan)
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p style={{ textIndent: "0pt", textAlign: "left" }}>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            27
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Roger 480 SL
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 lt
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            98.500,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            28
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Ruso 485 SL
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 lt
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            108.000,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            29
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Servoxon 276 SL
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 lt
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            90.100,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            30
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Trisula 450 SL
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            500 ml
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            33.100,-
                          </p>
                        </td>
                      </tr>
                      <tr style={{ height: "13pt" }}>
                        <td
                          style={{
                            width: "21pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "4pt",
                              paddingRight: "3pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            31
                          </p>
                        </td>
                        <td
                          style={{
                            width: "234pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "left",
                            }}
                          >
                            Ventura 3 Gr
                          </p>
                        </td>
                        <td
                          style={{
                            width: "56pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingLeft: "5pt",
                              paddingRight: "5pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "center",
                            }}
                          >
                            1 kg
                          </p>
                        </td>
                        <td
                          style={{
                            width: "91pt",
                            borderTopStyle: "solid",
                            borderTopWidth: "1pt",
                            borderLeftStyle: "solid",
                            borderLeftWidth: "1pt",
                            borderBottomStyle: "solid",
                            borderBottomWidth: "1pt",
                            borderRightStyle: "solid",
                            borderRightWidth: "1pt",
                          }}
                        >
                          <p
                            className="s20"
                            style={{
                              paddingRight: "4pt",
                              textIndent: "0pt",
                              lineHeight: "12pt",
                              textAlign: "right",
                            }}
                          >
                            18.700,-
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <p
                    className="s8"
                    style={{
                      paddingTop: "5pt",
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    Catatan: Jenis dan Harga Saprotan dapat berubah
                    sewaktu-waktu sesuai dengan kebutuhan.
                  </p>
                  <p
                    className="s8"
                    style={{
                      paddingTop: "3pt",
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    LAMPIRAN V
                  </p>
                  <p
                    className="s8"
                    style={{
                      paddingTop: "1pt",
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      lineHeight: "114%",
                      textAlign: "left",
                    }}
                  >
                    Perjanjian Kerjasama Usaha Pertanian Dan Pengikatan Jual
                    Beli Jagung Nomor:{" "}
                    <span className="s9">…………………………………….</span>
                  </p>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <h3
                    style={{
                      paddingLeft: "11pt",
                      textIndent: "0pt",
                      textAlign: "left",
                    }}
                  >
                    TEKNIK BUDIDAYA JAGUNG HIBRIDA BISI
                  </h3>
                  <p style={{ textIndent: "0pt", textAlign: "left" }}>
                    <br />
                  </p>
                  <ol id="l37">
                    <li data-list-text={1}>
                      <p
                        className="s14"
                        style={{
                          paddingLeft: "47pt",
                          textIndent: "-18pt",
                          textAlign: "left",
                        }}
                      >
                        Kode varietas : <span className="s18">………….</span>
                      </p>
                    </li>
                    <li data-list-text={2}>
                      <p
                        className="s14"
                        style={{
                          paddingTop: "1pt",
                          paddingLeft: "47pt",
                          textIndent: "-18pt",
                          textAlign: "left",
                        }}
                      >
                        Kebutuhan benih : <span className="s18">………</span>
                      </p>
                    </li>
                    <li data-list-text={3}>
                      <p
                        className="s14"
                        style={{
                          paddingLeft: "47pt",
                          textIndent: "-18pt",
                          textAlign: "left",
                        }}
                      >
                        Jarak Tanam : 75 x 25 cm dengan jumlah benih 1 (satu)
                        atau 2 (dua) biji per lubang
                      </p>
                    </li>
                    <li data-list-text={4}>
                      <p
                        className="s14"
                        style={{
                          paddingTop: "1pt",
                          paddingLeft: "47pt",
                          textIndent: "-18pt",
                          textAlign: "left",
                        }}
                      >
                        Formula pupuk dan waktu pemupukan :
                      </p>
                      <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                      </p>
                      <table
                        style={{
                          borderCollapse: "collapse",
                          marginLeft: "54.2527pt",
                        }}
                        cellSpacing={0}
                      >
                        <tbody>
                          <tr style={{ height: "16pt" }}>
                            <td
                              style={{
                                width: "67pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "4pt",
                                  textAlign: "center",
                                }}
                              >
                                Jenis Pupuk
                              </p>
                            </td>
                            <td
                              style={{
                                width: "106pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "9pt",
                                  paddingRight: "8pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                Bersamaan Tanam
                              </p>
                            </td>
                            <td
                              style={{
                                width: "106pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "9pt",
                                  paddingRight: "7pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                10 - 15 HST
                              </p>
                            </td>
                            <td
                              style={{
                                width: "106pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "26pt",
                                  paddingRight: "23pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                25 - 30 HST
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "15pt" }}>
                            <td
                              style={{
                                width: "67pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "4pt",
                                  paddingRight: "2pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                NPK
                              </p>
                            </td>
                            <td
                              style={{
                                width: "106pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s22"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "9pt",
                                  paddingRight: "7pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                200 kg/ha
                              </p>
                            </td>
                            <td
                              style={{
                                width: "106pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s22"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "1pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                -
                              </p>
                            </td>
                            <td
                              style={{
                                width: "106pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s22"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "1pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                -
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "15pt" }}>
                            <td
                              style={{
                                width: "67pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "4pt",
                                  paddingRight: "3pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                UREA
                              </p>
                            </td>
                            <td
                              style={{
                                width: "106pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s22"
                                style={{
                                  paddingTop: "1pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                -
                              </p>
                            </td>
                            <td
                              style={{
                                width: "106pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s22"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "9pt",
                                  paddingRight: "7pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                150 kg/ha
                              </p>
                            </td>
                            <td
                              style={{
                                width: "106pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s22"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "26pt",
                                  paddingRight: "23pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                150 kg/ha
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li data-list-text={5}>
                      <p
                        className="s14"
                        style={{
                          paddingTop: "1pt",
                          paddingLeft: "47pt",
                          textIndent: "-18pt",
                          textAlign: "left",
                        }}
                      >
                        Penyemprotan Paket Anti Gulma (PAG)
                      </p>
                      <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                      </p>
                      <table
                        style={{
                          borderCollapse: "collapse",
                          marginLeft: "54.2767pt",
                        }}
                        cellSpacing={0}
                      >
                        <tbody>
                          <tr style={{ height: "34pt" }}>
                            <td
                              style={{
                                width: "67pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "4pt",
                                  paddingLeft: "2pt",
                                  paddingRight: "2pt",
                                  textIndent: "6pt",
                                  lineHeight: "119%",
                                  textAlign: "left",
                                }}
                              >
                                Paket Anti Gulma (PAG)
                              </p>
                            </td>
                            <td
                              style={{
                                width: "107pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "4pt",
                                  paddingLeft: "27pt",
                                  paddingRight: "3pt",
                                  textIndent: "-14pt",
                                  lineHeight: "119%",
                                  textAlign: "left",
                                }}
                              >
                                Waktu Pemberian 15 - 18 HST
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "15pt" }}>
                            <td
                              style={{
                                width: "67pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s22"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "21pt",
                                  textIndent: "0pt",
                                  textAlign: "left",
                                }}
                              >
                                Dosis
                              </p>
                            </td>
                            <td
                              style={{
                                width: "107pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s22"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "22pt",
                                  textIndent: "0pt",
                                  textAlign: "left",
                                }}
                              >
                                7 paket kecil/ha
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li data-list-text={6}>
                      <p
                        className="s14"
                        style={{
                          paddingTop: "1pt",
                          paddingLeft: "47pt",
                          textIndent: "-18pt",
                          textAlign: "left",
                        }}
                      >
                        Pupuk daun (jika diperlukan)
                      </p>
                      <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                      </p>
                      <table
                        style={{
                          borderCollapse: "collapse",
                          marginLeft: "54.186pt",
                        }}
                        cellSpacing={0}
                      >
                        <tbody>
                          <tr style={{ height: "17pt" }}>
                            <td
                              style={{
                                width: "66pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                              rowSpan={2}
                            >
                              <p
                                style={{ textIndent: "0pt", textAlign: "left" }}
                              >
                                <br />
                              </p>
                              <p
                                className="s21"
                                style={{
                                  paddingLeft: "5pt",
                                  textIndent: "0pt",
                                  textAlign: "left",
                                }}
                              >
                                Pupuk Daun
                              </p>
                            </td>
                            <td
                              style={{
                                width: "210pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                              }}
                              colSpan={2}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "64pt",
                                  textIndent: "0pt",
                                  textAlign: "left",
                                }}
                              >
                                Waktu Pemberian
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "16pt" }}>
                            <td
                              style={{
                                width: "106pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "2pt",
                                  paddingLeft: "11pt",
                                  paddingRight: "9pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                15 HST
                              </p>
                            </td>
                            <td
                              style={{
                                width: "104pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                              }}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "2pt",
                                  paddingLeft: "11pt",
                                  paddingRight: "8pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                30 HST
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "15pt" }}>
                            <td
                              style={{
                                width: "66pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s22"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "21pt",
                                  textIndent: "0pt",
                                  textAlign: "left",
                                }}
                              >
                                Dosis
                              </p>
                            </td>
                            <td
                              style={{
                                width: "106pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s22"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "11pt",
                                  paddingRight: "10pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                40 gr per 20 liter air
                              </p>
                            </td>
                            <td
                              style={{
                                width: "104pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                              }}
                            >
                              <p
                                className="s22"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "11pt",
                                  paddingRight: "9pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                40 gr/20 liter air
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li data-list-text={7}>
                      <p
                        className="s14"
                        style={{
                          paddingTop: "1pt",
                          paddingLeft: "47pt",
                          textIndent: "-18pt",
                          textAlign: "left",
                        }}
                      >
                        Insektisida (jika diperlukan)
                      </p>
                      <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                      </p>
                      <table
                        style={{
                          borderCollapse: "collapse",
                          marginLeft: "54.2893pt",
                        }}
                        cellSpacing={0}
                      >
                        <tbody>
                          <tr style={{ height: "17pt" }}>
                            <td
                              style={{
                                width: "68pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                              rowSpan={2}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "3pt",
                                  paddingLeft: "3pt",
                                  textIndent: "6pt",
                                  lineHeight: "120%",
                                  textAlign: "left",
                                }}
                              >
                                Insektisida (Karbofuran)
                              </p>
                            </td>
                            <td
                              style={{
                                width: "213pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                              }}
                              colSpan={2}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "65pt",
                                  textIndent: "0pt",
                                  textAlign: "left",
                                }}
                              >
                                Waktu Pemberian
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "17pt" }}>
                            <td
                              style={{
                                width: "106pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "2pt",
                                  paddingLeft: "9pt",
                                  paddingRight: "8pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                Bersamaan Tanam
                              </p>
                            </td>
                            <td
                              style={{
                                width: "107pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                              }}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "2pt",
                                  paddingLeft: "9pt",
                                  paddingRight: "7pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                25 HST
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "15pt" }}>
                            <td
                              style={{
                                width: "68pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "21pt",
                                  textIndent: "0pt",
                                  textAlign: "left",
                                }}
                              >
                                Dosis
                              </p>
                            </td>
                            <td
                              style={{
                                width: "106pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s22"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "9pt",
                                  paddingRight: "7pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                35 kg/ha
                              </p>
                            </td>
                            <td
                              style={{
                                width: "107pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                              }}
                            >
                              <p
                                className="s22"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "9pt",
                                  paddingRight: "7pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                35 kg/ha
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li data-list-text={8}>
                      <p
                        className="s14"
                        style={{
                          paddingTop: "1pt",
                          paddingLeft: "47pt",
                          textIndent: "-18pt",
                          textAlign: "left",
                        }}
                      >
                        Penyemprotan Boom Jagung
                      </p>
                      <p style={{ textIndent: "0pt", textAlign: "left" }}>
                        <br />
                      </p>
                      <table
                        style={{
                          borderCollapse: "collapse",
                          marginLeft: "54.3017pt",
                        }}
                        cellSpacing={0}
                      >
                        <tbody>
                          <tr style={{ height: "34pt" }}>
                            <td
                              style={{
                                width: "68pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                style={{ textIndent: "0pt", textAlign: "left" }}
                              >
                                <br />
                              </p>
                              <p
                                className="s21"
                                style={{
                                  paddingLeft: "2pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                Boom Jagung
                              </p>
                            </td>
                            <td
                              style={{
                                width: "107pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s21"
                                style={{
                                  paddingTop: "4pt",
                                  paddingLeft: "37pt",
                                  paddingRight: "4pt",
                                  textIndent: "-24pt",
                                  lineHeight: "120%",
                                  textAlign: "left",
                                }}
                              >
                                Waktu Pemberian 45 HST
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "15pt" }}>
                            <td
                              style={{
                                width: "68pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s22"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "1pt",
                                  textIndent: "0pt",
                                  textAlign: "center",
                                }}
                              >
                                Dosis
                              </p>
                            </td>
                            <td
                              style={{
                                width: "107pt",
                                borderTopStyle: "solid",
                                borderTopWidth: "1pt",
                                borderLeftStyle: "solid",
                                borderLeftWidth: "1pt",
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1pt",
                                borderRightStyle: "solid",
                                borderRightWidth: "1pt",
                              }}
                            >
                              <p
                                className="s22"
                                style={{
                                  paddingTop: "1pt",
                                  paddingLeft: "22pt",
                                  textIndent: "0pt",
                                  textAlign: "left",
                                }}
                              >
                                7 paket kecil/ha
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li data-list-text={9}>
                      <p
                        className="s14"
                        style={{
                          paddingTop: "1pt",
                          paddingLeft: "47pt",
                          textIndent: "-18pt",
                          textAlign: "left",
                        }}
                      >
                        Jadwal kegiatan
                      </p>
                    </li>
                  </ol>
                </li>
              </ol>
            </ol>
            <p style={{ textIndent: "0pt", textAlign: "left" }}>
              <br />
            </p>
            <table
              style={{ borderCollapse: "collapse", marginLeft: "54.1717pt" }}
              cellSpacing={0}
            >
              <tbody>
                <tr style={{ height: "16pt" }}>
                  <td
                    style={{
                      width: "171pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s21"
                      style={{
                        paddingTop: "4pt",
                        paddingLeft: "49pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "left",
                      }}
                    >
                      Jadwal Kegiatan
                    </p>
                  </td>
                  <td
                    style={{
                      width: "105pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                    }}
                  >
                    <p
                      className="s21"
                      style={{
                        paddingTop: "4pt",
                        paddingLeft: "26pt",
                        paddingRight: "25pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "center",
                      }}
                    >
                      Waktu
                    </p>
                  </td>
                </tr>
                <tr style={{ height: "15pt" }}>
                  <td
                    style={{
                      width: "171pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s22"
                      style={{
                        paddingTop: "2pt",
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "left",
                      }}
                    >
                      Penanaman &amp; Pemupukan Dasar
                    </p>
                  </td>
                  <td
                    style={{
                      width: "105pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                    }}
                  >
                    <p
                      className="s22"
                      style={{
                        paddingTop: "2pt",
                        paddingLeft: "26pt",
                        paddingRight: "25pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "center",
                      }}
                    >
                      2 - 3 HST
                    </p>
                  </td>
                </tr>
                <tr style={{ height: "15pt" }}>
                  <td
                    style={{
                      width: "171pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s22"
                      style={{
                        paddingTop: "2pt",
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "left",
                      }}
                    >
                      Pemupukan I
                    </p>
                  </td>
                  <td
                    style={{
                      width: "105pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                    }}
                  >
                    <p
                      className="s22"
                      style={{
                        paddingTop: "2pt",
                        paddingLeft: "26pt",
                        paddingRight: "25pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "center",
                      }}
                    >
                      10 - 15 HST
                    </p>
                  </td>
                </tr>
                <tr style={{ height: "15pt" }}>
                  <td
                    style={{
                      width: "171pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s22"
                      style={{
                        paddingTop: "2pt",
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "left",
                      }}
                    >
                      Semprot PAG
                    </p>
                  </td>
                  <td
                    style={{
                      width: "105pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                    }}
                  >
                    <p
                      className="s22"
                      style={{
                        paddingTop: "2pt",
                        paddingLeft: "26pt",
                        paddingRight: "25pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "center",
                      }}
                    >
                      15 - 18 HST
                    </p>
                  </td>
                </tr>
                <tr style={{ height: "15pt" }}>
                  <td
                    style={{
                      width: "171pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s22"
                      style={{
                        paddingTop: "2pt",
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "left",
                      }}
                    >
                      Semprot Insektisida (jika diperlukan)
                    </p>
                  </td>
                  <td
                    style={{
                      width: "105pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                    }}
                  >
                    <p
                      className="s22"
                      style={{
                        paddingTop: "2pt",
                        paddingLeft: "26pt",
                        paddingRight: "25pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "center",
                      }}
                    >
                      20 HST
                    </p>
                  </td>
                </tr>
                <tr style={{ height: "15pt" }}>
                  <td
                    style={{
                      width: "171pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s22"
                      style={{
                        paddingTop: "2pt",
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "left",
                      }}
                    >
                      Pemupukan II
                    </p>
                  </td>
                  <td
                    style={{
                      width: "105pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                    }}
                  >
                    <p
                      className="s22"
                      style={{
                        paddingTop: "2pt",
                        paddingLeft: "26pt",
                        paddingRight: "25pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "center",
                      }}
                    >
                      25 - 30 HST
                    </p>
                  </td>
                </tr>
                <tr style={{ height: "15pt" }}>
                  <td
                    style={{
                      width: "171pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s22"
                      style={{
                        paddingTop: "2pt",
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "left",
                      }}
                    >
                      Semprot Boom Jagung
                    </p>
                  </td>
                  <td
                    style={{
                      width: "105pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                    }}
                  >
                    <p
                      className="s22"
                      style={{
                        paddingTop: "2pt",
                        paddingLeft: "26pt",
                        paddingRight: "25pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "center",
                      }}
                    >
                      55 HST
                    </p>
                  </td>
                </tr>
                <tr style={{ height: "15pt" }}>
                  <td
                    style={{
                      width: "171pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s22"
                      style={{
                        paddingTop: "2pt",
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "left",
                      }}
                    >
                      Panen
                    </p>
                  </td>
                  <td
                    style={{
                      width: "105pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                    }}
                  >
                    <p
                      className="s22"
                      style={{
                        paddingTop: "2pt",
                        paddingLeft: "26pt",
                        paddingRight: "25pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "center",
                      }}
                    >
                      120 HST
                    </p>
                  </td>
                </tr>
                <tr style={{ height: "16pt" }}>
                  <td
                    style={{
                      width: "171pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                      borderRightStyle: "solid",
                      borderRightWidth: "1pt",
                    }}
                  >
                    <p
                      className="s22"
                      style={{
                        paddingTop: "3pt",
                        paddingLeft: "5pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "left",
                      }}
                    >
                      Pasca Panen
                    </p>
                  </td>
                  <td
                    style={{
                      width: "105pt",
                      borderTopStyle: "solid",
                      borderTopWidth: "1pt",
                      borderLeftStyle: "solid",
                      borderLeftWidth: "1pt",
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1pt",
                    }}
                  >
                    <p
                      className="s22"
                      style={{
                        paddingTop: "3pt",
                        paddingLeft: "26pt",
                        paddingRight: "25pt",
                        textIndent: "0pt",
                        lineHeight: "11pt",
                        textAlign: "center",
                      }}
                    >
                      120 HST
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Akhir konten */}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-x-3 mr-48 pb-20">
        <a className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
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
    </div>
  );
}

export default A4kertas;
