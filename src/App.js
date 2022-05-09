import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
