import React from 'react'
import ReactDOM from 'react-dom'
import App from './view'

import {counterStore} from './view/Container'

let render = () => {
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  )
}

render()
counterStore.subscribe(render)
