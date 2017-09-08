import React from 'react'
import {connect} from 'react-redux'
import Todos from '../component/Todos'
import SelectTools from '../component/SelectTools'

import {createAddTodoAction,createToggleTodoAction,createChangeFilterActino} from '../action'

import {FILTERS,FILTER_ALL,FILTER_DONE,FILTER_UNDO} from '../reducer/filter'

class App extends React.Component{

	constructor(props) {
		super(props);
		this.onTodoItemAddListener = this.onTodoItemAddListener.bind(this)
		this.onTodoItemClickListener = this.onTodoItemClickListener.bind(this)
		this.onSelectItemClickListener = this.onSelectItemClickListener.bind(this)
	}


	onTodoItemAddListener(text){
		if(text && text.trim())
			this.props.dispatch(createAddTodoAction(text))
	}

	onTodoItemClickListener(sign){
		this.props.dispatch(createToggleTodoAction(sign))
	}

	onSelectItemClickListener(filter){
		this.props.dispatch(createChangeFilterActino(filter))
	}

  	render(){
	    return (
	      <div>
	      	<Todos 
	      		todos={this.props.todos} 
	      		onTodoItemAddListener={this.onTodoItemAddListener}
	      		onTodoItemClickListener={this.onTodoItemClickListener}/>
	      	<SelectTools
	      		onSelectItemClickListener={this.onSelectItemClickListener}
	      		select={this.props.filter}
	      		selects={FILTERS}/>
	      </div>
	    )
  	}
}

function getTodosByFilter(todos,filter){

	switch(filter){

		case FILTER_UNDO:
			return todos.filter(todo => todo.completed === false)
		case FILTER_DONE:
			return todos.filter(todo => todo.completed === true)
		default:
			return todos
	}

}



function select(state){
	return ({
		todos: getTodosByFilter(state.todos,state.filter),
		filter: state.filter
	})
}

export default connect(select)(App)