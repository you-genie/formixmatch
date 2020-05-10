import React from 'react';
import {withStyles} from '@material-ui/core/styles/';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme) => ({

});

function CustomAppBar(props) {
    return (
        <AppBar position="static">
            <ToolBar>
                <IconButton edge="start">
                    <MenuIcon />
                </IconButton>
            </ToolBar>
        </AppBar>
    );
}

export default  withStyles(styles)(CustomAppBar);