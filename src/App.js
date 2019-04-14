import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleContainer from './Container/ArticleContainer'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ArticleContainer/>
        </header>
      </div>
    );
  }
}

export default App;
