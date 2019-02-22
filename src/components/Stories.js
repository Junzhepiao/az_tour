import React, { Component } from 'react';
import NavBar from './NavBar';
import StoryList from './StoryList';
import {updateSortType} from '../actions/sortPosts';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Carousel from 'react-bootstrap/Carousel'
import { Jumbotron,Container,Form, FormGroup,Row, Col} from 'reactstrap';

class Stories extends Component {

  render() {
    let imgUrl = 'https://images.unsplash.com/photo-1527824404775-dce343118ebc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'; 
    return (
        <div>
        <div><NavBar/></div>
        <Jumbotron className = 'Component-Bg' 
     style = {{ backgroundImage:  'url(' + imgUrl + ')', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}>
        <Container fluid>
          <h1 className="display-3 text-center text-light">Travel Stories</h1>
          <p className="lead text-center text-light">Are you ready for your story?</p>
        </Container>
      </Jumbotron>


      <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="2">                    
                    <Form inline className="text-center">
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <label>Sort by: </label>
                        <select className="form-inline" onChange={(e)=> this.props.updateSortType(e.target.value)}>
                            <option value='votes'>Votes</option>
                            <option value='title'>Title</option>
                        </select>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>

      
        <div><StoryList/></div>

        </div>
    );
  }
}

function mapDispatchToProps(dispatch){
    return {
      updateSortType:bindActionCreators(updateSortType,dispatch)
  
    }
  }
  
  export default connect (null, mapDispatchToProps)(Stories)