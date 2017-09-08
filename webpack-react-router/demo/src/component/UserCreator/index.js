import React, { PropTypes } from 'react'

import style from './style.css'

export default class UserCreator extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			avatar: '/static/img/avatar_male.jpg'
		}

		this.handleAvatarInputChange = this.handleAvatarInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleClear = this.handleClear.bind(this)
	}

	handleAvatarInputChange(){
		this.setState({
			avatar: this.refs.avatarInput.value || '/static/img/avatar_male.jpg'
		})
	}

	handleSubmit(){

		let newUser = {
			username: this.refs.usernameInput.value,
			avatar: this.refs.avatarInput.value,
			name: this.refs.nameInput.value,
			birthday: this.refs.birthdayInput.value,
			sex: this.refs.sexInput.value
		}

		this.props.onSubmitListener && this.props.onSubmitListener(newUser)

	}

	handleClear(){
		this.refs.usernameInput.value = ''
		this.refs.avatarInput.value = ''
		this.refs.nameInput.value = ''
		this.refs.birthdayInput.value = ''
		this.refs.sexInput.value = ''

		this.setState({
			avatar: '/static/img/avatar_male.jpg'
		})
	}

	render(){

		return (
			<div className={style.root}>

				<div className={style['root-top']}>
					<div className={style['root-top-left']}>
						<img src={this.state.avatar} alt="Avatar"/>
						<input placeholder="Avatar Url" type="text" ref="avatarInput" onChange={this.handleAvatarInputChange}/>	
					</div>

					<div className={style['root-top-right']}>
						<div>
							<p>Username: </p>
							<input type="text" ref="usernameInput"/>
						</div>
						<div>
							<p>Name: </p>
							<input type="text" ref="nameInput"/>
						</div>
						<div>
							<p>Birthday:</p>
							<input type="text" ref="birthdayInput"/>
						</div>
						<div>
							<p>Sex:</p>
							<input type="text" ref="sexInput"/>
						</div>
					</div>
				</div>

				<div className={style['root-bottom']}>
					<button onClick={this.handleSubmit}>提交</button>
					<button onClick={this.handleClear}>清除</button>
				</div>

			</div>
		)

	}
}

UserCreator.propTypes = {
	onSubmitListener: PropTypes.func
}