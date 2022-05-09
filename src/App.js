import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
