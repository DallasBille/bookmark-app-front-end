import React from 'react'
import ArticleCard from '../Component/ArticleCard'

const SortedArticleList = (props) => {

    const allArticleCards = () => {
        return props.filtered.map(article => {
            return (<ArticleCard handleClick={props.alertMessage} key={article.id} article={article} />)
        })
    }

    return(
        <div>
            {allArticleCards()}
            <h1>Sorted Articles</h1>
        </div>
    )
}

export default SortedArticleList
