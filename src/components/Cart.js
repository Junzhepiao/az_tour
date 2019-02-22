import React, { Component } from 'react'
import {connect} from 'react-redux'
import CartItem from './CartItem';

class Cart extends Component {
    render() {
        let placesInCart =this.props.places.filter(places => places.inCart).map(place=><CartItem key={place.id} place={place}/>)
        let numberOfPlaces=placesInCart.length
       return (
        <div>
    <div><h3>You have {numberOfPlaces} {numberOfPlaces == 0 || numberOfPlaces == 1 ? "place" : "places"} want to visit</h3></div>
      <div>{placesInCart}</div>
      </div>
      )
    }
  }
  const mapStateToProps = state =>({
      places:state.places
  })
  export default connect(mapStateToProps)(Cart);
  