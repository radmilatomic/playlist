import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Song from './components/song'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>ovo je moja playlista</div>
        <Song/>
        <Song/>
        <Song/>

      </div>
    );
  }
}

export default App;
