import { useState } from "react";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://example.com/api/login", // Ganti dengan URL endpoint login Anda
        {
          email: email,
          password: password,
        }
      );

      // Jika login berhasil, simpan token atau data user di local storage
      localStorage.setItem("token", response.data.token);
      // Redirect ke halaman dashboard atau halaman lain yang diinginkan
      window.location.href = "/dashboardv2";
    } catch (error) {
      // Tangani error jika login gagal
      setError("Email atau password salah");
    }
  };

  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <div className="justify-between h-20 w-20">
          <img src="/images/logoFAMS.png" alt="Placeholder Image" />
        </div>
        <section>
          <h3 className="font-bold text-2xl text-customOrange">
            Selamat Datang di FAMS
          </h3>
          <p className="text-gray-600 pt-2">Masukkan akun!</p>
        </section>
        <section className="mt-5">
          <form className="flex flex-col" onSubmit={handleLogin}>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                Email
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-customOrange transition duration-500 px-3 pb-3"
                required
              />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-customOrange transition duration-500 px-3 pb-3"
                required
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              className="bg-customOrange hover:bg-customOrange text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Signin;

// const Signin = () => {
//   const handleLogin = (event) => {
//     event.preventDefault();
//     localStorage.setItem("email", event.target.email.value);
//     localStorage.setItem("password", event.target.password.value);
//     console.log("login");
//     window.location.href = "/dashboardv2";
//   };
//   return (
//     <div className="bg-white h-screen flex justify-center items-center">
//       <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
//         <div className="justify-between h-20 w-20">
//           <img src="/images/logoFAMS.png" alt="Placeholder Image" />
//         </div>
//         <section>
//           <h3 className="font-bold text-2xl text-customOrange">
//             Selamat Datang di FAMS
//           </h3>
//           <p className="text-gray-600 pt-2">Masukkan akun!</p>
//         </section>
//         <section className="mt-5">
//           <form className="flex flex-col" method="POST" onSubmit={handleLogin}>
//             <div className="mb-6 pt-3 rounded bg-gray-200">
//               <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="example@gmail.com"
//                 id="email"
//                 className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-customOrange transition duration-500 px-3 pb-3"
//               />
//             </div>
//             <div className="mb-6 pt-3 rounded bg-gray-200">
//               <label
//                 className="block text-gray-700 text-sm font-bold mb-2 ml-3"
//                 htmlFor="password"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="********"
//                 className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-customOrange transition duration-500 px-3 pb-3"
//               />
//             </div>
//             <button
//               className="bg-customOrange hover:bg-customOrange text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
//               type="submit"
//             >
//               Sign In
//             </button>
//           </form>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Signin;
