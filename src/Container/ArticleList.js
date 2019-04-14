
import React, { Component } from 'react';
import ArticleCard from '../Component/ArticleCard'

class ArticleList extends Component {


     readArticleCards = () => {
        return this.props.readArticles.map(article => {
            return <ArticleCard handleClick={this.props.handleMoveToUnread} key={article.id} article={article}/>
        })
    }

  render(){
    return(
        <div className="unread-list">
            <h2>Read</h2>
            {this.readArticleCards()}
        </div>
    )
  }
}

export default ArticleList
