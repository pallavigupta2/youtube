import React from 'react'

const ChatMessage = ({name,comment}) => {
  return (
    <div className='flex p-2'>
        <img
          className="h-8"
          alt="userimg"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        />
        <div className='px-2'>
            <span className='font-bold px-2'>{name}</span>
            <span>{comment}</span>
        </div>
    </div>
  )
}

export default ChatMessage