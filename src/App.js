import React from 'react';
import './App.css';
import Register from './Views/Register/Register';
import Main from './Views/Main/Main';
import Analytics from './Views/Analytics/Analytics';
import Settings from './Views/Settings/Settings';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './hooks/useAuthContext';
function App() {
  const { user } = useAuthContext();
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={!user ? <Register /> : <Navigate to='/dashboard' />}
        />
        <Route
          path='/dashboard'
          element={user ? <Main /> : <Navigate to='/' />}
          exact
        />
        <Route
          path='/analytics'
          element={user ? <Analytics /> : <Navigate to='/' />}
          exact
        />
        <Route
          path='/settings'
          element={user ? <Settings /> : <Navigate to='/' />}
          exact
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
