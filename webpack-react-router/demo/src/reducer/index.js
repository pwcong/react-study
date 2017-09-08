import { combineReducers } from 'redux'

import users from './users'
import loginstate from './loginstate'

export default combineReducers({
	users,
	loginstate
})