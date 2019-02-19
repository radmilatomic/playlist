import React, { Component } from 'react';


import './App.css';


import SongList from './components/songList'
import AddSong from './components/addSong'
import Sort from './components/sort'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='heading'>RADINA PLAYLISTA</div>
       <AddSong/>
       <Sort/>
       <SongList/>
        

      </div>
    );
  }
}

export default App;
