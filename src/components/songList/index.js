import React, {Component} from 'react'
import { connect } from "react-redux"; 
import './style.css';
import { setSongs} from "../../actions";
import Song from '../song'
import DeleteModal from "../deleteModal"

const mapDispatchToProps = dispatch => {
 return {
  setSongs: songs => dispatch(setSongs(songs))
  
 };
};

const mapStateToProps = state => {
 return { songs: state.songs
  }
}



class ConnectedSongList extends Component{
	setData(responseData){
  console.log(responseData);
  this.props.setSongs(responseData); 
 }

componentDidMount(){
  console.log("songList#ComponenDidMount");
   const url=new URL('https://radmilatomic.pythonanywhere.com/api/songs')
   const request=new Request(url,{
    method:'GET',
    mode:'cors'
   });

   fetch(request).then(response=>
     response.json()).then(responseData=>this.setData(responseData))
     .catch(function(error){console.log(error);})
  
}

	render(){
    console.log("songList#render()");
		return(
      <div>
      <DeleteModal/>
		<div id="songList">
		{this.props.songs.map((item)=><Song item={item} key={item.id} id={item.id}/>)}
	
		</div>
    </div>
		)
	}
}

const SongList=connect(mapStateToProps,mapDispatchToProps)(ConnectedSongList)
export default SongList