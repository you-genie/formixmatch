import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import ProfileCard from "../views/ProfileCard";
import GalleryTab from "../views/GalleryTab";

const styles = (theme) => {

}

function Profile(props) {
	const { classes } = props;
    return (
        <div className={classes.root}>
            <ProfileCard />
            <GalleryTab />
        </div>
    );
}

export default withStyles(styles)(Profile);