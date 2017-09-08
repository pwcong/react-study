import React from 'react'
import {connect} from 'react-redux'
import Todos from '../component/Todos'
import SelectTools from '../component/SelectTools'
import UndoTools from '../component/UndoTools'
import {
	createAddTodoAction,
	createToggleTodoAction,
	createChangeFilterAction
} from '../action'

import {ActionCreators} from 'redux-undo'

import {FILTERS,FILTER_ALL,FILTER_DONE,FILTER_UNDO} from '../reducer/filter'

class App extends React.Component{

	constructor(props) {
		super(props);
		this.onTodoItemAddListener = this.onTodoItemAddListener.bind(this)
		this.onTodoItemClickListener = this.onTodoItemClickListener.bind(this)
		this.onSelectItemClickListener = this.onSelectItemClickListener.bind(this)
		this.onUndoListener = this.onUndoListener.bind(this)
		this.onRedoListener = this.onRedoListener.bind(this)
	}


	onTodoItemAddListener(text){
		if(text && text.trim())
			this.props.dispatch(createAddTodoAction(text))
	}

	onTodoItemClickListener(sign){
		this.props.dispatch(createToggleTodoAction(sign))
	}

	onSelectItemClickListener(filter){
		this.props.dispatch(createChangeFilterAction(filter))
	}

	onUndoListener(){
		this.props.dispatch(ActionCreators.undo())
	}

	onRedoListener(){
		this.props.dispatch(ActionCreators.redo())
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
	      	<UndoTools 
	      		onUndoListener={this.onUndoListener} 
	      		undoable={this.props.pastTodosLength>0}
	      		onRedoListener={this.onRedoListener}
	      		redoable={this.props.nextTodosLength>0}/>
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
		pastTodosLength: state.todos.past.length,
		nextTodosLength: state.todos.future.length,
		todos: getTodosByFilter(state.todos.present,state.filter),
		filter: state.filter
	})
}

export default connect(select)(App)