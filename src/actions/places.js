import axios from 'axios'

export const GET_PLACES_SUCCESS = 'GET_PLACES_SUCCESS'
export const GET_PLACES_FAILD = 'GET_PLACES_FAILD'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const getPlaces = () => {
    return dispatch => {
        axios.get('http://localhost:8000/places')
            .then(response => dispatch({
                type:GET_PLACES_SUCCESS,
                payload: response.data
            }))
            .catch(err => dispatch({
                type:GET_PLACES_FAILD,
                payload: err
            }))
    }
}

export const addToCart = (id)=>{
    return dispatch =>{
        dispatch({
            type: ADD_TO_CART,
            payload: id      
        })
    }
}

export const removeFromCart = (id)=>{
    return dispatch =>{
        dispatch({
            type: REMOVE_FROM_CART,
            payload: id      
        })
    }
}