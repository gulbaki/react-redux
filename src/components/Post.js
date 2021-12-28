import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from '../withRouter'

class Post extends Component {
    constructor(props){
        super(props);
     
        this.state = {
          resdate : new Date().toISOString().substr(0,10),
          props: props
        }
      }

  render() {
  
   
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {

  let id = ownProps.params.post_id;
 
  
  return {
    post: state.posts.find((post) => post.id === parseInt(id)),
  };
};

export default withRouter(connect(mapStateToProps)(Post));
