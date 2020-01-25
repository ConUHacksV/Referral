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
      password: '',
      confirmPassword: '',
      email: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    console.log(this.state.username);
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
          <Typography variant='h3'>Register</Typography>
          <form onSubmit>
            <TextField
              id='email'
              label='McGill Email'
              name='email'
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id='username'
              label='Username'
              name='username'
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id='password'
              label='Password'
              name='password'
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id='password'
              label='Confirm Password'
              name='confirmPassword'
              onChange={this.handleChange}
              fullWidth
            />
          </form>
          <Grid>
            <Link to='/homepage'>
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
