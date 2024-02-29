import React from 'react';
import './App.css';
import Register from './Views/Register/Register';
import Main from './Views/Main/Main';
import Analytics from './Views/Analytics/Analytics';
import Settings from './Views/Settings/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/dashboard' element={<Main />} exact />
        <Route path='/analytics' element={<Analytics />} exact />
        <Route path='/settings' element={<Settings />} exact />
      </Routes>
    </Router>
  );
}

export default App;
