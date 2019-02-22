import React, { Component } from 'react';
import {getUsers} from './actions/users';
import {getPlaces} from './actions/places';
import {getPosts} from './actions/posts';
import {getComments} from './actions/comments';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './components/Main';
import Stories from './components/Stories';
import MyStory from './components/MyStory';
import NotFound from './components/NotFound';

export class App extends Component {
  componentDidMount(){
    this.props.getUsers()
    this.props.getPlaces()
    this.props.getPosts()
    this.props.getComments()

  }
  render() {
    return (
      <div>
      <Router>
          <div> 
              <Switch>
                  <Route exact path='/' component={Main} /> 
                  <Route exact path='/stories' component={Stories} />
                  <Route exact path='/mystory' component={MyStory} />
                  <Route component={NotFound}/>
              </Switch>
          </div>
      </Router>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    getUsers: bindActionCreators(getUsers, dispatch),
    getPlaces: bindActionCreators(getPlaces, dispatch),
    getPosts: bindActionCreators(getPosts, dispatch),
    getComments: bindActionCreators(getComments, dispatch)

  }
}
export default connect(null,mapDispatchToProps)(App);


