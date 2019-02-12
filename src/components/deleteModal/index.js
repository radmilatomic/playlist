import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { deleteSong: state.deleteSong,
        
            
             };
};

class ConnectedDeleteModal extends Component{

	constructor(props) {
    super(props);
    this.exitDelete=this.exitDelete.bind(this);
    this.deleteMethod=this.deleteMethod.bind(this);
  
    this.modalRoot = document.getElementById('modal-root');
  }

  exitDelete(){
    console.log("exitDelete#deleteModal")
  }

   deleteMethod(){
    console.log("deleteMethod#deleteModal")
  }

	render(){
    if(this.props.deleteSong===true){
      
      
      return ReactDOM.createPortal(
        <div className='modal' id="delete-form">
         
            <div className="buttonsWrapper">
              <div>Are you sure you want to delete?</div>
              <input className="buttonDetails" type="submit" value="YES" onClick={this.deleteMethod}/>
              <input className="buttonDetails" type ="submit" value ="NO" onClick={this.exitDelete}/>
              </div>
            
        </div>,
      this.modalRoot
    );
  }
  return null
  }
}

const DeleteModal=connect(mapStateToProps,null)(ConnectedDeleteModal)

export default DeleteModal