import React, { PropTypes } from 'react'

import style from './style.css'

export default class LoginBox extends React.Component{

	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this)
	}

	handleLogin(){
		this.props.onLoginListener(this.refs.usernameInput.value,this.refs.passwordInput.value)
	}

	render(){

		return (
			<div className={style.root}>
				{
					this.props.logining ? (

							<div className={style['root-tips']}>登陆中</div>

						) : (

							<div className={style['root-main']}>

								{ this.props.failed && (<div className={style['root-tips']}>登录失败</div>) }

								<div className={style['root-main-top']}>
									<div>
										<p>Username:</p>
										<input type="text" ref="usernameInput"/>
									</div>
									<div>
										<p>Password:</p>
										<input type="text" ref="passwordInput"/>
									</div>
								</div>
								<div className={style['root-main-bottom']}>
									<button onClick={this.handleLogin}>登陆</button>
								</div>
							</div>

						)
				}

			</div>
		)

	}
}

LoginBox.propTypes = {
	logining: PropTypes.bool,
	failed: PropTypes.bool,
	onLoginListener: PropTypes.func
}

LoginBox.defaultProps = {
	logining: false,
	failed: false,
	onLoginListener(username,password){
		console.log(username + " " + password)
	}
}