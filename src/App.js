import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';
import About from './components/About';
import style from './App.module.css';

function App() {
  return (
    <>
      <div className={style.body}>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
