import React, { Component } from 'react';
import CardSlider from './components/CardSlider/CardSlider';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <CardSlider NumberOfCards={2} />
      </div>
    );
  }
}

export default App;
