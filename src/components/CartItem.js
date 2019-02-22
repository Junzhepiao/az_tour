import React, { Component } from 'react';
import {Card, CardImg, CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';
import{connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeFromCart} from '../actions/places'

class CartItem extends Component {
  render() {
    return (

<ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center">
  {this.props.place.name.toUpperCase()}
    <span className="badge badge-primary badge-pill"><Button color="primary" className="btn btn-sm" onClick = {()=>this.props.removeFromCart(this.props.place.id)}>Remove</Button>
</span>
  </li>
</ul>

    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    removeFromCart
}, dispatch)
export default connect(null,mapDispatchToProps)(CartItem);


