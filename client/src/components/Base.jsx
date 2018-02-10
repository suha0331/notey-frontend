import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import Nav from './Nav'

const Base = ({ children }) => (
  <div>
  <Nav />

      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <span class="glyphicon glyphicon-log-out"></span>
          <Link to="/logout">Log Out</Link>
        </div>
      ) 
      : (
        <div className="top-bar-right">
{/*          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>*/}
        </div>
      )}

    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;