import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import {setSongs, showList, showWrongAddPasswordAction} from "../../actions";

const mapStateToProps = state => {
  return { songs: state.songs,
        
            
             };
};

const mapDispatchToProps = dispatch => {
  return {
    
    setSongs: songs=>dispatch(setSongs(songs)),
    showList:flag=>dispatch(showList(flag)),
    showWrongAddPasswordAction:flag=>dispatch(showWrongAddPasswordAction(flag))
  };
};

class ConnectedWrongPasswordAddModal extends Component{

	constructor(props) {
    super(props);
    this.accept=this.accept.bind(this);

  
    this.modalRoot = document.getElementById('modal-root');
  }

  accept(){
    console.log("accept#wrongPasswordModal");
    this.props.showList(true);
    this.props.showWrongAddPasswordAction(false);
  }

   

	render(){
    if(this.props.show){
      
      
      return ReactDOM.createPortal(
        <div className='modal' id="wrongPasswordInfo">
         
            <div className="buttonsWrapper">
              <div>Ok, ne znas ipak sifru, al Rada nije to lepo ni sakrila, mozes lako da je provalis</div>
             <input  className="buttonDetails" type="submit" value="Hm,hvala" onClick={this.accept}></input>
              
              </div>
            
        </div>,
      this.modalRoot
    );
  }
  return null
  }
}

const WrongPasswordAddModal=connect(mapStateToProps,mapDispatchToProps)(ConnectedWrongPasswordAddModal)

export default WrongPasswordAddModal