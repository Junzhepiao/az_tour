import axios from 'axios'

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILD = 'GET_USERS_FAILD'

export const ADD_USER_PENDING = 'ADD_USER_PENDING'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'

export const getUsers = () => {
    return dispatch => {
        axios.get('http://localhost:8000/users')
            .then(response => dispatch({
                type:GET_USERS_SUCCESS,
                payload: response.data
            }))
            .catch(err => dispatch({
                type:GET_USERS_FAILD,
                payload: err
            }))
    }
}

export const addUser =(newUser) =>{
    return dispatch =>{
        axios.post('http://localhost:8000/user', newUser)
        .then(response=> {
            console.log('response',response)
            dispatch({
            type:ADD_USER_SUCCESS,
            payload: response.data
        })})
        .catch(err=>dispatch({
            type:ADD_USER_PENDING,
            payload:err
        }))
    }
}