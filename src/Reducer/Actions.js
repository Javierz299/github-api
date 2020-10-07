import * as ACTION_TYPES from './ActionTypes'

export const make_request = () => {
    return {
        type: ACTION_TYPES.MAKE_REQUEST,
    }
}
export const get_data = (data) => {
    return {
        type: ACTION_TYPES.GET_DATA,
        payload: data,
    }
}
export const error = (err) => {
    return {
        type: ACTION_TYPES.ERROR,
        payload: err,
    }
}

export const has_next_page = (bool) => {
    console.log("actions boolean",bool)
    return {
        type: ACTION_TYPES.HAS_NEXT_PAGE,
        payload: bool,
    }
}