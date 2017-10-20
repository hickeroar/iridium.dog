import React, { Component } from 'react';
import Main from "./Main";
import { Link } from "react-router-dom";

import logo from '../assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h4><Link to="/video">Video</Link> <Link to="/video/foo">Specific</Link></h4>
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
