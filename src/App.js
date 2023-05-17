
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "teact-router-dom";

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Jheader from './components/header';
import Jfooter from './components/footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Link to="/"> Inicio</Link>
          <Link to="/"> Usuario</Link>
          <Link to="/"> footer</Link>
          <Link to="/"> header</Link>
        
        </Router>
        <img src={logo} className="App-logo" alt="logo" />
        <Jheader/>
        <p>
          para tener mas informacion ir al siguiente LINK
        </p>
        <a
          className="Zoologico"
          href="https://ukumari.org/"
          target="_blank"
          rel=""
        >
          Ir al Zoologico de UKUMARI
        </a>
        <Jfooter></Jfooter>
      </header>
    </div>
  );
}

export default App;
