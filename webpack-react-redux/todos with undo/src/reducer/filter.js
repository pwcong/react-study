import {
    CHANGE_FILTER
} from '../action'


export const FILTER_ALL = 'all'
export const FILTER_DONE = 'done'
export const FILTER_UNDO = 'undo'

export const FILTERS = [FILTER_ALL,FILTER_UNDO,FILTER_DONE]

export default function filter(state = FILTER_ALL, action) {

    switch (action.type) {

        case CHANGE_FILTER:
            return action.filter
        default:
            return state

    }


}