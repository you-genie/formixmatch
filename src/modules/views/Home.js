import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Profile from "../subviews/Profile";
import GalleryTab from "../subviews/GalleryTab";

const styles = (theme) => {

}

function Home(props) {
	const { classes } = props;
    return (
        <div className={classes.root}>
            <Profile />
            <GalleryTab />
        </div>
    );
}

export default withStyles(styles)(Home);