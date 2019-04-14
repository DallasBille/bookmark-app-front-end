import React from 'react';

const ArticleCard = props => {
    return(
        <div className="article-card">
          <a href={props.article.url} target="_blank">{props.article.title} </a>
          <p>Author: {props.article.author} </p>
          <p>Category: {props.article.category}</p>
          <p>Urgency: {props.article.urgency}</p>
          <p>Status: {props.article.read}</p>
          <button onClick={()=>{props.handleClick(props.article)}}>Read/Unread</button>
        </div>
    )
}
export default ArticleCard
