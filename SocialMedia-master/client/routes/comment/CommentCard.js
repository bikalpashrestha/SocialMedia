import Avatar from '../../Avatar'
import {Link}from'react-router-dom'
import moment from'moment'

import LikeButton from '../..LikeButton'
import{userSelector,useDispatch}from'react-redux'
import CommentMenu from'./CommentMenu'
import { useEffect, useState } from 'react'

const CommentCard=({comment,post})=>{
    const{auth}=userSelector(state=>state)
    const[content,setContent]=useState('')
    const[readMore,setReaderMore]=useState(false)
    const[isLike,setIsLike]=userState(false)
    const[onEdit,setOnEdit]=userState(false)
    useEffect(()=>{
        setContent(comment.content)
    },{comment})

    const handleLike=()=>{}

    const handleUnLike=()=>{}
    const styleCard={
        
    }
}