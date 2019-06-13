import React from 'react';
import logo from './logo.png';
import './App.css';

import {CandidateByCountryChart} from './charts';

function App() {
  return (
    <div className="chart">
      <CandidateByCountryChart />
    </div>
  );
}

export default App;
