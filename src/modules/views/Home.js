import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Profile from "../subviews/Profile";

const styles = (theme) => {

}

function Home(props) {
	const { classes } = props;
    return (
        <div className={classes.root}>
            <Profile />
        </div>
    );
}

export default withStyles(styles)(Home);