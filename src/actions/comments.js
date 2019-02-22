import axios from 'axios'

export const GET_COMMENTS_PENDING = 'GET_COMMENTS_PENDING'
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'

export const ADD_COMMENT_PENDING = "ADD_COMMENT_PENDING"
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS"

export const getComments =() =>{
    return dispatch =>{
        axios.get('http://localhost:8000/comments')
        .then(response=> dispatch({
            type:GET_COMMENTS_SUCCESS,
            payload: response
        }))
        .catch(err=>dispatch({
            type:GET_COMMENTS_PENDING,
            payload:err
        }))
    }
}

export const addComment =(comment) =>{
    return dispatch =>{
        axios.post('http://localhost:8000/comment',comment)
        .then(response=> dispatch({
            type:ADD_COMMENT_SUCCESS,
            payload: response.data
        }))
        .catch(err=>dispatch({
            type:ADD_COMMENT_PENDING,
            payload:err
        }))
    }
}
