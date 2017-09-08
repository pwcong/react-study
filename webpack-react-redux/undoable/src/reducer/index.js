import {
    combineReducers
} from 'redux'

import todos from './todos'
import filter from './filter'
import undoable from './undoable'

const undoableTodos = undoable(todos)

export default combineReducers({
    undoableTodos,
    filter
})