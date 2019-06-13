import React from 'react';
import logo from './logo.png';
import './App.css';

import {CandidateByCountryChart} from './charts';

function App() {
  return (
    <div className="chart">
        <img src={logo} className="logo" alt="logo"/>
        <CandidateByCountryChart />
    </div>
  );
}

export default App;
