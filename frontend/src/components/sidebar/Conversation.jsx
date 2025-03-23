import React from 'react'
import user_account from './user_account.png'

const Conversation = () => {
  return (<>
   <div className="flex ">
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar avatar-online">
          <div className="w-8 rounded-full">
            <img src={user_account} alt="user avatar" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center gap-3 justify-between">
        <p className="font-bold text-gray-200">Charitha</p>
        <span className="text-xl">🎃</span>
      </div>
    </div>

    <div className='divider my-0 py-0 h-1'></div>
  </>)
}

export default Conversation




// import React from 'react'
// import user_account from './user_account.png'
// import halloween from './halloween.png'
// const Conversation = () => {
//   return (<>
//    <div className="flex ">
//       <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-6 rounded-full">
//             <img src={user_account} alt="user avatar" />
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-1 items-center gap-3 justify-between">
//         <p className="font-bold text-gray-200">Charitha</p>
//         <span className="text-xl">🎃</span>
//       </div>
//     </div>

//     <div className='divider my-0 py-0 h-1'></div>
//   </>)
// }

// export default Conversation