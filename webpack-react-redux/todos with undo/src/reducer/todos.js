import {
    ADD_TODO,
    TOGGLE_TODO
} from '../action'


export default function todos(state = [], action) {

    switch (action.type) {
        case ADD_TODO:
            return ([
                ...state, {
                    text: action.text,
                    completed: false,
                    sign: action.text + '_' + Math.random()
                }
            ])
        case TOGGLE_TODO:
            return state.map((todo) => {
                if (action.sign === todo.sign)
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                else
                    return todo

            })
        default:
            return state
    }

}