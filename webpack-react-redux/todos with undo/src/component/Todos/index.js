import React,{PropTypes} from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

export default class Todos extends React.Component{

  render(){

    return (
      <div>
        <TodoInput onClick={this.props.onTodoItemAddListener}/>
        <ul>
          {
            this.props.todos.map((todo) => {
              return (
                <TodoItem 
                        key={todo.sign}
                        onClick={this.props.onTodoItemClickListener} 
                        text={todo.text} 
                        completed={todo.completed}
                        sign={todo.sign}/>
              )
            })
          }
        </ul>
      </div>
    )

  }
}

Todos.propTypes = {
  onTodoItemAddListener: PropTypes.func.isRequired,
  onTodoItemClickListener: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
}