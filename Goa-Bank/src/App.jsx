import { useState } from 'react';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
