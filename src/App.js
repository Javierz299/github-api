import React from 'react';
import './App.css';

import useFetchJobs from './Hooks/useFetchJobs'
import JobsReducer from './Reducer/JobsReducer'

const App = () => {
  const { jobs, loading, error } = useFetchJobs(JobsReducer)

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub</h1>
      </header>
      <main>
        test
      </main>
    </div>
  );
}

export default App;
