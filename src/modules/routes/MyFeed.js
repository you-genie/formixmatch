import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import ProfileCard from "../components/ProfileCard";
import GalleryTab from "../views/GalleryTab";

const styles = (theme) => ({
    root: {
        width: '100%',
    }
})

function MyFeed(props) {
	const { classes } = props;
    return (
        <div className={classes.root}>
            <ProfileCard />
            <GalleryTab />
        </div>
    );
}

export default withStyles(styles)(MyFeed);