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
          <Typography variant='h3'>Register</Typography>
          <form>
            <TextField id='email' label='McGill Email' fullWidth />
            <TextField id='username' label='Username' fullWidth />
            <TextField id='password' label='Password' fullWidth />
            <TextField id='password' label='Confirm Password' fullWidth />
          </form>
          <Button>Register</Button>
        </Grid>
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(login));
