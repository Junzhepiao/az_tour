import {GET_COMMENTS_PENDING,
    GET_COMMENTS_SUCCESS,
    ADD_COMMENT_PENDING,
    ADD_COMMENT_SUCCESS
} from '../actions/comments';


export default ( state = [], action)=>{
    switch (action.type) {
        case GET_COMMENTS_PENDING:
            return state
        case GET_COMMENTS_SUCCESS:
            return [...action.payload.data]
        case ADD_COMMENT_PENDING:
            return state
        case ADD_COMMENT_SUCCESS:
            return [...action.payload]
        default:
            return state
    }
}