import React, { Component } from 'react';
import NavBar from './NavBar';
import Form from './Form';
import Carousel from 'react-bootstrap/Carousel'
import { Jumbotron, Container } from 'reactstrap';
import PlacesList from './PlacesList';

class Main extends Component {

  render() {
    let imgUrl = 'https://images.unsplash.com/photo-1531693747362-a68f18db368b?ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80'; 

    return (
        <div>
        <div><NavBar/></div>
        <Jumbotron className = 'Component-Bg' 
     style = {{ backgroundImage:  'url(' + imgUrl + ')', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.9
              }}>
        <Container fluid>
          <h1 className="display-3 text-center text-light">Welcome to AZ TOUR</h1>
          <p className="lead text-center text-light">Reserve your trip with one of our local tour guide</p>
        </Container>
      </Jumbotron>

        {/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2208&q=80"
      alt="First slide"

    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1548815056-de4dab9bfd9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2141&q=80"
      alt="Third slide"

    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1531693747362-a68f18db368b?ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80"
      alt="Third slide"

    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>; */}

<div className="row p-5">
          <div className="col text-center text-lg ">
          <div> <PlacesList/></div>
          </div>
          <div className="col text-center text-lg">
          <div className="sticky-top"> <Form/></div>
          </div>
        </div>
        </div>
    );
  }
}

export default Main;

