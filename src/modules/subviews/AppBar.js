import React from 'react';
import {makeStyles} from '@material-ui/core/styles/';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SvgIcon from '@material-ui/core/SvgIcon';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../../assets/icons/logo.svg'

const useStyles = makeStyles((theme) => ({

}));

function CustomAppBar(props) {
    return (
        <AppBar elevation="0" color="transparent" position="static">
            <ToolBar>
                <Button
                    startIcon={<img src={Logo} width="150px"/>} />
            </ToolBar>
        </AppBar>
    );
}

export default  CustomAppBar;