import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import Nav from "./Nav"

const Base = ({ children }) => (
  <div>
    <div className="top-bar">
<nav className="navbar navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          <h1>NOTEY</h1>
        </a>
      </div>
    </div>
  </nav>

      <div className="top-bar-right">
        <Link to="/login" >Log in</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/landing">Landing(WorkHereSuha)</Link>
      </div>

    </div>

    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;