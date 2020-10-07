import * as ACTION_TYPES from './ActionTypes'

const initialState = {
    jobs: [],
    loading: false,
    error: false,
}

const JobsReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.TEST:
        return {
            ...state
        }
        case ACTION_TYPES.TEST1:
        return {
            ...state
        }
        case ACTION_TYPES.TEST2:
        return {
            ...state
        }
        default:
            return state
    }
}

export default JobsReducer;