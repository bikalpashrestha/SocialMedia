import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'

const Register = () => {
  const {} = useSelector(state => state)
  const history = useHistory()

  useEffect(() => {
    if(auth.token) history.push("/")
  }, [auth.token, history])

  
  return (
    <div>R</div>
  )
}

export default Register