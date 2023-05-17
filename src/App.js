
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

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
          <Link to="/" className='btn btn-primary'> Inicio</Link>
          <Link to="/registrar" className='btn btn-primary'> Registrar</Link>
          <Link to="/footer" className='btn btn-primary'> Imagenes</Link>
          <Link to="/header" className='btn btn-primary'> Reservar</Link>

        </Router>
        <img src={logo} className="App-logo" alt="logo" />
        <Jheader/>
        <p>
          para tener mas informacion ir al siguiente enlace
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
