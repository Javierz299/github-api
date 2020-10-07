import React from 'react';
import './App.css';

import useFetchJobs from './Hooks/useFetchJobs'

const App = () => {
  const { jobs, loading, error } = useFetchJobs()
  console.log('jobs',jobs)
  console.log('loading',loading)
  console.log('error',error)
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub</h1>
      </header>
      <main>
        <h1>{jobs.length}</h1>
        {loading && <h2>loading...</h2>}
        {error && <h2>error...</h2>}


      </main>
    </div>
  );
}

export default App;
