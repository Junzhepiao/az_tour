import React, {Component} from 'react'
import {connect} from 'react-redux';
import Story from './Story'
import {Container, Row, Col } from 'reactstrap';

class StoryList extends Component {
    render(){
    function sortVotes(a,b){
        return b.votes - a.votes
    }

    function sortByTitle(a,b) {
        return a.title.toUpperCase() < b.title.toUpperCase() ? -1 :1
    }

    let thePosts = this.props.posts
    .sort((this.props.sortPosts == 'title' ? sortByTitle : sortVotes))
    .map(post=> <Story key={post.id} post={post}/>)
    return (
        <div>
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="10">
                    {thePosts}
                </Col>
            </Row>
        </Container>;
</div>
    )
    }
}


function mapStateToProps(state){
    return{
      posts: state.posts,
      sortPosts: state.sortPosts
    }
  }
export default connect(mapStateToProps,null)(StoryList)
  