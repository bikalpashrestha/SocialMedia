import React, { useState, useEffect } from 'react'
import Avatar from '../../Avatar'


const CommentCard = ({children, comment, post, commentId}) => {
    const { auth, theme } = useSelector(state => state)
    

    return (
        <div className="comment_card mt-2" style={styleCard}>
            <Link to={`/profile/${comment.user._id}`} className="d-flex text-dark">
                <Avatar src={comment.user.avatar} size="small-avatar" />
                <h6 className="mx-1">{comment.user.username}</h6>
            </Link>

            
                    <div style={{cursor: 'pointer'}}>
                        <small className="text-muted mr-3">
                            {moment(comment.createdAt).fromNow()}
                        </small>

                        <small className="font-weight-bold mr-3">
                            {comment.likes.length} likes
                        </small>

                        {
                            onEdit
                            ? <>
                                <small className="font-weight-bold mr-3"
                                onClick={handleUpdate}>
                                    update
                                </small>
                                <small className="font-weight-bold mr-3"
                                onClick={() => setOnEdit(false)}>
                                    cancel
                                </small>
                            </>

                            : <small className="font-weight-bold mr-3"
                            onClick={handleReply}>
                                {onReply ? 'cancel' :'reply'}
                            </small>
                        }
                        
                    </div>
                    
                </div>


               
    )
}

export default CommentCard
