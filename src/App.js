import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleContainer from './Container/ArticleContainer'
import NavBar from './Component/NavBar'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';


class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar className="nav-bar"/>
          <ArticleContainer/>
        </header>
      </div>
    );
  }
}

export default App;
