import React from 'react'
import About from './About'
import News from './News'
import style from './style/container.css'
export default class Container extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			route: ''
		}

		this.componentDidMount = this.componentDidMount.bind(this)
	}

	componentDidMount() {
		window.addEventListener('hashchange', () => {
			this.setState(
				{
					route: window.location.hash.substr(1)
				}
			)
		})	
	}

	render(){

		let Child
		switch(this.state.route){

			case '/about': 
				Child = About
				break
			case '/news':
				Child = News
				break
			default:
				Child = null

		}

		return (
			<div className={style.container}>
				{ Child && <Child/>}
			</div>

		)
		
		
	}


}


