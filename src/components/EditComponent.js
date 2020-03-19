import React, { Component } from "react";
import { connect } from "react-redux";

class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const inputs = e.currentTarget.elements;
    const newTitle = inputs["title"].value;
    const newMessage = inputs["message"].value;
    const data = {
      newTitle,
      newMessage
    };
    this.props.dispatch({
      type: "UPDATE_POST",
      id: this.props.post.id,
      data: data
    });
  };
  render() {
    return (
      <div key={this.props.post.id} className="post">
        <form className="form" onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            name="title"
            defaultValue={this.props.post.title}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            name="message"
            defaultValue={this.props.post.message}
            cols="28"
            placeholder="Enter Post"
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);
