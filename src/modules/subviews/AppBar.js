import React from 'react';
import {makeStyles} from '@material-ui/core/styles/';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SvgIcon from '@material-ui/core/SvgIcon';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Logo from 'public/icons/logo.svg';

const useStyles = makeStyles((theme) => ({

}));

function CustomAppBar(props) {
    return (
        <AppBar elevation="0" color="transparent" position="static">
            <ToolBar>
                <IconButton edge="start">
                    <SvgIcon component={Logo} />
                    <MenuIcon />
                </IconButton>
            </ToolBar>
        </AppBar>
    );
}

export default  CustomAppBar;