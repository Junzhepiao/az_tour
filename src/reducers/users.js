import {GET_USERS_FAILD,
    GET_USERS_SUCCESS,
    ADD_USER_PENDING,
    ADD_USER_SUCCESS
} from '../actions/users';


export default ( state = [], action)=>{
    switch (action.type) {
        case GET_USERS_FAILD:
            return state
        case GET_USERS_SUCCESS:
            return [...action.payload]
        case ADD_USER_PENDING:
            return state
        case ADD_USER_SUCCESS:
            return [...action.payload]
        default:
            return state
    }
}