import React, {Component} from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button,Container } from 'reactstrap'
import {addPost} from '../actions/posts'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AddPostForm extends Component {
  state={
    title:'',
    img:'',
    body:'',
    user_id:this.props.userID,
    votes: 0
  }

  handleSubmit =(e)=>{
    e.preventDefault()
    this.props.addPost(this.state)

  }
  render() {
      console.log("userId", this.props.userID)
    return (

        <Container>
            <h2 className = "text-center">Post a new story</h2>
            <Row className="justify-content-md-center">
                <Col xs lg="10">
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                    <Label for="title-field">Title</Label>
                    <Input type="text" name="title" value={this.state.title} onChange={(e)=> this.setState({title: e.target.value})} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="body-field">Image</Label>
                    <Input type="text" name="img"  value={this.state.img} onChange={(e)=> this.setState({img: e.target.value})} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="author-field">Body</Label>
                    <Input type="text" name="body" value={this.state.body} onChange={(e)=> this.setState({body: e.target.value})}/>
                    </FormGroup>
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
    addPost: bindActionCreators(addPost,dispatch)
  }
}

export default connect (null, mapDispatchToProps)(AddPostForm)
