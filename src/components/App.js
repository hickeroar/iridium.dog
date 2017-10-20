import React, { Component } from 'react';
import Router from "./Router";
import { Link } from "react-router-dom";

import logo from '../assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Iridium Dog</h1>
          <h4>
            <Link to="/">Home</Link>
            &nbsp;
            <Link to="/video">Video</Link>
            &nbsp;
            <Link to="/video/foo">Specific</Link>
          </h4>
        </header>
        <Router/>
      </div>
    );
  }
}

export default App;
