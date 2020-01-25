import React, { Fragment } from 'react';
import './App.css';

// Router
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import{ BrowserRouter as Router , Switch, Route } from 'react-router-dom';

// MUI theme
import { createMuiTheme } from '@material-ui/core/styles';
import theme from './util/theme';


const theme = createMuiTheme(theme);


import login from './pages/login';
import homepage from './pages/homepage';


function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={login} />
          <Route exact path='/homepage' component={homepage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
