import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Index from './components/Admin/Index';
import Add_Food from './components/Admin/Add-Food';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Admin' element={
            <Index 
              name = "Welcome Anuradha"
            />
          }></Route>
          <Route path='/Add-Food' element={<Add_Food />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
