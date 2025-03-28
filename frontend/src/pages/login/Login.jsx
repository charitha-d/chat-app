import React from 'react';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="  Enter username"
              className='w-full input input-bordered h-10 bg-gray-800 text-white placeholder-gray-400'
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="  Enter password"
              className='w-full input input-bordered h-10 bg-gray-800 text-white placeholder-gray-400' 
            />
          </div>
          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            {"Don't"} have an account?
          </a>
          <div>
            <button className="btn btn-block mt-2 bg-gray-800 text-white hover:bg-gray-700">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;









// import React from 'react';

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen w-full">
//       <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="  Enter username"
//               className='w-full input input-bordered h-10 bg-gray-800 text-white placeholder-gray-400'
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="  Enter password"
//               className='w-full input input-bordered h-10 bg-gray-800 text-white placeholder-gray-400' 
//             />
//           </div>
//           <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//             {"Don't"} have an account?
//           </a>
//           <div>
//             <button className="btn btn-block mt-2 bg-gray-800 text-white hover:bg-gray-700">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
