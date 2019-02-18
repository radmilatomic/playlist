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

class ConnectedDenyModal extends Component{

	constructor(props) {
    super(props);
    this.denyOK=this.denyOK.bind(this);
    this.modalRoot = document.getElementById('modal-root');
  }

  denyOK(){
    console.log("denyOK#denyModal");
    const newSongs=this.props.songs.map(item=>{
      if(item.id===this.props.id){
        return {...item, denyDelete:false}
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
        <div className='modal' id="denyModal">
          <div className="buttonsWrapper">Ma nema veze, brisanje je ionako bezveze</div>
          <div className="buttonsWrapper">
            <input className="buttonDetails" type="submit" value="Ok" onClick={this.denyOK}></input>
          </div>
        </div>,
      this.modalRoot
    );
  }
  return null
  }
}

const DenyModal=connect(mapStateToProps,mapDispatchToProps)(ConnectedDenyModal)

export default DenyModal