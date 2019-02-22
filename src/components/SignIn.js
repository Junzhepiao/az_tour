
import React, { Component } from 'react';
import {Container,Form, FormGroup,Row, Col,Input, Label, Button} from 'reactstrap';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { Redirect } from 'react-router-dom';
class SignIn extends Component {
state = {
email:'',
password:'',
login: false
 }

handleSubmit =(e)=>{
e.preventDefault()
console.log('state', this.state)
console.log('users',this.props.users)

}
  render() {
    let theUser = this.props.users
    .map(user=>{
        return user.email == this.state.email && user.password == this.state.password && this.state.login ? <div><MyPosts key={user.id} user={user} /></div> : null
    }) 
    return (
        <div>
        <Container>
                  <h2 className = "text-center mt-5">Sign In</h2>
      <Row className="justify-content-md-center">
          <Col xs lg="6">
              <Form className="form" onSubmit={this.handleSubmit}>
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
                  <Label>Password</Label>
                  <Input
                      type="password"
                      name="password"
                      placeholder="********"
                      value={this.state.password} 
                      onChange={(e)=> this.setState({password: e.target.value})}
                  />
              </FormGroup>
              </Col>
              <div className="text-center"><Button type="submit" color="primary" onClick={()=> this.setState({login:!this.state.login})}>{this.state.login ? "Log Out" : "Log In"}</Button></div>
              </Form>
          </Col>
      </Row>
        </Container>
        <div>{theUser}</div>

        </div>
    )
}
}

  
const mapStateToProps = state =>({
    users: state.users
})

export default connect(mapStateToProps)(SignIn);


