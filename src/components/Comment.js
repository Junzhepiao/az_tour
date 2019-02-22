import React, {Component} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input
  } from 'reactstrap'
  import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addComment} from '../actions/comments'
import Moment from 'react-moment'

class Comment extends Component {
    state = {
        newComment: ''
    }
    handleSubmit = (e) =>{
         //e.preventDefault()
        this.props.addComment({
            post_id:this.props.postId,
            content:this.state.newComment
        })
    }
        render(){
            let list = this.props.comments.map(comment =>{
                return (
                    <div key={comment.id}><Moment fromNow>{this.props.comments.created_at}</Moment>: {comment.content}</div>
                )
            })
        return (
          <div>{list}
                <Form  onSubmit={this.handleSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input name="newComment" value={this.state.newComment} onChange={(e)=> this.setState({newComment: e.target.value})} placeholder="Enter a comment here" />
                </FormGroup>
                <Button type="submit" color="primary">Submit</Button>
              </Form>
          </div>
        )
    }
}



function mapDispatchToProps(dispatch){
    return {
      addComment: bindActionCreators(addComment,dispatch)
    }
  }
export default connect(null, mapDispatchToProps)(Comment)


