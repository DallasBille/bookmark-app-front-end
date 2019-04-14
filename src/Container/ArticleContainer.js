import React, {Component} from 'react'
import ArticleList from './ArticleList'
import FavoriteList from './FavoriteList'
import Filter from '../Component/Filter'
import Form from '../Component/Form'
import SortedArticleList from './SortedArticleList'

export default class ArticleContainer extends Component {

    state = {
        articles: [],
        filter: "All"
    }

// Set search term state
// function that return articles if search is "All"
// switch statements that filter articles by terms for each type(category, urgency, etc.)
// send filtered list down to read/unread functions

// the concept is to filter all articles without changing its state. So that this.state.articles is the same always

    componentDidMount(){
        fetch(`http://localhost:3000/articles`)
        .then(res => res.json())
        .then(this.loadArticles)
    }

    loadArticles = (articles) => {
        this.setState({articles})

    }


    handleMoveToRead = (readArticle) => {
        let articlesCopy = [...this.state.articles]
        const foundReadArticle = articlesCopy.find(article => {
            return article.id === readArticle.id
        })
        foundReadArticle.read = "read"
        this.setState({
            articles: articlesCopy
        })
    }

    handleMoveToUnread = (unreadArticle) => {
        let articlesCopy = [...this.state.articles]
        const foundUnreadArticle = articlesCopy.find(article => {
            return article.id === unreadArticle.id
        })
        foundUnreadArticle.read = "unread"
        this.setState({
            articles: articlesCopy
        })
    }

    readArticles = () => {
        return this.state.articles.filter(article => article.read === "read")
    }

    unreadArticles = () => {
        return this.state.articles.filter(article => article.read === "unread")
    }

    setFilter = (event) => {
        this.setState({
            filter: event.target.value
        })
    }

    sortArticles = () => {
        const filterState = this.state.filter
        const filtered = this.state.articles.filter(article => {
            return article.category === filterState
        })
        if(filterState === "All"){
        return this.state.articles
    } else {
        return filtered
        }
    }

    alertMessage = () => {
        console.log("useless feature");
    }

    submitNewArticle = (newArticle) => {
        fetch(`http://localhost:3000/articles`,{
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify(newArticle)
        })
        .then(res => res.json())
        .then(article => {
            this.setState({
                articles: [article, ...this.state.articles]
            })
        })
    }

// =========== method to move to read


    render(){
        console.log(this.sortArticles());
        return(
            <div className="container">
                <Form submitNewArticle={this.submitNewArticle}/>
                <Filter setFilter={this.setFilter}/>
                <SortedArticleList filtered={this.sortArticles()} alertMessage={this.alertMessage}/>
                <FavoriteList handleMoveToRead={this.handleMoveToRead} unreadArticles={this.unreadArticles()}/>
                <ArticleList handleMoveToUnread={this.handleMoveToUnread} readArticles={this.readArticles()}/>
            </div>
        )
    }
}
