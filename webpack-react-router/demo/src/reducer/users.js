import { ADD_USER } from '../action'

export const DEFAULT_USER = {
	username: 'Username',
	avatar: '/static/img/avatar_male.jpg',
	name: 'Name',
	birthday: '1970-01-01',
	sex: 'Male'
}

export function newUser(username, avatar, name, birthday, sex){

	return ({
		username: username,
		avatar: avatar,
		name: name,
		birthday: birthday,
		sex: sex
	})
}

export const INITIAL_USERS = [
	newUser('Pwcong',"/static/img/avatar_male.jpg","Pwcong","1996-02-01","Male"),
]

export default (state=INITIAL_USERS, action) => {
	switch(action.type){
		case ADD_USER:
			return [...state, action.user]
		default:
			return state
	}
}