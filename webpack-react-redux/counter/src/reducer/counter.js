export const TYPE_INCREMENT = 'increment'
export const TYPE_DECREMENT = 'decrement'

export default (state=0, action) => {


  switch (action.type) {
    case TYPE_INCREMENT:
      return state+1
    case TYPE_DECREMENT:
      return state-1
    default:
      break
  }
}
