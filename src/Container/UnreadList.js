import React, { Component } from 'react';
import ArticleCard from '../Component/ArticleCard'

const UnreadList = (props) => {

    const unreadArticleCards = () => {
        return props.unreadArticles.map(article => {
            return (<ArticleCard updateNotes={props.updateNotes} deleteArticle={props.deleteArticle} handleClick={props.handleMoveToRead} key={article.id} article={article} />)
        })
    }
    
        return(
            <div className="list">
                <h2>Unread</h2>
                {unreadArticleCards()}

            </div>
        )

}
export default UnreadList
