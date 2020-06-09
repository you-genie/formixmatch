import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import ProfileView from "../views/ProfileView";
import GalleryTab from "../views/GalleryTab";

const styles = (theme) => {

}

function Profile(props) {
	const { classes } = props;
    return (
        <div className={classes.root}>
            <ProfileView />
            <GalleryTab />
        </div>
    );
}

export default withStyles(styles)(Profile);