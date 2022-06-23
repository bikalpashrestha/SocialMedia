import React from 'react'
import Avatar from '../../Avatar'


const CardHeader = ({ post }) => {
    const { auth, socket } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleEditPost = () => {
        dispatch({ type: GLOBALTYPES.STATUS, payload: { ...post, onEdit: true } })
    }
    const handleDeletePost = () => {
        if (window.confirm("Are you sure want to delete this post?")) {
            dispatch(deletePost({ post, auth, socket }))
            return history.push("/")
        }
    }
    return (
        <div className='card_header'>
            <div className="d-flex">
                <Avatar src={post.user.avatar} size="big-avatar" />
                <div className="card_name">
                    <h6 className="m-0">
                        <Link to={`/profile/${post.user._id}`} className="text-dark">
                            {post.user.username}
                        </Link>
                    </h6>
        </div>
    )
}

export default CardHeader
