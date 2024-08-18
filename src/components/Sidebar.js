import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const menuOpen = useSelector((store)=>store.menuSlice.isMenuOpen)
    const navigate = useNavigate()
    const handlewatch=()=>{
        navigate("/watch")
    }
    if(!menuOpen){return null}
  return (
    <div className='w-48 shadow-md p-6 px-14'>
        <div className='mb-5'>
        <h1 className='font-bold mb-3'>Recent</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/results?search_query=">SEARCH</Link></li>
            <button onClick={()=>handlewatch()}>watch</button>
            <li>Shorts</li>
            <li>Subscription</li>
        </ul>
        </div>
        <div className='mb-5'>
        <h1 className='font-bold mb-3'>You</h1>
        <ul>
            <li>History</li>
            <li>Playlist</li>
            <li>Watch Later</li>
            <li>Liked Vedios</li>
        </ul>
        </div>
        <div className='mb-5'>
        <h1 className='font-bold mb-3'>Explore</h1>
        <ul>
            <li>Music</li>
            <li>Gaming</li>
            <li>Trending</li>
            <li>News</li>
            <li>Live</li>
            <li>Podcast</li>
            <li>Films</li>
            <li>Courses</li>
        </ul>
        </div>
        <div className='mb-5'>
        <ul className='font-bold mb-3'>
            <li>YouTube Premium</li>
            <li>YouTube for Kids</li>
            <li>YouTube Musics</li>
            
        </ul>
        </div>
    </div>
  )
}

export default Sidebar