import React, { Component } from 'react';
import './App.css';
import MainMenuBar from './components/MainMenuBar';
import MainJumbotron from './components/MainJumbotron';


class App extends Component {
  render() {
    return (
        <div>
          <MainMenuBar />
          <MainJumbotron />
        </div>
    );
  }
}

export default App;
