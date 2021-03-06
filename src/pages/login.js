import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';

// MUI tings
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

// Router
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const styles = theme => ({
  title: {
    textAlign: 'center'
  }
});

class login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  onSubmitRegister = () => {
    fetch('http://localhost:3000/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(response => response.json());
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
        style={{ minHeight: '100vh' }}
        className={classes.title}
      >
        <Grid item justify='center' alignItems='center' sm={3}>
          <Typography variant='h3'>McGill Referal</Typography>
          <form>
            <TextField id='username' label='Username' fullWidth />
            <TextField id='password' label='Password' fullWidth />
          </form>
          <Grid>
            <Link to='/homepage'>
              <Button>Login</Button>
            </Link>
            <Link to='/register'>
              <Button>Register</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(login));
