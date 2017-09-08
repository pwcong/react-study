import React from 'react'
import {PropTypes} from 'react'
import Node from './Node'
import NodeInput from './NodeInput'
export default class Nodes extends React.Component{

	render(){
		return (
			<div>
				<NodeInput onAddNodeListener={this.props.onAddNodeListener}/>
				<ul>
					{this.props.nodes.map(node => {

						return <Node text={node} key={node + Math.random()}/>
					})}
				</ul>
			</div>
		)

	}

}

Nodes.propTypes = {
	onAddNodeListener: PropTypes.func.isRequired,
	nodes: PropTypes.array.isRequired
}