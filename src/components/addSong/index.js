import React, {Component} from 'react'
import {setSongs } from "../../actions";
import { connect } from "react-redux";


const mapDispatchToProps = dispatch => {
  return {
    
    setSongs: songs=>dispatch(setSongs(songs))
  };
};


class ConnectedAddSong extends Component{

	constructor(props) {
    super(props);
    this.fetchSongs=this.fetchSongs.bind(this);
     this.addSong=this.addSong.bind(this);
     this.setData=this.setData.bind(this);
     
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

	addSong(e){
		console.log("song will be added here");
		e.preventDefault()
    var form=new FormData(document.getElementById('form'))
   const url=new URL('https://radmilatomic.pythonanywhere.com/api/addsong')
   const request=new Request(url,{
    method:'POST',
    body:form,
    mode:'cors'
   });
   fetch(request).then(()=>this.fetchSongs())
     .catch(function(error){console.log(error);})
     this.inputTitle.value="";
     this.inputPerformer.value="";
  
	}
	render(){
	return(
		<form  id="form">
    <div>
		Title:<input name="title" ref={(a) => this.inputTitle = a}></input></div>
    <div>
		Performer:<input name="performer" ref={(a) => this.inputPerformer = a}></input>

		<input  type ="submit" value ="Add" onClick={this.addSong}/>
    </div>
		</form>

	)
}
}

const AddSong=connect(null,mapDispatchToProps)(ConnectedAddSong)

export default AddSong