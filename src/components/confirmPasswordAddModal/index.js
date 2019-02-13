import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import {setSongs, showList,showWrongAddPasswordAction, showConfirmAddPasswordAction} from "../../actions";

const mapStateToProps = state => {
  return { songs: state.songs,
             };
};

const mapDispatchToProps = dispatch => {
  return {
    
    setSongs: songs=>dispatch(setSongs(songs)),
    showList:flag=>dispatch(showList(flag)),
    showWrongAddPasswordAction:flag=>dispatch(showWrongAddPasswordAction(flag)),
    showConfirmAddPasswordAction:flag=>dispatch(showConfirmAddPasswordAction(flag))
  };
};

class ConnectedConfirmPasswordAddModal extends Component{

	constructor(props) {
    super(props);
    this.setData=this.setData.bind(this);
    this.confirmPassword=this.confirmPassword.bind(this);
    this.fetchSongs=this.fetchSongs.bind(this);
    this.modalRoot = document.getElementById('modal-root');
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

  setData(responseData){
  console.log(responseData);
  this.props.setSongs(responseData); 
 }

  confirmPassword(){
    console.log("confirmPassword#ConfirmedPasswordAddModal");
    console.log(this.inputPassword.value);
    if(this.inputPassword.value==="sifrujelakoprovaliti"){
      console.log("sifra je dobra");
       var form=new FormData(document.getElementById('form'))
       form.append("title",this.props.title);
       form.append("performer", this.props.performer)
   const url=new URL('https://radmilatomic.pythonanywhere.com/api/addsong')
   const request=new Request(url,{
    method:'POST',
    body:form,
    mode:'cors'
   });
   fetch(request).then(()=>this.fetchSongs())
     .catch(function(error){console.log(error);})
     this.props.showList(true);

    }
    else{
      this.props.showWrongAddPasswordAction(true);
      this.props.showConfirmAddPasswordAction(false);
    }
   
  }

   

	render(){
    if(this.props.show===true){
      
      
      return ReactDOM.createPortal(
        <div className='modal' id="confirmPasswordModal">
         
            <div className="buttonsWrapper">
              <div>Da cujem, koja je sifra</div>
              <input type="password" ref={(a) => this.inputPassword = a}></input>
              <input type="submit" value="Submit" onClick={this.confirmPassword}></input>
          
              </div>
            
        </div>,
      this.modalRoot
    );
  }
  return null
  }
}

const ConfirmPasswordAddModal=connect(mapStateToProps,mapDispatchToProps)(ConnectedConfirmPasswordAddModal)

export default ConfirmPasswordAddModal