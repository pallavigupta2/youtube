import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-gray-200 m-2 px-2 py-1 cursor-pointer rounded-lg'>{props.name}</button>
  )
}

export default Button