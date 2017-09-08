import React from 'react'
import style from './style/users.css'

export default class Users extends React.Component {


	render(){

		return (
			<div className={style.root}>
				{ this.props.children }
			</div>
		)

	}

}