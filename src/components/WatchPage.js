import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/HambergerMenuSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
    const [searchParam] = useSearchParams()
    console.log('searchParam',searchParam.get("v"))
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='m-2 w-full'>
      <div className='flex w-full'>
        <div>
      <iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+searchParam.get("v")+"?si=Gx_6Xtai1BEvJbK0"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className='w-full'>
      <LiveChat/>
      </div>
      </div>
      <CommentsContainer/>
    </div>
  )
}

export default WatchPage;