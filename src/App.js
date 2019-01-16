import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Song from './components/song'
import SongList from './components/songList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>ovo je moja playlista</div>
        <SongList/>
        

      </div>
    );
  }
}

export default App;
