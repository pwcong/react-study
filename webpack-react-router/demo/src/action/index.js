export const ADD_USER = 'ADD_USER'
export function addUser(username, avatar, name, birthday, sex){
	return ({
		type: ADD_USER,
		user: {
			username: username || 'Username',
			avatar: avatar || '/static/img/avatar_male.jpg',
			name: name || 'Name',
			birthday: birthday || '1970-01-01',
			sex: sex || 'Male'
		}
	})
}

export function toLogin(username,password){

	return (dispatch) => {

		dispatch(setLoginStateLogining())

		setTimeout( () => {
			if(username === 'pwcong' && password === '123456')
				dispatch(setLoginStateLogined())
			else
				dispatch(setLoginStateFailed())
		},2000)

	}

}

export const SET_LOGINSTATE_LOGINING = "SET_LOGINSTATE_LOGINING"
export function setLoginStateLogining(){
	return ({
		type: SET_LOGINSTATE_LOGINING
	})
}

export const SET_LOGINSTATE_LOGINED = "SET_LOGINSTATE_LOGINED"
export function setLoginStateLogined(){
	return ({
		type: SET_LOGINSTATE_LOGINED
	})
}

export const SET_LOGINSTATE_FAILED = "SET_LOGINSTATE_FAILED"
export function setLoginStateFailed(){
	return ({
		type: SET_LOGINSTATE_FAILED
	})
}
