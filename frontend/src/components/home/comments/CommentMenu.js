import React from 'react'


const CommentMenu = ({post, comment, setOnEdit}) => {

    const { auth, socket } = useSelector(state => state)
    

    const MenuItem = () => {
        return(
            <>
                <div className="dropdown-item" onClick={() => setOnEdit(true)}>
                    
            </>
        )
    }


export default CommentMenu
