import React, {Component} from 'react'
import ReadList from './ReadList'
import UnreadList from './UnreadList'
import Filter from '../Component/Filter'
import SortedArticleList from './SortedArticleList'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Form from '../Component/Form'


export default class ArticleContainer extends Component {

    state = {
        articles: [],
        filter: "",
        popular: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/articles`)
        .then(res => res.json())
        .then(this.loadArticles)
        fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=K3anmAGwNUiIoSxetQ83c9wNjELsJHmb`)
        .then(res => res.json())
        .then(articles => {
            this.setState({
                popular: articles.results
            })
        })
    }

    loadArticles = (articles) => {
        this.setState({articles})
    }

    handleMoveToRead = (readArticle) => {
        let articlesCopy = [...this.state.articles]
        const foundReadArticle = articlesCopy.find(article => {
            return article.id === readArticle.id
        })
        foundReadArticle.read = "Read"
        this.setState({
            articles: articlesCopy
        })
    }

    handleMoveToUnread = (unreadArticle) => {
        let articlesCopy = [...this.state.articles]
        const foundUnreadArticle = articlesCopy.find(article => {
            return article.id === unreadArticle.id
        })
        foundUnreadArticle.read = "Unread"
        this.setState({
            articles: articlesCopy
        })
    }

    readArticles = () => {
        return this.state.articles.filter(article => article.read === "Read")
    }

    unreadArticles = () => {
        return this.state.articles.filter(article => article.read === "Unread")
    }

    setFilter = (event) => {
        this.setState({
            filter: event.target.value
        })
    }

    setSearchState = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    sortArticles = () => {
        const filterState = this.state.filter
        const filtered = this.state.articles.filter(article => {
            return article.category === filterState || article.urgency === filterState
        })
            if(filterState === "All" || filterState === ""){
            return this.state.articles
            } else {
            return filtered
            }
    }

    alertMessage = () => {
        console.log("useless feature");
    }

    clearForm = () => {
        return document.getElementById("new-article-form").reset()
    }

    submitNewArticle = (newArticle) => {
        this.clearForm()
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

    deleteArticle = (articleDelete) => {
        fetch(`http://localhost:3000/articles/${articleDelete.id}`,{
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify(articleDelete)
        })
        const copy = [...this.state.articles]
        const filter = copy.filter(article => article.id !== articleDelete.id)
        this.setState({
            articles: filter
        })
    }

    updateNotes = (event, summaryState,articleObj) => {
        event.preventDefault()
        const filteredList = this.state.articles.filter(article => article.id !== articleObj.id)
        fetch(`http://localhost:3000/articles/${articleObj.id}`,{
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          },
          body: JSON.stringify({article: {summary: summaryState}})
        })
        .then(res => res.json())
        .then(article => {
            this.setState({
                articles: [...filteredList, article]
            })
        })
    }

    render(){
        console.log(this.state.popular);
        console.log(this.state.articles);
        return(
            <div className="container">
            <Form submitNewArticle={this.submitNewArticle}/>
                <Switch>
                    <Route path="/home" render={(renderProps) => {
                     return <SortedArticleList updateNotes={this.updateNotes} deleteArticle={this.deleteArticle} filtered={this.sortArticles()} alertMessage={this.alertMessage}/>}}/>
                    <Route path="/unread" render={(renderProps) => {
                     return <UnreadList updateNotes={this.updateNotes} deleteArticle={this.deleteArticle} handleMoveToRead={this.handleMoveToRead} unreadArticles={this.unreadArticles()}/>}}/>
                    <Route path="/read" render={(renderProps) => {
                     return <ReadList updateNotes={this.updateNotes} deleteArticle={this.deleteArticle} handleMoveToUnread={this.handleMoveToUnread} readArticles={this.readArticles()}/>}}/>
                    <Route path="/read" render={(renderProps) => {
                     return <ReadList updateNotes={this.updateNotes} deleteArticle={this.deleteArticle} handleMoveToUnread={this.handleMoveToUnread} readArticles={this.readArticles()}/>}}/>
                </Switch>
                <Filter setFilter={this.setFilter}/>
            </div>

        )
    }
}
