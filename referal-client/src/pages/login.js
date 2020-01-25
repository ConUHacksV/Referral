import React, { Component } from 'react'

// MUI tings
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Router
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class login extends Component {
    render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
                    <Grid item sm={5}>
                        <Typography variant='h3'>
                            McGill Referal
                        </Typography>
                        <form>
                            <TextField id="username" label="Username" fullWidth />
                            <TextField id="password" label="Password" fullWidth />
                        </form>
                    <Button>
                        Login
                    </Button>
                    </Grid>


          </Grid>
        )
    }
}

export default withRouter(login);
