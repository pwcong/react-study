export const ADD_NODE = 'add node'
export function createAddNodeAction(node){
	return ({
		type: ADD_NODE,
		text: node
	})
}