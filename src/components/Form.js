import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Cart from './Cart';

class Checkout extends Component {
    handleSubmit = (e) =>{
        // e.preventDefault()

    }
  render() {
    return (
      <div className="App">
      <Cart/>
      <Form className="p-5" onSubmit={this.handleSubmit}>
      <div><h2>Trip Information</h2></div>
        <Row form>
        <Col md={6}>
            <FormGroup>
              <Label className="text-dark" for="From">From</Label>
              <Input type="integer" name="From" id="From" placeholder="ex: 01/01/2019" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label className="text-dark" for="To">To</Label>
              <Input type="integer" name="To" id="To" placeholder="ex: 01/07/2019" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label className="text-dark" for="name">Full Name</Label>
              <Input type="text" name="name" id="name" placeholder="ex: Jun Park" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label className="text-dark" for="Member">Member</Label>
              <Input type="integer" name="Member" id="Member" placeholder="ex: 3" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label className="text-dark" for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="ex: jun@gmail.com" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label className="text-dark" for="examplePhoneNumber">Phone Number</Label>
              <Input className="h-25" type="integer" name="phoneNumber" id="examplePhoneNumber" placeholder="ex: 123-456-7890 " />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label className="text-dark" for="exampleComment">Comment</Label>
          <Input type="textarea" name="comment" id="exampleComment" placeholder="Do you have any other places want to visit? Please leave a comment and let me know."/>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label className="text-dark" for="exampleCheck" check>Tell me new updates! </Label>
        </FormGroup>

        <Button type="submit" className="mt-3"color="primary" onClick={() => { alert('Thank you! We will contact you as soon as possible.') }}>Contact Tour Guide</Button>
      </Form>
      </div>
    );
  }
}

export default Checkout;
