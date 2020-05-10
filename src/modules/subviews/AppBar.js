import React from 'react';
import {makeStyles} from '@material-ui/core/styles/';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({

}));

function CustomAppBar(props) {
    return (
        <AppBar color="primary" position="static">
            <ToolBar>
                <IconButton edge="start">
                    <MenuIcon />
                </IconButton>
            </ToolBar>
        </AppBar>
    );
}

export default  CustomAppBar;