import {
    combineReducers
} from 'redux'
import undoable,{distinctState} from 'redux-undo'

import todos from './todos'
import filter from './filter'

export default combineReducers({
    todos: undoable(todos,{filter: distinctState()}),
    filter
})