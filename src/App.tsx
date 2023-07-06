import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Tweet from './components/Tweet';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tweet/:tweetId" element={<Tweet/>}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
