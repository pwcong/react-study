import React from 'react'
import ReactDOM from 'react-dom'
import {
    createStore,
    applyMiddleware
} from 'redux'
import {
    Provider
} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'
import App from './view'

let store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
)

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')

)