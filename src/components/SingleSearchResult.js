import React from 'react'

const SingleSearchResult = ({info}) => {
    const {  snippet,id } = info;
  const { channelTitle, title, thumbnails,description } = snippet;
  return (
    <div>
         <div className='flex p-10'>
         <iframe src={"https://www.youtube.com/embed/"+id.videoId+"?si=54owB4owKs2tkEyH"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='rounded-lg mr-10 w-[500px] h-[250px]'></iframe>
        {/* <img
          className="rounded-lg w-[500px] h-[250px] mr-10"
          alt="thumbnail"
          src={thumbnails.medium.url}
        /> */}
        <div>
          <ul>
            <li className="font-bold py-2">{title}</li>
            <li>{channelTitle}</li>
            <li>{description}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SingleSearchResult