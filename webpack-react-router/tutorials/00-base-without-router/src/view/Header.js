import React,{ PropTypes } from 'react'
import style from './style/header.css'

export default class Header extends React.Component{

	render(){

		return (
			<div className={style.container}>

				<h2 className={style.brand}>{this.props.brand}</h2>

				<ul className={style.menulist}>
					{
						this.props.menuList.map(menuItem => {
							return (
								<li className={style.menuitem} key={menuItem.text}>
									<a href={menuItem.to}>{menuItem.text}</a>
								</li>
							)
						})
					}
				</ul>
			</div>
		)

	}
}

Header.propTypes = {
	brand: PropTypes.string.isRequired,
	menuList: PropTypes.array.isRequired
}