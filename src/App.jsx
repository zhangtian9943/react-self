import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashbord from './dashbord'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashbord>
        </Dashbord>
      </header>
    </div>
  );
}

export default App;
