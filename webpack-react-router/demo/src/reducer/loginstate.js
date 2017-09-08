import { SET_LOGINSTATE_LOGINED, SET_LOGINSTATE_LOGINING, SET_LOGINSTATE_FAILED } from '../action'


export const INITIAL_LOGINSTATE = {
	logined: false,
	logining: false,
	failed: false
}

export default (state=INITIAL_LOGINSTATE, action) => {

	switch(action.type){

		case SET_LOGINSTATE_LOGINING:
			return ({
				logined: false,
				logining: true,
				failed: false
			})
		case SET_LOGINSTATE_LOGINED:
			return ({
				logined: true,
				logining: false,
				failed: false
			})
		case SET_LOGINSTATE_FAILED:
			return ({
				logined: false,
				logining: false,
				failed: true
			})
		default:
			return state

	}

}