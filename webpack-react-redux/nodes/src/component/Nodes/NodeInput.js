import React from 'react'
import {PropTypes} from 'react'

export default class NodeInput extends React.Component{

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.props.onAddNodeListener(this.refs.input.value)
		this.refs.input.value = ''
	}

	render(){

		return (
			<div>
				<input type="text" ref="input"/>
				<button onClick={this.handleClick}>Add Node</button>
			</div>
		)

	}
}

NodeInput.propTypes = {
	onAddNodeListener: PropTypes.func.isRequired
}