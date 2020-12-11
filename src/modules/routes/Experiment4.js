import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Header from "../components/Header";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Experiment4GalleryTab from "../components/gallery/Experiment4GalleryTab";
import Experiment4 from "./Experiment4";

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
                Type 3
            </Typography>
        </Grid>
    )
    return (
        <div className={classes.root}>
            <Header timerStop={timerStop} sceneType={baseType}/>
            <Experiment4GalleryTab sendStop={stopTimer}/>
        </div>
    );
}

export default withStyles(styles)(SelView);