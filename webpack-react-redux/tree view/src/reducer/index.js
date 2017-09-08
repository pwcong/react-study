import {
    combineReducers
} from 'redux'
import {
	ADD_NODE,
	DEL_NODE,
	INCREMENT
} from '../action'


const INITIAL_TREE = {
	parent: null,
	identity: 'root',
	count: 0,
	children: [],
	alive: true
}

function createNode(parent) {
	return ({
		parent: parent,
		identity: 'child' + Math.random(),
		count: 0,
		children: [],
		alive: true
	})
}

function addNode(tree,identity){

	if(tree.identity === identity)
		tree.children.push(createNode(identity))
	else
		tree.children.map(child=>{
			addNode(child,identity)
		})	
}

function delNode(tree,identity){

	if(tree.identity === identity)
		tree.alive = false
	else
		tree.children.map(child=>{
			delNode(child,identity)
		})

}

function increment(tree,identity){
	if(tree.identity === identity)
		tree.count++
	else
		tree.children.map(child=>{
			increment(child,identity)
		})
}

function tree(state=INITIAL_TREE,action){

	switch(action.type){
		case ADD_NODE:
			let newAddTree = Object.assign({},state)
			addNode(newAddTree,action.identity)
			return newAddTree
		case DEL_NODE:
			let newDelTree = Object.assign({},state)
			delNode(newDelTree,action.identity)
			return newDelTree
		case INCREMENT:
			let newIncrementTree = Object.assign({},state)
			increment(newIncrementTree,action.identity)
			return newIncrementTree
		default:
			return state
	}
}

export default combineReducers({
	tree
})