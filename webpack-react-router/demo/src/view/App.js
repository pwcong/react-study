import React, { PropTypes } from 'react'
import Header from './Header'
import Footer from './Footer'

import ReactCSSTransitinoGroup from 'react-addons-css-transition-group'
import style from './style/app.css'
import 'animate.css'

export default class App extends React.Component{

	render(){


		return (
			<div className={style.root}>
				<Header menus={this.props.menus} brand={this.props.brand}/>

				{ this.props.children }
				<Footer/>
			</div>
		)

	}
}

App.defaultProps = {
	menus: [
		{ text: 'Home', to: '/'},
		{ text: 'Users', to: '/users'},
		{ text: 'About', to: '/about'}
	],
	brand: {
		text: 'Pwcong',
		to: '/'
	}
}

