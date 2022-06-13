import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDiscoverPosts, DISCOVER_TYPES } from '../redux/actions/discoverAction'
import LoadIcon from '../images/loading.gif'
import PostThumb from '../components/PostThumb'
import LoadMoreBtn from '../components/LoadMoreBtn'
import { getDataAPI} from '../utils/fetchData'

const Discover = () => {
    const { auth, discover } = useSelector(state => state)
    const dispatch = useDispatch()

    const [load, setLoad] = useState(false)

    useEffect(() => {
        if(!discover.firstLoad){
            dispatch(getDiscoverPosts(auth.token))
        }
    },[dispatch, auth.token, discover.firstLoad])

    const handleLoadMore = async () => {
        setLoad(true)
        const res = await getDataAPI(`post_discover?num=${discover.page * 9}`, auth.token)
        dispatch({type: DISCOVER_TYPES.UPDATE_POST, payload: res.data})
        setLoad(false)
    }

    return (
       
    )
}

export default Discover
