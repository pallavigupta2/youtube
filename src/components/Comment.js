import React from 'react'

const Comment = ({data}) => {
    const {name,text,replies} = data;
  return (
    <div className='flex bg-gray-100 rounded-md p-1 m-2'>
        <img
          className="h-8"
          alt="userimg"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        />
        <div className='px-2'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment