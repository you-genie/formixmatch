import React from 'react';
import {fade, makeStyles, useTheme} from '@material-ui/core/styles/';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

function HistoryAppBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Grid
            container lg={12}
            direction='row'
            alignItems='center'
            className={classes.root}>
            <Grid
                item
                xs={12}>
                <AppBar color='secondary' elevation="1" position="fixed">
                    <ToolBar variant='dense'>
                        <Grid
                            container
                            direction='row'
                            justify='center'>
                            <Typography variant='body2'>
                                활동
                            </Typography>
                        </Grid>

                    </ToolBar>
                </AppBar >
            </Grid>

        </Grid>

    );
}

export default HistoryAppBar;