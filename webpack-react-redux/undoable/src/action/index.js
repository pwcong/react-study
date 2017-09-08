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
export function createChangeFilterAction(filter) {
  return ({
    type: CHANGE_FILTER,
    filter: filter
  })
}

export const UNDO = 'undo'
export function createUndoAction(){
  return ({
    type: UNDO
  })
}

export const REDO = 'redo'
export function createRedoAction(){
  return ({
    type: REDO
  })
}