import axios from 'axios'

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILD = 'GET_POSTS_FAILD'

export const ADD_POST_PENDING = 'ADD_POST_PENDING'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'

export const VOTE_UP = 'VOTE_UP'
export const VOTE_DOWN = 'VOTE_DOWN'


export const getPosts = () => {
    return dispatch => {
        axios.get('http://localhost:8000/posts')
            .then(response => dispatch({
                type:GET_POSTS_SUCCESS,
                payload: response.data
            }))
            .catch(err => dispatch({
                type:GET_POSTS_FAILD,
                payload: err
            }))
    }
}

export const addPost =(newPost) =>{
    return dispatch =>{
        axios.post('http://localhost:8000/posts', newPost)
        .then(response=> {
            console.log('response',response)
            dispatch({
            type:ADD_POST_SUCCESS,
            payload: response.data
        })})
        .catch(err=>dispatch({
            type:ADD_POST_PENDING,
            payload:err
        }))
    }
}

export const voteUp = (id)=>{
    return dispatch =>{
        dispatch({
            type: VOTE_UP,
            payload: id      
        })
    }
}

export const voteDown = (id)=>{
    return dispatch =>{
        dispatch({
            type: VOTE_DOWN,
            payload: id      
        })
    }
}