import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

const App = ({links}) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <ul>
      {links.map((url, index) => <li key={index}>{url}</li>)}
      </ul>
  </div>
);

const mapStateToProps = state => ({
  links: state.links
})

export default connect(mapStateToProps)(App);
