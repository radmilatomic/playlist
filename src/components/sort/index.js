import React, {Component} from 'react';
import { setSongs} from "../../actions";
import { connect } from "react-redux"; 

const mapStateToProps = state => {
 return { songs: state.songs,
          showApp:state.showApp
  }
}
const mapDispatchToProps = dispatch => {
 return {
  setSongs: songs => dispatch(setSongs(songs))
  
 };
};


class ConnectedSort extends Component{
	constructor(props){
		super(props);
		this.sortByTitle=this.sortByTitle.bind(this);
		this.sortByPerformer=this.sortByPerformer.bind(this);
	}

	sortByTitle(e){
		e.preventDefault();
		console.log("sort#sortBYTitle");
		const oldSongs=[...this.props.songs]
		const newSongs=oldSongs.sort(function(a, b){
    	var titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase()
    	if (titleA < titleB) //sort string ascending
        return -1 
    	if (titleA > titleB)
        return 1
    	return 0 //default return value (no sorting)
})
		console.log(newSongs);
		this.props.setSongs(newSongs);
		console.log(this.props.songs);
	}

	sortByPerformer(e){
		console.log("sort#sortBYPerformer");
		e.preventDefault();
		const oldSongs=[...this.props.songs]
		const newSongs=oldSongs.sort(function(a, b){
    	var performerA=a.performer.toLowerCase(), performerB=b.performer.toLowerCase()
    	if (performerA < performerB) //sort string ascending
        return -1 
    	if (performerA > performerB)
        return 1
    	return 0 //default return value (no sorting)
})
		// console.log(newSongs);
		this.props.setSongs(newSongs);
		// console.log(this.props.songs);
	
		
	}

	render(){
		return (
			<div>
			<button className="sortButtons" onClick={this.sortByTitle}> sort by title <i className="material-icons" style={{color:"pink"}}>
keyboard_arrow_down
</i></button>
			<button  className="sortButtons" onClick={this.sortByPerformer}>sort by performer <i className="material-icons" style={{color:"pink"}}>
keyboard_arrow_down
</i></button>
			</div>
			)
	}

}

const Sort=connect(mapStateToProps,mapDispatchToProps)(ConnectedSort)
export default Sort