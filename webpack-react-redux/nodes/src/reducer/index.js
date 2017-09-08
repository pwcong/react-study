import {combineReducers} from 'redux'
import {ADD_NODE} from '../action'

function nodes(state=[], action){

	switch(action.type){

		case ADD_NODE:
			return ([
				...state,
				action.text
				])
		default: return state
	}

}

const reducer = combineReducers({
	nodes
})

export default reducer