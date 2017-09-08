import {combineReducers} from 'redux'
import {CHANGE} from '../action'


function word(state='', action) {
	switch(action.type){
		case CHANGE:
			return action.word
		default: 
			return state
	}
}

export default combineReducers({
	word
})