import React from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = (theme) => {

}

function Home(props) {
	const { classes } = props;
    return (
        <div className={classes.root}>
            HOME
        </div>
    );
}

export default withStyles(styles)(Home);