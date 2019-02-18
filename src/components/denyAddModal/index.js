import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import {setSongs, showList, showDenyAddModalAction} from "../../actions";

const mapStateToProps = state => {
  return { songs: state.songs,
             };
};

const mapDispatchToProps = dispatch => {
  return {
    
    setSongs: songs=>dispatch(setSongs(songs)),
    showList:flag=>dispatch(showList(flag)),
    showDenyAddModalAction:flag=>dispatch(showDenyAddModalAction(flag)),

  };
};

class ConnectedDenyAddModal extends Component{

	constructor(props) {
    super(props);
    
    this.denyOK=this.denyOK.bind(this);
  
    this.modalRoot = document.getElementById('modal-root');
  }

  denyOK(){
    console.log("denyOK#denyModal");
    this.props.showDenyAddModalAction(false);
    this.props.showList(true);
  }

   

	render(){
    if(this.props.show===true){
      
      
      return ReactDOM.createPortal(
        <div className='modal' id="denyModal">
         
            <div className="buttonsWrapper">
              <div>Ma nema veze, dodavanje je ionako bezveze</div>
              <input className="buttonDetails" type="submit" value="Ok" onClick={this.denyOK}></input>
          
              </div>
            
        </div>,
      this.modalRoot
    );
  }
  return null
  }
}

const DenyAddModal=connect(mapStateToProps,mapDispatchToProps)(ConnectedDenyAddModal)

export default DenyAddModal