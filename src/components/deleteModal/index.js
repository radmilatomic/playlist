import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import {setSongs} from "../../actions";
import './style.css';

const mapStateToProps = state => {
  return { songs: state.songs,
        
            
             };
};

const mapDispatchToProps = dispatch => {
  return {
    
    setSongs: songs=>dispatch(setSongs(songs)),
    
  };
};

class ConnectedDeleteModal extends Component{

	constructor(props) {
    super(props);
    this.exitDelete=this.exitDelete.bind(this);
    this.ahamMethod=this.ahamMethod.bind(this);
  
    this.modalRoot = document.getElementById('modal-root');
  }

  exitDelete(){
    console.log("exitDelete#deleteModal");
    const newSongs=this.props.songs.map(item=>{
      if(item.id===this.props.id){
        return {...item, denyDelete:true, deleteSong:false}
      }
      else{
        return item
      }
    });
    this.props.setSongs(newSongs);
  }

   ahamMethod(){
    console.log("ahamMethod#deleteModal");
     const newSongs=this.props.songs.map(item=>{
      if(item.id===this.props.id){
        return {...item, confirmPassword:true, deleteSong:false}
      }
      else{
        return item
      }
    });
    this.props.setSongs(newSongs);
  }

	render(){
    if(this.props.show){
      
      
      return ReactDOM.createPortal(
        <div className='modal' id="delete-form">
          <div className="buttonsWrapper">Je l ti Rada dala sifru za brisanje?</div>
          <div className="buttonsWrapper">
            <input className="buttonDetails" type="submit" value="Aham" onClick={this.ahamMethod}/>
            <input className="buttonDetails" type ="submit" value ="Nije :(" onClick={this.exitDelete}/>
          </div>
        </div>,
      this.modalRoot
    );
  }
  return null
  }
}

const DeleteModal=connect(mapStateToProps,mapDispatchToProps)(ConnectedDeleteModal)

export default DeleteModal