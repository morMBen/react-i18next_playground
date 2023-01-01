import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Messages from './components/Messages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
