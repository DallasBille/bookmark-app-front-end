import React, { Component } from "react";

class ArticleCard extends Component {
  state = {
    visible: false,
    summary: this.props.article.summary
  };

  showTextArea = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  summaryState = event => {
    this.setState({
      summary: event.target.value
    });
  };

  render() {
    console.log(this.props.article);
    console.log(this.state.summary);
    return (
      <div className="article-card">
        <a href={this.props.article.url} target="_blank">
          {this.props.article.title}{" "}
        </a>
        <p>Author: {this.props.article.author} </p>
        <p>Category: {this.props.article.category}</p>
        <p>Urgency: {this.props.article.urgency}</p>
        <p>Status: {this.props.article.read}</p>
        <p>
          <button
            onClick={() => {
              this.props.handleClick(this.props.article);
            }}
          >
            Mark {this.props.article.read === "Read" ? "Unread" : "Read"}
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              this.props.deleteArticle(this.props.article);
            }}
          >
            Delete
          </button>
        </p>
        <button onClick={this.showTextArea}>Notes</button>
        <form
          style={
            this.state.visible === false
              ? { display: "none" }
              : { display: "block" }
          }
        >
          <p>
            <textarea
              onChange={event => {
                this.summaryState(event);
              }}
              value={this.state.summary}
              placeholder="Add notes"
              rows="4"
              cols="30"
            ></textarea>
          </p>
          <button
            onClick={event => {
              this.props.updateNotes(
                event,
                this.state.summary,
                this.props.article
              );
              this.showTextArea();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
// defaultValue={this.props.article.summary
export default ArticleCard;
