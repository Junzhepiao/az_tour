import {GET_PLACES_SUCCESS,
    GET_PLACES_FAILD,
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../actions/places';


export default ( state = [], action)=>{
    switch (action.type) {
        case GET_PLACES_FAILD:
            return state
        case GET_PLACES_SUCCESS:
            return [...action.payload]
        case ADD_TO_CART:
            return state.map(place=>{
                if(place.id===action.payload){
                    place.inCart = true
                }
                return place
            })
        case REMOVE_FROM_CART:
            return state.map(place=>{
                if(place.id===action.payload){
                    place.inCart = false
                }
                return place
            })
        default:
            return state
    }
}