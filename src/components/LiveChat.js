import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { randomNameGenerator, randomTextGenerator } from '../utils/helper'

const LiveChat = () => {
    const dispatch = useDispatch()
    const [liveChat,setLiveChat] = useState()
    const chatData = useSelector(store=>store.chat.messages)
    useEffect(()=>{
        const chat = setInterval(()=>{
            // Call API 
            console.log("api polling")
            dispatch(addMessage({
                name:randomNameGenerator(),
                comment:randomTextGenerator(20) + "🙌",
            }))
        },10000)

        return (()=>clearInterval(chat))
    },[])
  return (
    <>
    <div className='bg-gray-100 rounded-lg border border-gray-300 p-1 ml-2 h-[500px] overflow-y-scroll'>
        {
            chatData.map((c)=><ChatMessage name={c.name} comment={c.comment}/>)
        }
        
    </div>
    <form className='border border-black-200 ml-2 rounded-lg p-2' onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addMessage({
            name:"Pallavi Gupta",
            comment:liveChat,
        }))
        setLiveChat("")
    }}>
        <input className='border border-blue-100 w-96' value={liveChat} onChange={(e)=>setLiveChat(e.target.value)}/>
        <button className='bg-red-500 ml-6 px-2 py-1 rounded-lg'>Send</button>
    </form>
    </>
  )
}

export default LiveChat