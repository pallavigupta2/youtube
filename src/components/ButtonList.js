import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttonList = ["All", "Gaming","Music","React","Cricket","Cooking","Skils","Live","Sports", "Series","Namaste Javascript","News","Motivation","Yoga","Funny Viedos"]
  return (
    <div>
      {buttonList.map((item,index)=><Button name={item} key={index}/>)}
      
    </div>
  )
}

export default ButtonList