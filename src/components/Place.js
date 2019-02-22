import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';
import{connect} from 'react-redux';
import {addToCart} from '../actions/places'
import {bindActionCreators} from 'redux';
import { render } from 'react-dom'
 
class Place extends Component {
  render() {
    return (
    <div className="w-100 p-3">
        <Card className="border-0 ">
            <CardBody >
                <CardTitle><h4> {this.props.place.name.toUpperCase()}</h4></CardTitle>
                <CardImg top width="58" src={this.props.place.img} alt="Card image cap"/>
                {/* <div className="d-flex justify-content-center p-1"><ReactStars count={5} size={20} color2={'#ffd700'} value= {this.props.camera.rating}/></div> */}
        <Button type="button" className="btn-block" color="primary" onClick = {()=>this.props.addToCart(this.props.place.id)}>Add to Trip</Button>
        </CardBody>
        </Card>
    </div>
    )}
  
}
const mapDispatchToProps = dispatch => bindActionCreators({
    addToCart
}, dispatch)
export default connect(null,mapDispatchToProps)(Place);
