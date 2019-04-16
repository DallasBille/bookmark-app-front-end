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
import ArticleAdapter from '../Adapter/ArticleAdapter'



export default class ArticleContainer extends Component {

    state = {
        articles: [],
        filter: "",
    }


//================== CRUD DATABASE ACTIONS
    componentDidMount(){
        fetch(`http://localhost:3000/articles`)
        .then(res => res.json())
        .then(this.loadArticles)
    }

    loadArticles = (articles) => {
        this.setState({articles})
    }

    handleMoveToRead = (readArticle) => {
        const filteredArticles = this.state.articles.filter(article => {
            return article.id !== readArticle.id
        })
        ArticleAdapter.updateUnreadToRead(readArticle)
        .then(article => {
            this.setState({
                articles: [article,...filteredArticles]})
        })
    }

    handleMoveToUnread = (unreadArticle) => {
        const filteredArticle = this.state.articles.filter(article => {
            return article.id !== unreadArticle.id
        })
        ArticleAdapter.updateReadToUnread(unreadArticle)
        .then(article => {
            this.setState({
                articles: [article, ...filteredArticle]
            })
        })
    }

    clearForm = () => {
        return document.getElementById("new-article-form").reset()
    }

    submitNewArticle = (newArticle) => {
        this.clearForm()
        ArticleAdapter.postArticle(newArticle)
        .then(article => {
            this.setState({
                articles: [article, ...this.state.articles]
            })
        })
    }

    deleteArticle = (articleDelete) => {
        ArticleAdapter.deleteArticle(articleDelete)
        const copy = [...this.state.articles]
        const filter = copy.filter(article => article.id !== articleDelete.id)
        this.setState({
            articles: filter
        })
    }

    updateNotes = (event, noteState,articleObj) => {
        event.preventDefault()
        const filteredList = this.state.articles.filter(article => article.id !== articleObj.id)
        ArticleAdapter.updateNotes(noteState, articleObj)
        .then(article => {
            this.setState({
                articles: [...filteredList, article]
            })
        })
    }

    alertMessage = () => {
        alert("Oops, you can only mark read/unread from read and unread sections")
    }

// ================ SORTING ARTICLES
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

    render(){
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
                </Switch>
                <Filter setFilter={this.setFilter}/>
            </div>

        )
    }
}
