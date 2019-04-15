
import React from 'react';
import ArticleCard from '../Component/ArticleCard'

const ReadList = (props) => {


     const readArticleCards = () => {
        return props.readArticles.map(article => {
            return <ArticleCard updateNotes={props.updateNotes} deleteArticle={props.deleteArticle} handleClick={props.handleMoveToUnread} key={article.id} article={article}/>
        })
    }


    return(
        <div className="list">
            <h2>Read</h2>
            {readArticleCards()}
        </div>
    )
 }


export default ReadList
