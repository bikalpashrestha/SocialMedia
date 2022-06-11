import React, { useState, useEffect } from 'react'
import PostThumb from '../PostThumb'
import { PROFILE_TYPES } from '../../redux/actions/profileAction'

const Posts = ({auth, id, dispatch, profile}) => {
    const [posts, setPosts] = useState([])
   

    useEffect(() => {
        profile.posts.forEach(data => {
            if(data._id === id){
                setPosts(data.posts)
                setResult(data.result)
                setPage(data.page)
            }
        })
    },[profile.posts, id])

   
    return (
        <div>
            <PostThumb posts={posts} result={result} />

            {
                load && <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
            }

            
            <LoadMoreBtn result={result} page={page}
            load={load} handleLoadMore={handleLoadMore} />
            
        </div>
    )
}

export default Posts
