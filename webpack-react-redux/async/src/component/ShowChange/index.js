import React,{PropTypes} from 'react'

export default class ShowChange extends React.Component{

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
				<button onClick={this.handleClick}>Change</button>
				<p>{this.props.word}</p>
			</div>
		)
	}
}

ShowChange.propTypes = {
	word: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}