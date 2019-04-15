import React from 'react'
import ArticleCard from '../Component/ArticleCard'

const SortedArticleList = (props) => {

    const allArticleCards = () => {
        return props.filtered.map(article => {
            return (<ArticleCard updateNotes={props.updateNotes} deleteArticle={props.deleteArticle} handleClick={props.alertMessage} key={article.id} article={article} />)
        })
    }

    return(
        <div className="list">
        <h2>Articles</h2>
            {allArticleCards()}
        </div>
    )
}

export default SortedArticleList
