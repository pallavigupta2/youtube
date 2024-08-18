import React from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {
  return (
    <div>
        {
            comments.map((comment,index)=>(
            <div key={index}>
                <Comment data={comment}/>
                <div className='ml-5 pl-0 border border-l-blue-100'>
                    <CommentsList comments={comment.replies}/>
                </div>
            </div>
            )
            )
        }
    </div>
  )
}

export default CommentsList