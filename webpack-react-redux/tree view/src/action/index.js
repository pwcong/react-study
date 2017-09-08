export const ADD_NODE = 'add node'
export const addNode = identity => ({type: ADD_NODE, identity: identity})

export const DEL_NODE = 'del node'
export const delNode = identity => ({type: DEL_NODE, identity: identity})

export const INCREMENT = 'increment'
export const incrementNode = identity => ({type: INCREMENT, identity: identity})
