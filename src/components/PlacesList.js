import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form, FormGroup, Label, Input} from 'reactstrap';
import Place from './Place'

class PlacesList extends Component {
    state = {
        filterPhrase:"",
        filterType:"name"
    };
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
  render() {
     let listOfPlaces=this.props.places.filter(place => place[this.state.filterType].toString().toLowerCase().includes(this.state.filterPhrase))
        .map(place=><Place key={place.id} place={place} />)
    return (
        <div>
        <FormGroup>    
        <Label for="exampleSelectMulti"></Label>           
          <Input type="string" name="filterPhrase" onChange={this.handleChange} value={this.state.filterPhrase.toLowerCase()} placeholder='Search...'/>
        {/* <Label for="exampleSelectMulti">Search by...</Label>
        <Input type="select" name="filterType" onChange={this.handleChange} value={this.state.filterType}>
          <option value="name">Name</option>
          <option value="rating">Rating</option>
        </Input> */}
      </FormGroup>
    {listOfPlaces}</div>
        )

  }
}

const mapStateToProps = state =>({
    places: state.places
})

export default connect(mapStateToProps)(PlacesList);
