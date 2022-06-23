import React, { useState, useEffect } from 'react'


const CardFooter = ({post}) => {
    
    const [saveLoad, setSaveLoad] = useState(false)

   
    return (
        <div className="card_footer">
            

                
               
            </div>

            <div className="d-flex justify-content-between">
                <h6 style={{padding: '0 25px', cursor: 'pointer'}}>
                    {post.likes.length} likes
                </h6>
                
                <h6 style={{padding: '0 25px', cursor: 'pointer'}}>
                    {post.comments.length} comments
                </h6>
            </div>

            
        </div>
    )
}

export default CardFooter
