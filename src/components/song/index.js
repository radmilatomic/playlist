import React from 'react'

const Song=(props)=>{
	return(
		<div>
		<div>{props.title}</div>
		<div>{props.performer}</div>
		</div>

	)
}

export default Song