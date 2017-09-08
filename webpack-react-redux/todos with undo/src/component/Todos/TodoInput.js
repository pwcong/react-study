import React,{PropTypes} from 'react'

export default class ToDoInput extends React.Component{


	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.props.onClick(this.refs.input.value)
		this.refs.input.value = ''
	}

	render(){

		return (
			<div>
				<input type="text" ref="input"/>
				<button onClick={this.handleClick}>Add Todo</button>
			</div>
		)

	}
}

ToDoInput.propTypes = {
	onClick: PropTypes.func.isRequired
}