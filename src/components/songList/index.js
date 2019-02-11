import React, {Component} from 'react'
import { connect } from "react-redux"; 
import './style.css';
import { setSongs} from "../../actions";
import Song from '../song'

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
		return(
		<div id="songList">
		{this.props.songs.map((item)=><Song title={item.title} performer={item.performer} key={item.id} id={item.id}/>)}
	
		</div>
		)
	}
}

const SongList=connect(mapStateToProps,mapDispatchToProps)(ConnectedSongList)
export default SongList