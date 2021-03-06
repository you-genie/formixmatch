import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles/';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1, 0),
        width: '100%',
        alignItems: 'center',
        justify: 'center',
    },
    toolbar: {

    },
    id: {
        paddingBottom: theme.spacing(0.5),
    },
    spacing: {
        visibility: 'hidden'
    }
}));

function TripletAppBar(props) {
    const {item1, item2, item3} = props;
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
                <AppBar elevation="0" color="white" position="fixed">
                    <ToolBar className={classes.toolbar}>
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