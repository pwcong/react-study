import React, { PropTypes } from 'react'
import style from './style.css'
export default class UserCard extends React.Component{

	render(){

		return (
			<div className={ style.root }>
				<img src={ this.props.avatar } alt="Avatar"/>
				<h3>{ this.props.name }</h3>
				<p><span>Birthday:</span>{ this.props.birthday }</p>
				<p><span>Sex:</span>{ this.props.sex }</p>
			</div>
		)

	}

}

UserCard.defaultProps = {
	avatar: "static/img/avatar_male.jpg",
	name: "Name",
	birthday: "1970-01-01",
	sex: "Male"
}

UserCard.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	birthday: PropTypes.string,
	sex: PropTypes.string
}
