import React,{PropTypes} from 'react'

export default class Node extends React.Component{


	constructor(props) {
		super(props);
		this.handleIncrementNode = this.handleIncrementNode.bind(this)
		this.handleDeleteNode = this.handleDeleteNode.bind(this)
		this.handleAddNode = this.handleAddNode.bind(this)
	}

	handleIncrementNode(){
		this.props.onIncrementNode(this.props.identity)
	}

	handleDeleteNode(){
		this.props.onDeleteNode(this.props.identity)
	}

	handleAddNode(){
		this.props.onAddNode(this.props.identity)
	}

	render(){

		return (

			<div>
				<div>
					<button onClick={this.handleIncrementNode}>Increment</button>
					<span>{this.props.count}</span>
					{
						this.props.parent&&<button onClick={this.handleDeleteNode}>X</button>
					}
					
				</div>
				<ul>
					{
						this.props.children.map(child => {

							if(child.alive)
								return (
									<li key={child.identity}>
										<Node 
											parent={this.props.identity}
											children={child.children}
											count={child.count}
											identity={child.identity}
											onIncrementNode={this.props.onIncrementNode}
											onDeleteNode={this.props.onDeleteNode}
											onAddNode={this.props.onAddNode}
											/>
									</li>
								)
						})
					}
				</ul>
				<div>
					<button onClick={this.handleAddNode}>Add Node</button>
				</div>

			</div>
		)

	}

}

Node.propTypes = {
	children: PropTypes.array.isRequired,
	count: PropTypes.number.isRequired,
	identity: PropTypes.string.isRequired,
	onIncrementNode: PropTypes.func.isRequired,
	onDeleteNode: PropTypes.func.isRequired,
	onAddNode: PropTypes.func.isRequired
}