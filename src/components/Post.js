import { Component } from "react";
import { connect } from "react-redux";
class Post extends Component {

    render() {
        const post = this.props.post ? (
            <div className="">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
            </div>
        ) : (
            <div className="center">Loading post..</div>
        )

        return (
            <div className="container">
                { post }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    let id = ownProps;
 
    return {
        post: state.post.find(
            post => post.id === id
        )
    }
}
export default connect(mapStateToProps)(Post);