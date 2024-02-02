function Login() {
  return (
    <div>
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <div className="justify-between h-20 w-20">
        <img
          src="/images/logoFAMS.png"
          alt="Placeholder Image"
        />
        </div>
        <section>
          <h3 className="font-bold text-2xl text-customOrange">Welcome to FAMS</h3>
          <p className="text-gray-600 pt-2">Sign in to your account.</p>
        </section>
        <section className="mt-10">
          <form className="flex flex-col" method="POST" action="#">
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-customOrange transition duration-500 px-3 pb-3"
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
                id="password"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-customOrange transition duration-500 px-3 pb-3"
              />
            </div>
            {/* <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-customOrange hover:text-customOrange hover:underline mb-6"
              >
                Forgot your password?
              </a>
            </div> */}
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
}

export default Login;

// function Login() {
//   return (
//     <div className="bg-gray-100 flex justify-center items-center h-screen">
//       {/* Left: Image */}
      // <div className="w-1/2 h-screen hidden lg:block">
        // <img
        //   src="/images/FAMS.png"
        //   alt="Placeholder Image"
        //   className="object-cover w-full h-full"
        // />
      //   {/* <img
      //     className="object-cover w-full h-full"
      //     src="/images/BISI_International.png"
      //   /> */}
      // </div>
//       {/* Right: Login Form */}
//       <div className="lg:p-20 md:p-52 sm:20 p-8 w-full lg:w-1/2">
//         <h1 className="text-2xl font-semibold text-customOrange mb-4">LOGIN FAMS</h1>
//         <form action="#" method="POST">
//           {/* Username Input */}
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-gray-600">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
//               autoComplete="off"
//             />
//           </div>
//           {/* Password Input */}
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-600">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
//               autoComplete="off"
//             />
//           </div>
//           {/* Remember Me Checkbox */}
//           <div className="mb-4 flex items-center">
//             <input
//               type="checkbox"
//               id="remember"
//               name="remember"
//               className="text-blue-500"
//             />
//             <label htmlFor="remember" className="text-gray-600 ml-2">
//               Remember Me
//             </label>
//           </div>
//           {/* Login Button */}
//           <button
//             type="submit"
//             className="bg-customOrange hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
