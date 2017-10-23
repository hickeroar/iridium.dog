import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Router from "./Router";

import logo from '../assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <Link to="/">
            <div className="text">IRIDIUM</div><div className="logo"><img src={logo} alt="Logo" /></div><div className="text">DOG</div>
            <div className="subtext">The Portfolio and Hobbies of Ryan Vennell</div>
          </Link>
        </header>
        <Router/>
      </div>
    );
  }
}

export default App;
