import React from 'react'
import ReactDOM from 'react-dom'
import { Route, IndexRoute } from 'react-router'
import App from '../view/App'
import Home from '../view/Home'
import Users from '../view/Users'
import UserList from '../view/UserList'
import User from '../view/User'
import About from '../view/About'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="/users" component={Users}>
			<IndexRoute component={UserList}/>
			<Route path="/users/:username" component={User}/>
		</Route>
		<Route path="/about" component={About}/>
	</Route>
)
