import React,{PropTypes} from 'react'

export default class TodoItem extends React.Component{


	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.props.onClick(this.props.sign)
	}

	render(){

		return (
			<li 
				onClick={this.handleClick}
				style={{
					fontSize: '20px',
					cursor: 'pointer',
					textDecoration: this.props.completed? 'line-through':'none'
				}}>
				{this.props.text}
			</li>
		)

	}
}

TodoItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	sign: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
}