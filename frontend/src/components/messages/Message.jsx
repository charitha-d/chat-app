import React from 'react'
import user_account from '../sidebar/user_account.png';
const Message = () => {
  return (
    <div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-8 rounded-full">
      <img 
        alt="Tailwind CSS chat bubble component"
        src={user_account} />
    </div>
  </div>
  <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is upp</div>
  <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:46</div>

  </div>
  )
}

export default Message