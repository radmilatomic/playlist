import React, {Component} from 'react'

class AddSong extends Component{

	fetchSongs(){
		console.log("song should be added");
	}

	addSong(e){
		console.log("song will be added here");
		e.preventDefault()
    var form=new FormData(document.getElementById('form'))
   const url=new URL('https://radmilatomic.pythonanywhere.com/api/addsong')
   const request=new Request(url,{
    method:'POST',
    body:form,
    mode:'cors'
   });
   fetch(request).then(()=>this.fetchSongs())
     .catch(function(error){console.log(error);})

  
	}
	render(){
	return(
		<form  id="form">
		Title:<input name="title"></input>
		Performer:<input name="performer"></input>
		<input  type ="submit" value ="Add" onClick={this.addSong}/>
		</form>

	)
}
}

export default AddSong