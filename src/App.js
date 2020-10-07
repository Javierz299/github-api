import React, { useState } from 'react';
import Job from './Functional/Job'
import './App.css';

import useFetchJobs from './Hooks/useFetchJobs'

const App = () => {
  const [params, setParams] = useState({});
  const [page,setPage] = useState(1)

  const { jobs, loading, error } = useFetchJobs(params,page)
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub</h1>
      </header>
      <main>
        <div className="job-container">
          {jobs.map(job =>(
            <Job key={job.id} job={job}/>
        ))}
        </div>
        {loading && <h2>loading...</h2>}
        {error && <h2>error...</h2>}


      </main>
    </div>
  );
}

export default App;
