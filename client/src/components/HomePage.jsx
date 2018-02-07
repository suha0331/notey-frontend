import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'material-ui/Card';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';

const HomePage = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
	<Card className="cardBox">
	    {Auth.isUserAuthenticated() ? (
	        <div className="cardLog">
	          <Link to="/logout">Log Out</Link>
	        </div>
	      ) : (
	        <div className="cardLog">
	          <Link to="/login">Log In</Link>
	          <Link to="/signup">Sign Up</Link>
	        </div>
	    )}
	</Card>
</MuiThemeProvider>
);

export default HomePage;