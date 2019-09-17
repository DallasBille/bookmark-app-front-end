import React, { Component } from "react";

export default class Form extends Component {
  state = {
    category: "Other",
    url: "",
    author: "",
    title: "",
    urgency: "Medium",
    read: "Unread",
    summary: ""
  };

  clearFormState = () => {
    this.setState({
      category: "",
      url: "",
      author: "",
      title: "",
      urgency: "Medium",
      read: "Unread",
      summary: ""
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitAndClearForm = e => {
    this.props.submitNewArticle(e, this.state);
    this.clearFormState();
  };

  render() {
    return (
      <div className="form">
        <h3>Add Article</h3>
        <form onSubmit={this.submitAndClearForm} id="new-article-form">
          <p>
            <input
              onChange={this.handleChange}
              value={this.state.url}
              type="text"
              name="url"
              placeholder="Article Link"
            />
          </p>
          <p>
            <input
              onChange={this.handleChange}
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Article Title"
            />
          </p>
          <p>
            <input
              onChange={this.handleChange}
              value={this.state.author}
              type="text"
              name="author"
              placeholder="Author"
            />
          </p>
          <p>
            <label>Category</label>
            <select
              value={this.state.category}
              onChange={this.handleChange}
              name="category"
            >
              <option>Tech</option>
              <option>Lifestyle</option>
              <option>Health</option>
              <option>Philosophy</option>
              <option>Travel</option>
              <option>Politics</option>
              <option>Other</option>
            </select>
          </p>
          <p>
            <label>Urgency</label>
            <select
              value={this.state.urgency}
              onChange={this.handleChange}
              type="urgency"
              name="urgency"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </p>
          <p>
            <label>Read?</label>
            <select
              value={this.state.read}
              onChange={this.handleChange}
              name="read"
              type="read"
            >
              <option>Unread</option>
              <option>Read</option>
            </select>
          </p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
