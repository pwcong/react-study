import React from 'react'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'

import style from './style/index.css'

export default class App extends React.Component{

	constructor(props) {
		super(props);

	}

  	render(){
	    return (
	      <div className={style.container}>

	      	<Header menuList={this.props.menuList} brand={this.props.brand}/>
	      	<Container/>
	      	<Footer/>

	      </div>
	    )
  	}
}

App.defaultProps = {
	menuList: [
				{to: '#', text: 'Index'},
				{to: '#/about', text: 'About'},
				{to: '#/news', text: 'News'} 
			],
	brand: 'Pwcong'

}

