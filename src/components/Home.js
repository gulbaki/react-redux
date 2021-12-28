import React, { Component } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import Kodsozluk from '../download.jpeg'


class Home extends Component {
  render(){

   
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Kodsozluk} alt="A Pokeball" />
            <div className="card-content">
              <Link to={'/post/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)