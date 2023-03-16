import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import Register from './components/Register';

function App1() {
  return (
    <div className="App1">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-details/:id" element={<Detail />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App1;
