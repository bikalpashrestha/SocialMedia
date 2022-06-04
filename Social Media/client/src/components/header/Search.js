import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDataAPI } from '../../utils/fetchData'
import {GLOBALTYPES} from '../../redux/actions/globalTypes'
import LoadIcon from '../../images/loading.gif'
import UserCard from '../UserCard'
 
