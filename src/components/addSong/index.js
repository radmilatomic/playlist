import React, {Component} from 'react'
import {setSongs, showAddModalAction, showList } from "../../actions";
import { connect } from "react-redux";
import AddModal from "../addModal";
import DenyAddModal from "../denyAddModal";
import ConfirmPasswordAddModal from "../confirmPasswordAddModal";
import WrongPasswordAddModal from "../wrongPasswordAddModal"
import './style.css'

const mapDispatchToProps = dispatch => {
  return {
    
    setSongs: songs=>dispatch(setSongs(songs)),
    showAddModalAction:flag=>dispatch(showAddModalAction(flag)),
     showList:flag=>dispatch(showList(flag))
  };
};

const mapStateToProps = state => {
 return { songs: state.songs,
          showApp:state.showApp,
          showAddModal:state.showAddModal,
          showDenyAddModal:state.showDenyAddModal,
          showConfirmAddPassword:state.showConfirmAddPassword,
          showWrongPasswordAddModal:state.showWrongPasswordAddModal
  }
}


class ConnectedAddSong extends Component{

	constructor(props) {
    super(props);
    this.fetchSongs=this.fetchSongs.bind(this);
     this.addSong=this.addSong.bind(this);
     this.setData=this.setData.bind(this);
     this.setRef=this.setRef.bind(this);
     this.clearInput=this.clearInput.bind(this);
     this.performer="";
     this.title="";
     
  }

  setData(responseData){
  console.log(responseData);
  this.props.setSongs(responseData); 
 }

 setRef(title,performer) {
        this.performer= performer;
        this.title=title;
        
        
    }

  clearInput(){
    this.inputTitle.value="";
    this.inputPerformer.value="";
   

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
		e.preventDefault();
    this.setRef(this.inputTitle.value,this.inputPerformer.value);

   //  var form=new FormData(document.getElementById('form'))
   // const url=new URL('https://radmilatomic.pythonanywhere.com/api/addsong')
   // const request=new Request(url,{
   //  method:'POST',
   //  body:form,
   //  mode:'cors'
   // });
   // fetch(request).then(()=>this.fetchSongs())
   //   .catch(function(error){console.log(error);})
      //this.inputTitle.value="";
      //this.inputPerformer.value="";
     this.props.showAddModalAction(true);
     this.props.showList(false);

   
	}
	render(){
   
	return(
    <div>
		<form  id="add-form">
    <div class="addWrapper">
  		<div class="label">Title:</div>
      <input name="title" id="title" ref={(a) => this.inputTitle = a}></input>
    </div>
    <div class="addWrapper">
		<div class="label">Performer:</div>
    <input name="performer" id="performer" ref={(a) => this.inputPerformer = a}></input>
    </div>
		<input id="addSong" type ="submit" value ="ADD" onClick={(this.addSong)}/>
    
		</form>


    <AddModal show={this.props.showAddModal}/>
    <DenyAddModal show={this.props.showDenyAddModal}/>
    <ConfirmPasswordAddModal show={this.props.showConfirmAddPassword} title={this.title} performer={this.performer}/>
    <WrongPasswordAddModal show={this.props.showWrongPasswordAddModal}/>
    </div>

	)
}
}

const AddSong=connect(mapStateToProps,mapDispatchToProps)(ConnectedAddSong)

export default AddSong