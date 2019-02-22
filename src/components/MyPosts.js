import React, { Component }  from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from 'reactstrap'
import { connect } from 'react-redux';
import MyPost from './MyPost';

// import {bindActionCreators} from 'redux';

class MyPosts extends Component {
  render() {
      console.log('allposts', this.props.posts)
      console.log('user in myposts', this.props.user)
      let myID = this.props.user.id
      let myPosts=this.props.posts.filter(post => post.user_id.toString().includes(myID.toString()))
      .map(post=><MyPost key={post.id} post={post} />)

  return (
    <Container>
    <Row className="justify-content-md-center">
        <Col xs lg="10">
        {myPosts}
        </Col>
    </Row>
</Container>
  )
}
}

// function mapStateToProps(state, props){
//   return {
//     posts: state.posts.filter(post => props.post.user_id == this.props.user)
//   }
// }

// const mapDispatchToProps = dispatch => bindActionCreators({
//   voteUp,
//   voteDown
// }, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(Post)
function mapStateToProps(state,props){
    return{
      posts: state.posts,
      sortPosts: state.sortPosts
    }
  }
export default connect(mapStateToProps,null)(MyPosts)
