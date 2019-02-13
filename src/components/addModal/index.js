import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import {setSongs, showList,showDenyAddModalAction, showAddModalAction,showConfirmAddPasswordAction} from "../../actions";

const mapStateToProps = state => {
  return { songs: state.songs,
    showAddModal:state.showAddModal
             };
};

const mapDispatchToProps = dispatch => {
  return {
    
    setSongs: songs=>dispatch(setSongs(songs)),
    showList:flag=>dispatch(showList(flag)),
    showDenyAddModalAction:flag=>dispatch(showDenyAddModalAction(flag)),
    showAddModalAction:flag=>dispatch(showAddModalAction(flag)),
    showConfirmAddPasswordAction:flag=>dispatch(showConfirmAddPasswordAction(flag)),
    
    
  };
};

class ConnectedAddModal extends Component{

	constructor(props) {
    super(props);
    this.ahamMethod=this.ahamMethod.bind(this);
    this.exitAddModal=this.exitAddModal.bind(this);
    
    this.modalRoot = document.getElementById('modal-root');
  }

  
ahamMethod(e){
  e.preventDefault();
  console.log("ahamMethod#addModal");
  this.props.showConfirmAddPasswordAction(true);
  this.props.showAddModalAction(false);

}

exitAddModal(e){
  e.preventDefault();
  console.log("exitAddModal#addModal");
  this.props.showDenyAddModalAction(true);
  this.props.showAddModalAction(false);

}
  

   

	render(){
    if(this.props.show===true){
      
      
      return ReactDOM.createPortal(
        <div className='modal' id="addModal">
         
            <div className="buttonsWrapper">
              <div>Je l ti Rada dala dozvolu da dodajes pesme?</div>
              <input className="buttonDetails" type="submit" value="Aham" onClick={this.ahamMethod}/>
              <input className="buttonDetails" type ="submit" value ="Nije :(" onClick={this.exitAddModal}/>
              </div>
            
        </div>,
      this.modalRoot
    );
  }
  return null
  }
}

const AddModal=connect(mapStateToProps,mapDispatchToProps)(ConnectedAddModal)

export default AddModal