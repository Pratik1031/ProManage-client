import React from 'react';
import './App.css';
import Register from './Views/Register/Register';
import Main from './Views/Main/Main';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/dashboard' element={<Main />} />
    </Routes>
  );
};

export default App;
