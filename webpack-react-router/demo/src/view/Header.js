import React, { PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import style from './style/header.css'

export default class Header extends React.Component{

	render(){
		return (
			<div className={ style.root }>
				<div className={ style.brand }>
					<Link to={ this.props.brand.to }>
						<h2>{ this.props.brand.text }</h2>
					</Link>
				</div>
				<div className={ style.menus }>
					<ul>
						{ 
							this.props.menus.map( (menu, index) => {
								return (
									<li key={ menu.text}>
										{
											index==0 ? 
												<IndexLink to={ menu.to } className={style.link} activeClassName={style['active-link']}>{ menu.text }</IndexLink>
												:
												<Link to={ menu.to} className={style.link} activeClassName={style['active-link']}>{ menu.text }</Link>

										}
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		)
	}

}

Header.defaultProps = {
	menus: [
	],
	brand: {
		text: 'Brand',
		to: '#'
	}
}

Header.propTypes = {
	menus: PropTypes.array,
	brand: PropTypes.object
}