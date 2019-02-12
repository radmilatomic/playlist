import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {setSongs, renderDeleteSong } from "../../actions";
import { connect } from "react-redux";
import './style.css';
import DeleteModal from "../deleteModal"

const mapDispatchToProps = dispatch => {
  return {
    
    setSongs: songs=>dispatch(setSongs(songs)),
    renderDeleteSong:(flag,id)=>dispatch(renderDeleteSong(flag,id))
  };
};

class ConnectedSong extends Component{

	constructor(props) {
    super(props);
   
    this.deleteMethod=this.deleteMethod.bind(this);
    this.setData=this.setData.bind(this);
    this.fetchSongs=this.fetchSongs.bind(this);

  }

  setData(responseData){
  console.log(responseData);
  this.props.setSongs(responseData); 
 }

	fetchSongs(){
		const url=new URL('https://radmilatomic.pythonanywhere.com/api/songs')
    const request=new Request(url,{
    method:'GET',
    mode:'cors'
   });

   fetch(request).then(response=>
     response.json()).then(responseData=>this.setData(responseData))
     .catch(function(error){console.log(error);})
	}

	deleteMethod(e){
		e.preventDefault();
    this.props.renderDeleteSong(true,this.props.item.id);
		// console.log("deleting will be implemented here");
		// const url=new URL('https://radmilatomic.pythonanywhere.com/api/deletesong/'+this.props.id)
  //   	const request=new Request(url,{
  //   	method:'GET',
  //   	mode:'no-cors'
  //  });

  //  fetch(request).then(()=>this.fetchSongs())
  //    .catch(function(error){console.log(error);})

   
	}
	render(){


	return(
    <div>
		<div id="songContainer">
  		<div id="songTitle">{this.props.item.title}</div>
  		
  		<div id="songPerformer">{this.props.item.performer}</div>
  		
  		<input type="submit" value="Delete" onClick={this.deleteMethod}></input>
		</div>

    <DeleteModal show={this.props.item.deleteSong}/>
    </div>

	)
}
}

const Song=connect(null,mapDispatchToProps)(ConnectedSong)
export default Song