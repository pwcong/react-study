import React from 'react'
import {connect} from 'react-redux'
import Nodes from '../component/Nodes'

import {createAddNodeAction} from '../action'

class App extends React.Component{


	constructor(props){
		super(props)

		this.onAddNodeListener = this.onAddNodeListener.bind(this)
	}

	onAddNodeListener(node){
		if (node.trim()) {
			this.props.dispatch(createAddNodeAction(node))	
		}
	}

	render(){
		return (
			<Nodes nodes={this.props.nodes} onAddNodeListener={this.onAddNodeListener}/>
		)
	}
}

function select(state){
	return {
		nodes: state.nodes
	}
}

export default connect(select)(App)

