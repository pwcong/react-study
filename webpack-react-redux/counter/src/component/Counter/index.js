import React from 'react'

export default class Counter extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
        <p>Count: {this.props.count}</p>
      </div>
    )
  }

}

Counter.defaultProps = {
  count: 0
}
