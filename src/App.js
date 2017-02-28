import React, { Component } from 'react';
import './App.css';
import Flashcards from'./components/Flashcards'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Flashcards title="React Flash Cards" />
      </div>
    );
  }
}

export default App;
