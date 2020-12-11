import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Header from "../components/Header";
import GalleryTab from "../components/gallery/GalleryTab";
import imageLoader from "../components/images";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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

function ForMixMatch(props) {
    const { classes } = props;
    const [items, setItems] = React.useState(imageLoader());
    const [selectedItems, setSelectedItems] = React.useState([]);
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
    const getItems = (data) => {setSelectedItems(data)}
    return (
        <div className={classes.root}>
            <Header timerStop={timerStop} numbers={selectedItems.length} sceneType={baseType}/>
            <GalleryTab all items={getItems} images={items} sendStop={stopTimer} />
        </div>
    );
}

export default withStyles(styles)(ForMixMatch);