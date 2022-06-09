 import React from 'react'
 import CommentCard from './CommentCard'
 
 export const CommentDisplay = ({comment, post}) => {
   return (
     <div className='comment_display'>
        <CommentCard comment={comment} post={post}>

        </CommentCard>
     </div>
   )
 }

 export default CommentDisplay
 