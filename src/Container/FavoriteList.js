import React, { Component } from 'react';
import ArticleCard from '../Component/ArticleCard'

class FavoriteList extends Component {

    unreadArticleCards = () => {
        return this.props.unreadArticles.map(article => {
            return (<ArticleCard handleClick={this.props.handleMoveToRead} key={article.id} article={article} />)
        })
    }

    render(){
        return(
            <div className="unread-list">
                <h2>Unread</h2>
                {this.unreadArticleCards()}

            </div>
        )
   }
}
export default FavoriteList
