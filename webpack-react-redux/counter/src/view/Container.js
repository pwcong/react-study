import React from 'react'
import {createStore} from 'redux'

import Counter from '../component/Counter'

import counterReducer from '../reducer/counter'
import {TYPE_INCREMENT,TYPE_DECREMENT} from '../reducer/counter'

export const counterStore = createStore(counterReducer)

export default class Container extends React.Component{

  constructor(props){
    super(props)

    this.onCounterIncrement = this.onCounterIncrement.bind(this)
    this.onCounterDecrement = this.onCounterDecrement.bind(this)

  }

  onCounterIncrement(){
    counterStore.dispatch({
      type: TYPE_INCREMENT
    })
  }

  onCounterDecrement(){
    counterStore.dispatch({
      type: TYPE_DECREMENT
    })
  }

  render(){

    console.log('render');

    return (
      <div>
        <Counter
          count={counterStore.getState()}
          onIncrement={this.onCounterIncrement}
          onDecrement={this.onCounterDecrement}/>
      </div>
    )
  }
}
