import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import Nav from './Nav'
import { Col, Row } from "./Grid";

const Base = ({ children }) => (
  <div>
  <Nav />

      {Auth.isUserAuthenticated() ? (
          <div>
          <Row>
          <Col size="md-12">
              <div className="top-bar-right" id="logout">
              <Link to="/logout">Log Out</Link>
              </div>
          </Col>
          </Row>
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