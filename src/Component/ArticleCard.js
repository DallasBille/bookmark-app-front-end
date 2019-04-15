import React, { Component } from 'react';

class ArticleCard extends Component {

        state = {
            visible: false,
            summary: ''
        }

        showNotes = () => {
            this.setState({
                visible: !this.state.visible
            })
        }




        summaryState = (event) => {
            this.setState({
                summary: event.target.value
            })
        }

    render(){
    return(
        <div className="article-card">
          <a href={this.props.article.url} target="_blank">{this.props.article.title} </a>
          <p>Author: {this.props.article.author} </p>
          <p>Category: {this.props.article.category}</p>
          <p>Urgency: {this.props.article.urgency}</p>
          <p>Status: {this.props.article.read}</p>
          <p><button onClick={()=>{this.props.handleClick(this.props.article)}}>Read/Unread</button></p>
          <p><button onClick={()=>{this.props.deleteArticle(this.props.article)}}>Delete</button></p>
          <button onClick={this.showNotes}>Add Notes</button>
          <form onChange={(event)=>{this.summaryState(event)}} style={this.state.visible === false ? {display: "none"} : {display: "block"}}>
          <p><textarea defaultValue={this.props.article.summary} placeholder="Add notes" rows="4" cols="30"></textarea></p>
          <button onClick={(event)=>{this.props.updateNotes(event,this.state.summary,this.props.article)}}>Submit</button>
          </form>
        </div>
    )
    }
}
export default ArticleCard
