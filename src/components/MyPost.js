import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody,CardTitle,CardSubtitle,Button ,Row, Col} from 'reactstrap';
import{connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { render } from 'react-dom'
import Moment from 'react-moment'
import {deletePost} from '../actions/posts'

class MyPost extends Component {
    onDeleteClick =(e)=>{
        this.props.deletePost(this.props.post.id)
      }
  render() {
      console.log("is it work?", this.props)
    return (
        <div className="m-5">
        <CardTitle className="text-center"> <h3>{this.props.post.title}</h3></CardTitle>
    <Row className="mt-3">
      <Col>
        <Card>
          <CardImg
            top
            width="100%"
            src={this.props.post.img}
            alt="Card image cap"
          />
          <CardBody className="text-center">
          <CardText className="m-3 text-center">
             {this.props.post.body}
            </CardText>
            <CardTitle >Votes: {this.props.post.votes}</CardTitle>
              <div className="text-center">Posted: <Moment fromNow>{this.props.post.created_at}</Moment></div>
              {/* <hr />
              <Comment comments={this.props.comments} postId={this.props.post.id}/> */}
          </CardBody>
          <div className="text-center"><Button type="submit" color="primary" onClick={() => this.onDeleteClick(this.props.post.id)}>Delete post</Button></div>
        </Card>
      </Col>
    </Row>
    </div >
    )}
  
}


function mapDispatchToProps(dispatch){
    return {
        deletePost: bindActionCreators(deletePost,dispatch)
    }
  }
  
  export default connect (null, mapDispatchToProps)(MyPost)
  