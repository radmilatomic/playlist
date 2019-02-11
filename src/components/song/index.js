import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {setSongs } from "../../actions";
import { connect } from "react-redux";
import './style.css';

const mapDispatchToProps = dispatch => {
  return {
    
    setSongs: songs=>dispatch(setSongs(songs))
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
		console.log("deleting will be implemented here");
		const url=new URL('https://radmilatomic.pythonanywhere.com/api/deletesong/'+this.props.id)
    	const request=new Request(url,{
    	method:'GET',
    	mode:'no-cors'
   });

   fetch(request).then(()=>this.fetchSongs())
     .catch(function(error){console.log(error);})

   
	}
	render(){


	return(
		<div id="songContainer">
  		<div>{this.props.title}</div>
  		<div>--------------</div>
  		<div>{this.props.performer}</div>
  		<div>-----</div>
  		<input type="submit" value="Delete" onClick={this.deleteMethod}></input>
		</div>

	)
}
}

const Song=connect(null,mapDispatchToProps)(ConnectedSong)
export default Song