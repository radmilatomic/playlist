import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Song from './components/song'
import SongList from './components/songList'
import AddSong from './components/addSong'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>ovo je moja playlista</div>
       <AddSong/>
       <SongList/>
        

      </div>
    );
  }
}

export default App;
