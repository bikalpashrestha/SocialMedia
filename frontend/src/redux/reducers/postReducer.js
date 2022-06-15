import { POST_TYPES } from '../actions/postAction'
import { EditData, DeleteData } from '../actions/globalTypes'

const initialState = {
    loading: false,
    posts: [],
    comments:[],
    result: 0,
    page: 2
}



export default postReducer