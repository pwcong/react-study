import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import UserCard from '../component/UserCard'
import UserCreator from '../component/UserCreator'
import LoginBox from '../component/LoginBox'
import { addUser, toLogin } from '../action'

import style from './style/userlist.css'

class UserList extends React.Component {

	constructor(props) {
		super(props);
		this.handleOnSubmit = this.handleOnSubmit.bind(this)
		this.handleOnLogin = this.handleOnLogin.bind(this)
	}

	handleOnSubmit(user){
		this.props.dispatch(addUser(
			user.username,
			user.avatar,
			user.name,
			user.birthday,
			user.sex
		))
	}
	handleOnLogin(username,password){
		if(username&&username.trim()&&password&&password.trim())
			this.props.dispatch(toLogin(username,password))
		else
			alert("用户名和密码不能为空！")
	}


	render(){

		return (
			<div className={style.root}>

				{
					this.props.loginstate.logined ? (
							<div className={style['root-top']}>
								<UserCreator onSubmitListener={this.handleOnSubmit}/>
							</div>
						) : (
							<LoginBox 
								onLoginListener={this.handleOnLogin}
								failed={this.props.loginstate.failed}
								logining={this.props.loginstate.logining}/>
						)
				}
				

				<div className={style['root-bottom']}>
					{
						this.props.users.map( user => {
							return (
								<Link key={user.username+Math.random()} to={"/users/"+user.username}>
									<UserCard 
										avatar={user.avatar}
										name={user.name}
										birthday={user.birthday}
										sex={user.sex}/>
								</Link>
							)
						})
					}
				</div>
			</div>
		)

	}

}

function select(state){

	return ({
		users: state.users,
		loginstate: state.loginstate
	})

}


export default connect(select)(UserList)