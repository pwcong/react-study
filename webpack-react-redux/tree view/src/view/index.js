import React from 'react'
import {connect} from 'react-redux'
import NodeTree from '../component/NodeTree'
import {addNode,delNode,incrementNode} from '../action'

class App extends React.Component{

	constructor(props) {
		super(props);
		this.onIncrementNode = this.onIncrementNode.bind(this)
		this.onDeleteNode = this.onDeleteNode.bind(this)
		this.onAddNode = this.onAddNode.bind(this)
	}

	onIncrementNode(identity){
		this.props.dispatch(incrementNode(identity))
	}
	onDeleteNode(identity){
		this.props.dispatch(delNode(identity))
	}

	onAddNode(identity){
		this.props.dispatch(addNode(identity))
	}

  	render(){
	    return (
	      <div>
	      	<NodeTree 
	      		tree={this.props.tree}
	      		onIncrementNode={this.onIncrementNode}
				onDeleteNode={this.onDeleteNode}
				onAddNode={this.onAddNode}/>
	      </div>
	    )
  	}
}

function select(state){
	return ({
		tree: state.tree
	})
}

export default connect(select)(App)