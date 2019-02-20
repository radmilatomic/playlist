import React, {Component} from 'react'

import {setSongs, showList} from "../../actions";
import { connect } from "react-redux";
import './style.css';
import DeleteModal from "../deleteModal"
import DenyModal from "../denyModal"
import ConfirmPasswordModal from "../confirmPasswordModal"
import WrongPasswordModal from "../wrongPasswordModal"
import EditModal from "../editModal"
import 'material-icons'

const mapStateToProps = state => {
 return { songs: state.songs,
          showApp:state.showApp
  }
}


const mapDispatchToProps = dispatch => {
  return {
    setSongs: songs=>dispatch(setSongs(songs)),
    showList:flag=>dispatch(showList(flag))
  };
};

class ConnectedSong extends Component{

	constructor(props) {
    super(props);
    this.deleteMethod=this.deleteMethod.bind(this);
    this.editMethod=this.editMethod.bind(this);
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
	  console.log("deleteMethod#Song");
    const newSongs=this.props.songs.map(item=>{
      if(item.id===this.props.item.id){
        return {...item, deleteSong:true}
      }
      else{
        return item
      }
    });
    this.props.setSongs(newSongs);
    this.props.showList(false);
	}

  editMethod(e){
    console.log("Song#editMethod");
    e.preventDefault();
    console.log("editMethod#Song");
    const newSongs=this.props.songs.map(item=>{
      if(item.id===this.props.item.id){
        return {...item, editSong:true}
      }
      else{
        return item
      }
    });
    this.props.setSongs(newSongs);
    this.props.showList(false);
  }
	render(){

    const modals=<div>
    <DeleteModal show={this.props.item.deleteSong} id={this.props.item.id}/>
    <DenyModal show={this.props.item.denyDelete} id={this.props.item.id}/>
    <ConfirmPasswordModal show={this.props.item.confirmPassword} id={this.props.item.id}/>
    <WrongPasswordModal show={this.props.item.wrongPassword} id={this.props.item.id}/>
    <EditModal show={this.props.item.editSong} id={this.props.item.id} item={this.props.item}/>
    </div>

if(this.props.showApp){
  return(
    <div>
    <div className="songContainer">
    <div><i className="material-icons" style={{color:"pink"}}>
music_note
</i></div>
      <div className="songTitle">{this.props.item.title}</div>
      <div className="songPerformer">{this.props.item.performer}</div>
      <div className="deleteButton" style={{'fontSize':'12px'}} onClick={this.editMethod}><i>edit</i></div>
      <div className="deleteButton" onClick={this.deleteMethod}><i className="material-icons">
        clear
      </i></div>
      
    </div>
    {modals}
    </div>

  )
}
else{
  return modals
}
	
}
}

const Song=connect(mapStateToProps,mapDispatchToProps)(ConnectedSong)
export default Song