import React, { Component }  from 'react'
import Comment from './Comment'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col
} from 'reactstrap'
import { connect } from 'react-redux';
import Moment from 'react-moment'
import {voteUp} from '../actions/posts'
import {voteDown} from '../actions/posts'
import {bindActionCreators} from 'redux';

class Post extends Component {
  render() {
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
            <CardTitle ><button onClick = {()=>this.props.voteUp(this.props.post.id)}>Up</button> {this.props.post.votes} <button disabled={this.props.post.votes == 0 ? true : false} onClick = {()=>this.props.voteDown(this.props.post.id)}>Down</button></CardTitle>
              <Moment fromNow>{this.props.post.created_at}</Moment>|  {this.props.comments.length} {this.props.comments.length === 1 || this.props.comments.length === 0 ? "Comment" : "Comments"}
              <hr />
              <Comment comments={this.props.comments} postId={this.props.post.id}/>
          </CardBody>
        </Card>
      </Col>
    </Row>
    </div >
  )
}
}

function mapStateToProps(state, props){
  return {
    comments: state.comments.filter(comment => props.post.id == comment.post_id)
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  voteUp,
  voteDown
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)
