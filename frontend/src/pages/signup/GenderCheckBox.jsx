
const GenderCheckBox = () => {
  return (
    <div className="flex mt-4">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text text-white">Male</span>
                <input type="checkbox" className="checkbox !border-black border-2 bg-white/20 backdrop-blur-sm" />
            </label>
        </div>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text text-white">Female</span>
                <input type='checkbox' className="checkbox !border-black border-2 bg-white/20 backdrop-blur-sm"/>
            </label>
        </div>
    </div>


  )
}

export default GenderCheckBox







// const GenderCheckBox = () => {
//     return (
//       <div className="flex mt-4">
//           <div className="form-control">
//               <label className={`label gap-2 cursor-pointer`}>
//                   <span className="label-text text-white">Male</span>
//                   <input type="checkbox" className="checkbox !border-black border-2 bg-white/20 backdrop-blur-sm" />
//               </label>
//           </div>
//           <div className="form-control">
//               <label className={`label gap-2 cursor-pointer`}>
//                   <span className="label-text text-white">Female</span>
//                   <input type='checkbox' className="checkbox !border-black border-2 bg-white/20 backdrop-blur-sm"/>
//               </label>
//           </div>
//       </div>
//     )
//   }
  
//   export default GenderCheckBox