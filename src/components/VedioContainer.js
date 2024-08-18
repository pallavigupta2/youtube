import React, { useEffect, useState } from 'react'
import { YOUTUBE_VEDIO_API } from '../api/constant'
import VedioCard from './VedioCard'
import { Link } from 'react-router-dom'

const VedioContainer = () => {
  const [vedioData,setVedioData]=useState([])
  //console.log("api",YOUTUBE_VEDIO_API)
  const getVedios=async ()=>{
const data = await fetch(YOUTUBE_VEDIO_API);
const json = await data.json()
console.log("data",json.items)
setVedioData(json.items)
  }
  useEffect(()=>{
getVedios()
  },[])
  return (
    <div className='flex flex-wrap'>
      {
        vedioData?.map((vedio)=><Link to={"/watch?v="+vedio.id} key={vedio.id}><VedioCard key={vedio.id} info={vedio}/></Link>)
      }
      
    </div>
  )
}

export default VedioContainer