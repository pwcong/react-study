import React from 'react'
import { connect } from 'react-redux'
import style from './style/user.css'

class User extends React.Component {

	render(){

		let res = this.props.users.filter( user => {
			return user.username === this.props.params.username
		})
		
		let user = res && res[0]


		return (
			<div className={ style.root }>
				<img src={ user ? user.avatar : "/static/img/avatar_male.jpg" } alt="Avatar"/>
				<h3>{ user ? user.name : 'Name' }</h3>
				<p><span>Birthday:</span>{ user ? user.birthday : "1970-01-01" }</p>
				<p><span>Sex:</span>{ user ? user.sex : 'Male' }</p>
			</div>
		)

	}

}

function select(state){
	return ({
		users: state.users
	})
}

export default connect(select)(User)