import JobsReducer from '../Reducer/JobsReducer'
import { useReducer, useEffect } from 'react'

import axios from 'axios'

import * as ACTIONS from '../Reducer/Actions'
//heroku proxy server: https://cors-anywhere.herokuapp.com/
const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

const useFetchJobs = (params,page) => {
    const [state, dispatch] = useReducer(JobsReducer, {jobs: [], loading: false, error: false})

    useEffect(() => {
        //whenever params change cancel prev request
        const cancelToken1 = axios.CancelToken.source();
        const cancelToken2 = axios.CancelToken.source();

        dispatch(ACTIONS.make_request())
        axios.get(`${BASE_URL}`,{
            cancelToken1: cancelToken1.token,
            params: {markdown: true, page: page, ...params}
        })
        .then(res => dispatch(ACTIONS.get_data(res.data)))
        .catch((err) => {
            //when request is canceled err will be thrown
            //only catch unintential errors
            if(axios.isCancel(err)) return;
            dispatch(ACTIONS.error({error: err}))
        });

        /////////checking if for next page of jobs
        axios.get(`${BASE_URL}`,{
            cancelToken2: cancelToken2.token,
            params: {markdown: true, page: page + 1, ...params}
        })
        .then(res => dispatch(ACTIONS.has_next_page(res.data.length !== 0)))
        .catch((err) => {
            //when request is canceled err will be thrown
            //only catch unintential errors
            if(axios.isCancel(err)) return;
            dispatch(ACTIONS.error({error: err}))
        });

        //clean-up prev request
        return () => {
            cancelToken1.cancel()
            cancelToken2.cancel()
        }

    }, [params,page])
   
    return state;
}

export default useFetchJobs;
