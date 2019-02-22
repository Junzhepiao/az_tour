import {GET_POSTS_SUCCESS,
    GET_POSTS_FAILD,
    ADD_POST_SUCCESS,
    ADD_POST_PENDING, 
    VOTE_UP,VOTE_DOWN,
    DELETE_POST_PENDING,
    DELETE_POST_SUCCESS} from '../actions/posts';


export default ( state = [], action)=>{
    switch (action.type) {
        case GET_POSTS_FAILD:
            return state
        case GET_POSTS_SUCCESS:
            return [...action.payload]
        case ADD_POST_PENDING:
            return state
        case ADD_POST_SUCCESS:
            return [...action.payload]
        case DELETE_POST_PENDING:
            return state
        case DELETE_POST_SUCCESS:
            return [...action.payload]
        case VOTE_UP:
            return state.map(post=>{
                if(post.id==action.payload){
                    post.votes = post.votes + 1
                }
                return post
            })
        case VOTE_DOWN:
            return state.map(post=>{
                if(post.id==action.payload){
                    post.votes = post.votes-1
                }
                return post
            })
        default:
            return state
    }
}