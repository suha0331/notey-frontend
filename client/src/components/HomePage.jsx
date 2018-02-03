import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle } from 'material-ui/Card';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const HomePage = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
<Card className="container">
<CardTitle title="React Application" subtitle="This is the home page."/>
</Card>
</MuiThemeProvider>
);

export default HomePage;