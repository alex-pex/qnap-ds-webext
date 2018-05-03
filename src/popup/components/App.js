import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

const App = ({ links }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <ul>
      {links.map(url => <li key={url}>{url}</li>)}
    </ul>
  </div>
);

App.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  links: state.links,
});

export default connect(mapStateToProps)(App);
