import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {setSongs, showList} from "../../actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { songs: state.songs,
         };
};

const mapDispatchToProps = dispatch => {
  return {
    setSongs: songs=>dispatch(setSongs(songs)),
    showList:flag=>dispatch(showList(flag))
  };
};



class ConnectedEditModal extends Component{

	constructor(props) {
    super(props);
    this.modalRoot = document.getElementById('modal-root');
    this.exitEdit=this.exitEdit.bind(this);
  }


  	exitEdit(e){
  		e.preventDefault();
  		const newSongs=this.props.songs.map(item=>{
      if(item.id===this.props.item.id){
        return {...item, editSong:false}
      }
      else{
        return item
      }
    });
    this.props.setSongs(newSongs);
    this.props.showList(true);

  	}


	render(){
		if(this.props.show===true){
      return ReactDOM.createPortal(
        <div className='modal' id="addModal">
              <div className="buttonsWrapper">
              	 <textarea className ="buttonDetails" name="title" type="text"  defaultValue={this.props.item.title} ref={(a) => this.inputTitle = a}/>
              </div>
              <div>
                  <textarea className ="buttonDetails" name="performer" type="text"  defaultValue={this.props.item.performer} ref={(a) => this.inputPerformer = a}/>
              </div>
              
              <div className="buttonsWrapper">
                  <input className="buttonDetails" type="submit" value="Cancel" onClick={this.exitEdit}/>
                  <input className="buttonDetails" type ="submit" value ="Save"/>
                </div>
        </div>,
      this.modalRoot
    );
  }
  return null
	}
}
const EditModal=connect(mapStateToProps,mapDispatchToProps)(ConnectedEditModal)
export default EditModal