import { MESS_TYPES } from '../actions/messageAction'
import { EditData, DeleteData } from '../actions/globalTypes'

const initialState = {
    users: [],
    resultUsers: 0,
    data: [],
    firstLoad: false
}

const messageReducer = (state = initialState, action) => {
    switch (action.type){
        case MESS_TYPES.ADD_USER:
            if(state.users.every(item => item._id !== action.payload._id)){
                return {
                    ...state,
                    users: [action.payload, ...state.users]
                };
            }
            return state;
        case MESS_TYPES.ADD_MESSAGE:
            return {
                ...state,
                data: state.data.map(item => 
                    item._id === action.payload.recipient || item._id === action.payload.sender 
                    ? {
                        ...item,
                        messages: [...item.messages, action.payload],
                        result: item.result + 1
                    }
                    : item
                ),
                users: state.users.map(user => 
                    user._id === action.payload.recipient || user._id === action.payload.sender
                    ? {
                        ...user, 
                        text: action.payload.text, 
                        media: action.payload.media,
                        call: action.payload.call
                    }
                    : user
                )
            };
     

        case MESS_TYPES.CHECK_ONLINE_OFFLINE:
            return {
                ...state,
                users: state.users.map(user => 
                    action.payload.includes(user._id)
                    ? {...user, online: true}
                    : {...user, online: false}
                )
            };
        default:
            return state;
    }
}

export default messageReducer;