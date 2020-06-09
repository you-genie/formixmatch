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
        padding: theme.spacing(1),
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

function CustomAppBar(props) {
    const {user} = props
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
                            <div className={classes.spacing}>
                                <IconButton>
                                    <MenuIcon />
                                </IconButton>
                            </div>
                            <ButtonBase
                                focusRipple
                                key={user.id}>
                                <LockIcon style={{fontSize: 14}}/>
                                <Typography variant='subtitle2' className={classes.id}>
                                    {user.id}
                                </Typography>
                                <ExpandMoreIcon style={{fontSize: 16}}/>
                            </ButtonBase>

                            <IconButton>
                                <MenuIcon />
                            </IconButton>
                        </Grid>

                    </ToolBar>
                </AppBar >
            </Grid>

        </Grid>

    );
}
CustomAppBar.defaultProps = {
    user: {
        id: 'itz_sammu_time',
        uid: 0
    }
}
export default  CustomAppBar;