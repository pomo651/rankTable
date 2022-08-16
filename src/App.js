import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LeaderBoard from './Component/LeaderBoard.js';
import 'h8k-components';

const title = "SPA - LeaderBoard";

function App() {
	return (
    <Router>
      <div className="App">
			  <h8k-navbar header={title}></h8k-navbar>
        <Routes>
          <Route path="/" element={<LeaderBoard />} />
          <Route path="/:sort" element={<LeaderBoard />} />
        </Routes>
		  </div>
    </Router>
	);
}

export default App;
