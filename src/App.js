import React, { Fragment } from 'react';
import './App.css';

// Router
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// MUI theme
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import themefile from './util/theme';

import login from './pages/login';
import homepage from './pages/homepage';
import register from './pages/register';

const theme = createMuiTheme(themefile);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/' component={login} />
          <Route exact path='/homepage' component={homepage} />
          <Route exact path='/register' component={register} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
