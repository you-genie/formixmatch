import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Header from "../components/Header";
import {twoLoader} from "../components/ImageLoader";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Experiment2GAlleryTab from "../components/gallery/Experiment2GAlleryTab";

const styles = (theme) => ({
    root: {
        width: '100%',
    },
    typeStyle: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    typeTypoStyle: {
        color: 'palevioletred'
    },
})

function SelView(props) {
    const { classes } = props;
    const [timerStop, setTimerStop] = React.useState(false);
    const stopTimer = () => {
        setTimerStop(true)
    };

    const baseType = (
        <Grid item className={classes.typeStyle} alignItems="flex-end">
            <Typography
                className={classes.typeTypoStyle}
                variant='h3'>
                Type 2
            </Typography>
        </Grid>
    )
    return (
        <div className={classes.root}>
            <Header timerStop={timerStop} sceneType={baseType}/>
            <Experiment2GAlleryTab sendStop={stopTimer}/>
        </div>
    );
}

export default withStyles(styles)(SelView);