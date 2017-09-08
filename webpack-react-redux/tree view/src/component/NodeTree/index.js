import React,{PropTypes} from 'react'
import Node from './Node'

export default class NodeTree extends React.Component{

	render(){

		return (
			<Node 
				parent={this.props.tree.parent}
				children={this.props.tree.children}
				count={this.props.tree.count}
				identity={this.props.tree.identity}
				onIncrementNode={this.props.onIncrementNode}
				onDeleteNode={this.props.onDeleteNode}
				onAddNode={this.props.onAddNode}/>
		)

	}
}


NodeTree.propTypes = {
	tree: PropTypes.object.isRequired,
	onIncrementNode: PropTypes.func.isRequired,
	onDeleteNode: PropTypes.func.isRequired,
	onAddNode: PropTypes.func.isRequired

}