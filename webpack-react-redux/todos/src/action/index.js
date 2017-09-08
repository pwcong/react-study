export const ADD_TODO = 'add todo'
export function createAddTodoAction(text){
  return ({
    type: ADD_TODO,
    text: text
  })
}

export const TOGGLE_TODO = 'toggle todo'
export function createToggleTodoAction(sign) {
  return ({
    type: TOGGLE_TODO,
    sign: sign
  })
}

export const CHANGE_FILTER = 'change filter'
export function createChangeFilterActino(filter) {
  return ({
    type: CHANGE_FILTER,
    filter: filter
  })
}