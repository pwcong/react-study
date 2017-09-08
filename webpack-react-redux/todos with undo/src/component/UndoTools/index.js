import React,{PropTypes} from 'react'

export default class UndoTools extends React.Component{


	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<button 
					disabled={this.props.undoable?'':'disabled'}	
					onClick={this.props.onUndoListener}>
					UNDO
				</button>
				<button 
					disabled={this.props.redoable?'':'disabled'}
					onClick={this.props.onRedoListener}>
					REDO
				</button>
			</div>
		)

	}
}

UndoTools.propTypes = {
	onUndoListener: PropTypes.func.isRequired,
	onRedoListener: PropTypes.func.isRequired,
	undoable: PropTypes.bool.isRequired,
	redoable: PropTypes.bool.isRequired
}