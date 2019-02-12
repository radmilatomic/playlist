import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { deleteSong: state.deleteSong,
        
            
             };
};

class ConnectedDenyModal extends Component{

	constructor(props) {
    super(props);
    
    this.denyOK=this.denyOK.bind(this);
  
    this.modalRoot = document.getElementById('modal-root');
  }

  denyOK(){
    console.log("denyOK#denyModal")
  }

   

	render(){
    if(this.props.deleteSong===true){
      
      
      return ReactDOM.createPortal(
        <div className='modal' id="denyModal">
         
            <div className="buttonsWrapper">
              <div>Ma nema veze, sta uopste ima da brises</div>
              <input value="Ok" onClick={this.denyOK}><input/>
          
              </div>
            
        </div>,
      this.modalRoot
    );
  }
  return null
  }
}

const DenyModal=connect(mapStateToProps,null)(ConnectedDenyModal)

export default DenyModal