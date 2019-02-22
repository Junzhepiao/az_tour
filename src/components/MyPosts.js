import React, { Component }  from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col
} from 'reactstrap'
// import { connect } from 'react-redux';
// import {voteUp} from '../actions/posts'
// import {voteDown} from '../actions/posts'
// import {bindActionCreators} from 'redux';

class MyPosts extends Component {
  render() {
      console.log('myposts', this.props)
  return (
    <div className="m-5">
        asdfasf
    </div >
  )
}
}

// function mapStateToProps(state, props){
//   return {
//     comments: state.comments.filter(comment => props.post.id == comment.post_id)
//   }
// }

// const mapDispatchToProps = dispatch => bindActionCreators({
//   voteUp,
//   voteDown
// }, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(Post)
export default MyPosts