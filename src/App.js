import React, { useState } from 'react';
import './App.css';

import useFetchJobs from './Hooks/useFetchJobs'

import Job from './Functional/Job'
import JobsPagination from './Functional/JobsPagination';

const App = () => {
  const [params, setParams] = useState({});
  const [page,setPage] = useState(1)

  const { jobs, loading, error, has_next_page } = useFetchJobs(params,page)
  return (
    <div className="App">
      {console.log('useFetchJob',has_next_page)}
      <header className="App-header">
        <h1>GitHub</h1>
      </header>
      <section>
        <JobsPagination page={page} setPage={setPage} hasNextPage={has_next_page} />
      </section>
      <main>
        <div className="job-container">
          {jobs.map(job =>(
            <Job key={job.id} job={job}/>
        ))}
        </div>
        {loading && <h2>loading...</h2>}
        {error && <h2>error...</h2>}
      </main>
      <section>
        <JobsPagination page={page} setPage={setPage} hasNextPage={has_next_page}/>
       </section>
    </div>
  );
}

export default App;
