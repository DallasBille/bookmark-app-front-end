import React from 'react'

const NYTCard = (props) => {
    return(
        <div className="article-card">
            <a href={props.article.url}>{props.article.title}</a>
            <p>{props.article.byline}</p>
            <p>Description: {props.article.section}</p>
            <p>Source: {props.article.source}</p>
        </div>
    )
}
export default NYTCard
