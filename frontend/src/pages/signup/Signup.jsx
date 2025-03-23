import GenderCheckBox from "./GenderCheckBox";

const Signup = () => {
  return (
  <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
  <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
    <h1 className="text-3xl font-semibold text-center text-gray-300">
      SignUp
      <span className="text-blue-500"> ChatApp</span>
    </h1>
    <form>
        <div>
            <label className="label p-2 mt-4">
                <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input type='text' placeholder="  Charitha Doasala" className="w-full input input-bordered h-10 bg-gray-800 text-white placeholder-gray-400"/>
        </div>
        <div>
            <label className="label p-2">
                <span className="text-base label-text text-white">UserName</span>
            </label>
            <input type='text' placeholder="  Charitha" className="w-full input input-bordered h-10 bg-gray-800 text-white placeholder-gray-400"/>
        </div>
        <div>
            <label className="label p-2">
                <span className="text-base label-text text-white">Password</span>
            </label>
            <input type='password' placeholder="  Enter Password" className="w-full input input-bordered h-10 bg-gray-800 text-white placeholder-gray-400"/>
        </div>
        <div>
            <label className="label p-2">
                <span className="text-base label-text text-white">Confirm Password</span>
            </label>
            <input type='password' placeholder="  Enter Password" className="w-full input input-bordered h-10 bg-gray-800 text-white placeholder-gray-400"/>
        </div>


        <GenderCheckBox/>


        <a className="text-sm hover:underline hover:text-blue-600 nt-4 inline-block mt-4 text-white" href='#'>Already have an account?</a>
         
         <div><button className="btn btn-block btn-sm mt-2 border border-slate-700 bg-gray-800 text-white placeholder-gray-400">Sign Up</button></div>
    </form>
    </div>
    </div>
  )
  
}

export default Signup;






// const Signup = () => {
//     return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//     <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//       <h1 className="text-3xl font-semibold text-center text-gray-300">
//         SignUp
//         <span className="text-blue-500"> ChatApp</span>
//       </h1>
//       <form>
//           <div>
//               <label className="label p-2 mt-4">
//                   <span className="text-base label-text text-white">Full Name</span>
//               </label>
//               <input type='text' placeholder="  Charitha Doasala" className="w-full input input-bordered h-10 bg-gray-800 text-white placeholder-gray-400"/>
//           </div>
//           <div>
//               <label className="label p-2">
//                   <span className="text-base label-text text-white">UserName</span>
//               </label>
//               <input type='text' placeholder="  Charitha" className="w-full input input-bordered h-10 bg-gray-800 text-white placeholder-gray-400"/>
//           </div>
//           <div>
//               <label className="label p-2">
//                   <span className="text-base label-text text-white">Password</span>
//               </label>
//               <input type='password' placeholder="  Enter Password" className="w-full input input-bordered h-10 bg-gray-800 text-white placeholder-gray-400"/>
//           </div>
//           <div>
//               <label className="label p-2">
//                   <span className="text-base label-text text-white">Confirm Password</span>
//               </label>
//               <input type='password' placeholder="  Enter Password" className="w-full input input-bordered h-10 bg-gray-800 text-white placeholder-gray-400"/>
//           </div>
  
  
//           <GenderCheckBox/>
  
  
//           <a className="text-sm hover:underline hover:text-blue-600 nt-4 inline-block mt-4 text-white" href='#'>Already have an account?</a>
           
//            <div><button className="btn btn-block btn-sm mt-2 border border-slate-700 bg-gray-800 text-white placeholder-gray-400">Sign Up</button></div>
//       </form>
//       </div>
//       </div>
//     )
    
//   }
  



  