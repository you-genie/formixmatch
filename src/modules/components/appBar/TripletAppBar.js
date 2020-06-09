import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles/';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LockIcon from '@material-ui/icons/Lock';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1, 0),
        width: '100%',
        alignItems: 'center',
        justify: 'center',
    },
    id: {
        paddingBottom: theme.spacing(0.5),
    },
    spacing: {
        visibility: 'hidden'
    }
}));

function TripletAppBar(props) {
    const {item1, item2, item3} = props
    const classes = useStyles();
    return (
        <Grid
            container lg={12}
            direction='row'
            alignItems='center'
            className={classes.root}>
            <Grid
                item
                xs={12}>
                <AppBar elevation="0" color="transparent" position="static">
                    <ToolBar >
                        <Grid
                            container
                            direction='row'
                            justify='space-between'>
                            {item1}
                            {item2}
                            {item3}
                        </Grid>

                    </ToolBar>
                </AppBar >
            </Grid>

        </Grid>

    );
}

export default  TripletAppBar;