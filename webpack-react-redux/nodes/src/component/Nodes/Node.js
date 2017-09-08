import React from 'react'
import {PropTypes} from 'react'

export default class Node extends React.Component{

	render(){
		return (
			<li>{this.props.text}</li>
		)
	}

}

Node.propTypes = {
	text: PropTypes.string.isRequired
}