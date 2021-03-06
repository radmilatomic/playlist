import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import {setSongs, showList} from "../../actions";

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

class ConnectedWrongPasswordModal extends Component{

	constructor(props) {
    super(props);
    this.accept=this.accept.bind(this);
    this.modalRoot = document.getElementById('modal-root');
  }

  accept(){
    console.log("accept#wrongPasswordModal");
    const newSongs=this.props.songs.map(item=>{
      if(item.id===this.props.id){
        return {...item, wrongPassword:false}
      }
      else{
        return item
      }
    });
    this.props.setSongs(newSongs);
    this.props.showList(true);
  }

   

	render(){
    if(this.props.show){
      return ReactDOM.createPortal(
        <div className='modal' id="wrongPasswordInfo">
          <div className="buttonsWrapper">Ok, ne znas ipak sifru, al Rada nije to lepo ni sakrila, mozes lako da je provalis</div>
          <div className="buttonsWrapper">
            <input className="buttonDetails" type="submit" value="Hm,hvala" onClick={this.accept}></input>
          </div>
        </div>,
      this.modalRoot
    );
  }
  return null
  }
}

const WrongPasswordModal=connect(mapStateToProps,mapDispatchToProps)(ConnectedWrongPasswordModal)

export default WrongPasswordModal