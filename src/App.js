import React, { Component } from 'react';
import logo from './bookmark-icon-1-614x460.png';
import './App.css';
import ArticleContainer from './Container/ArticleContainer'
import NavBar from './Component/NavBar'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import NYTList from './Container/NYTList'
class App extends Component {





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar className="nav-bar"/>
          <Switch>
          <Route path="/popular" render={(renderProps) => {
            return <NYTList/>}}/>
          <ArticleContainer/>
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
