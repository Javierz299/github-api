import React, { useState } from 'react';
import './App.css';

import useFetchJobs from './Hooks/useFetchJobs'

import Job from './Functional/Job'
import JobsPagination from './Functional/JobsPagination';

const App = () => {
  const [params, setParams] = useState({});
  const [page,setPage] = useState(1)

  const { jobs, loading, error, hasNextPage } = useFetchJobs(params,page)
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub</h1>
      </header>
      <section>
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
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
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
       </section>
    </div>
  );
}

export default App;
