import * as ACTION_TYPES from './ActionTypes'

const JobsReducer = (state, action) => {
    switch(action.type){
        case ACTION_TYPES.MAKE_REQUEST:
        return {
            ...state,
            loading: true,
            jobs: [],
        }
        case ACTION_TYPES.GET_DATA:
        return {
            ...state,
            loading: false, 
            jobs: action.payload,
        }
        case ACTION_TYPES.ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload.error,
            jobs: []
        }
        default:
            return state
    }
}

export default JobsReducer;