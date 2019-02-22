import React, { Component } from 'react';
import NavBar from './NavBar';
import { Jumbotron,Container,Button} from 'reactstrap';
import Register from './Register';
import SignIn from './SignIn';

class MyStory extends Component {
    state = {
        showAddForm: false
      }

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
          <h1 className="display-3 text-center text-light">My Story</h1>
          <p className="lead text-center text-light">Log in and tell us about your memory</p>
          <div className="text-center"><Button size="lg" color="primary" onClick={()=> this.setState({showAddForm:!this.state.showAddForm})}>Register</Button></div>
        </Container>
      </Jumbotron>

        {this.state.showAddForm&& <div><Register/></div>}
        <SignIn/>
        </div>
    );
  }
}

export default MyStory
  