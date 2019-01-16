import React, {Component} from 'react'
import './style.css';

import Song from '../song'

class SongList extends Component{
	render(){
		return(
		<div>
			<Song/>
			<Song/>
		</div>
		)
	}
}

export default SongList