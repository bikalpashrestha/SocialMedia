import React from 'react'
const LikeButton=({isLike})=>{
    return(
        <>
        {
            isLike
            ?<i className="far fa=heart"/>
            :<i className="far fa-heart"/>
        }
        </>
    )

    
}
export default LikeButton