import React, {Component} from 'react'

class Song extends Component{

	constructor(props) {
    super(props);
   
    this.deleteMethod=this.deleteMethod.bind(this);

  }

	fetchSongs(){
		console.log("we'll see about this");
	}

	deleteMethod(e){
		e.preventDefault();
		console.log("deleting will be implemented here");
		const url=new URL('https://radmilatomic.pythonanywhere.com/api/deletesong/'+this.props.id)
    	const request=new Request(url,{
    	method:'GET',
    	mode:'no-cors'
   });

   fetch(request).then(()=>this.fetchSongs())
     .catch(function(error){console.log(error);})

   
	}
	render(){


	return(
		<div>
		<span>{this.props.title}</span>
		<span>--------------</span>
		<span>{this.props.performer}</span>
		<span>-----</span>
		<input type="submit" value="Delete" onClick={this.deleteMethod}></input>
		</div>

	)
}
}

export default Song