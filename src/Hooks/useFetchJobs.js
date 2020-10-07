import JobsReducer from '../Reducer/JobsReducer'
import { useReducer, useEffect } from 'react'

import axios from 'axios'

import * as ACTIONS from '../Reducer/Actions'
//heroku proxy server: https://cors-anywhere.herokuapp.com/
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

const useFetchJobs = (params,page) => {
    const [state, dispatch] = useReducer(JobsReducer, {jobs: [], loading: false, error: false})

    useEffect(() => {
        dispatch(ACTIONS.make_request())
        axios.get(`${BASE_URL}`,{
            params: {markdown: true, page: page, ...params}
        })
        .then(res => dispatch(ACTIONS.get_data(res.data)))
        .catch((err) => dispatch(ACTIONS.error({error: err})))


    }, [params,page])
   
    return state;
}

export default useFetchJobs;
