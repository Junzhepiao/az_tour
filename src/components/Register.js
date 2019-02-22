import React, { Component } from 'react';
import {Container,Form, FormGroup,Row, Col,Input, Label, Button} from 'reactstrap';
import {addUser} from '../actions/users'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Register extends Component {
state = {
email:'',
password:'',
first_name:'',
last_name:''
 }

handleSubmit =(e)=>{
e.preventDefault()
console.log('state', this.state)
this.props.addUser(this.state) 
}
  render() {
    return (
            <Container >
            <h2 className = "text-center mt-5">Register</h2>
            <Row className="justify-content-md-center">
                <Col xs lg="6">

                    <Form className="form"  onSubmit={this.handleSubmit}>
                    <Col>
                        <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="myemail@email.com"
                            value={this.state.email} 
                            onChange={(e)=> this.setState({email: e.target.value})}
                        />
                     </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label >Password</Label>
                        <Input
                            type="password"
                            name="password"
                            placeholder="********"
                            value={this.state.password} 
                            onChange={(e)=> this.setState({password: e.target.value})}
                        />
                    </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                        <Label>First Name</Label>
                        <Input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            value={this.state.first_name} 
                            onChange={(e)=> this.setState({first_name: e.target.value})}
                        />
                     </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                        <Label>Last Name</Label>
                        <Input
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            value={this.state.last_name} 
                            onChange={(e)=> this.setState({last_name: e.target.value})}
                        />
                     </FormGroup>
                    </Col>
                    <div className="text-center"><Button type="submit" color="primary">Submit</Button></div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
}
function mapDispatchToProps(dispatch){
    return {
      addUser: bindActionCreators(addUser,dispatch)
    }
}
  
export default connect (null, mapDispatchToProps)(Register)
  