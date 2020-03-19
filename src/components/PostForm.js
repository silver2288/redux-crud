import React from "react";
import { connect } from "react-redux";
import { fetchPostData } from "../actions/index";

class PostForm extends React.Component {
  handleSubmit = ev => {
    ev.preventDefault();
    const inputs = ev.currentTarget.elements;
    const title = inputs["title"].value;
    const message = inputs["message"].value;
    const data = {
      id: new Date().getUTCMilliseconds(),
      title,
      message,
      editing: false
    };
    this.props.dispatch({
      type: "ADD_POST",
      data
    });
  };

  handleClick = () => {
    this.props.dispatch(fetchPostData());
  };

  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Create Post</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            placeholder="Enter Post Title"
            name="title"
          />
          <br />
          <br />
          <textarea
            required
            name="message"
            rows="5"
            cols="28"
            placeholder="Enter Post"
          />
          <br />
          <br />
          <button>Post</button>
        </form>
        <div className="secondaryButtonContainer">
          <button className="randomButton" onClick={this.handleClick}>
            Add Random Post
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(PostForm);
