import React, { Component } from 'react';
import './App.css';
import MainMenuBar from './components/MainMenuBar';
import MainJumbotron from './components/MainJumbotron';
import CV from './components/CV';


class App extends Component {
  render() {
    return (
        <div>
            <MainMenuBar />
            <MainJumbotron />
            <CV />
        </div>
    );
  }
}

export default App;
